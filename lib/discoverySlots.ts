// Shared between the booking UI and the API route so both agree on what a valid
// preferred time looks like and how a booked slot blocks the calendar.

export const BOOKING_TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
] as const;

export type BookingTimeSlot = (typeof BOOKING_TIME_SLOTS)[number];

export function isBookingTimeSlot(value: string): value is BookingTimeSlot {
  return (BOOKING_TIME_SLOTS as readonly string[]).includes(value);
}

function parseSlotMinutes(time: string): number | null {
  const match = /^(\d{1,2}):(\d{2}) (AM|PM)$/.exec(time);
  if (!match) return null;
  let hour = Number(match[1]) % 12;
  if (match[3] === "PM") hour += 12;
  return hour * 60 + Number(match[2]);
}

function formatSlotMinutes(totalMinutes: number): string {
  const period = totalMinutes >= 720 ? "PM" : "AM";
  let hour = Math.floor(totalMinutes / 60) % 12;
  if (hour === 0) hour = 12;
  return `${hour}:${String(totalMinutes % 60).padStart(2, "0")} ${period}`;
}

// The slot 30 minutes after `time`, or null if that isn't itself a bookable slot
// (e.g. right after the last morning or afternoon slot).
export function nextBookingSlot(time: BookingTimeSlot): BookingTimeSlot | null {
  const minutes = parseSlotMinutes(time);
  if (minutes === null) return null;
  const candidate = formatSlotMinutes(minutes + 30);
  return isBookingTimeSlot(candidate) ? candidate : null;
}

// A booked call blocks its own slot plus the next one, so a 30-minute call leaves a
// full 1-hour gap before the next available slot instead of butting up against it.
export function expandBlockedTimes(bookedTimes: readonly string[]): BookingTimeSlot[] {
  const blocked = new Set<BookingTimeSlot>();
  for (const time of bookedTimes) {
    if (!isBookingTimeSlot(time)) continue;
    blocked.add(time);
    const next = nextBookingSlot(time);
    if (next) blocked.add(next);
  }
  return Array.from(blocked);
}

// dateKey is "YYYY-MM-DD". Bookings are only open Monday through Saturday.
export function isBookableWeekday(dateKey: string): boolean {
  const date = new Date(`${dateKey}T12:00:00`);
  if (Number.isNaN(date.getTime())) return false;
  return date.getDay() !== 0;
}

export default function DemoVideo() {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-ink)] shadow-sm">
      <video
        controls
        preload="none"
        poster="/videos/idol-fairies-demo-poster.jpg"
        className="aspect-video w-full"
      >
        <source src="/videos/idol-fairies-demo.mp4" type="video/mp4" />
        Your browser doesn&rsquo;t support embedded video. You can{" "}
        <a href="/videos/idol-fairies-demo.mp4" className="underline">
          download the demo
        </a>{" "}
        instead.
      </video>
    </div>
  );
}

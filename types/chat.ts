export type ChatRole = "user" | "assistant";

export type ChatHistoryMessage = {
  role: ChatRole;
  text: string;
};

export type ChatReply = {
  text: string;
  error?: boolean;
};

export const MAX_MESSAGE_LENGTH = 500;
export const MAX_HISTORY_MESSAGES = 12;

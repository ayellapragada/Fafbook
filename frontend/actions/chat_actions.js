export const CLOSE_ALL_CHATS = "CLOSE_ALL_CHATS";

export const CLOSE_CHAT = "CLOSE_CHAT";

export const OPEN_CHAT = "OPEN_CHAT";

export const closeAllChats = () => ({
  type: CLOSE_ALL_CHATS
});

export const closeChat = (chat) => ({
  type: CLOSE_CHAT,
  chat
});

export const openChat = (chat) => ({
  type: OPEN_CHAT,
  chat
});

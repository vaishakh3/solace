import { create } from 'zustand'

export const useChats = create((set) => ({
  chats: [],
  addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
}))

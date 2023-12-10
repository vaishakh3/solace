import { create } from 'zustand'

export const useMusic = create((set) => ({
  musics: [],
  setMusic: (musics) => set((state) => ({ musics })),
}))

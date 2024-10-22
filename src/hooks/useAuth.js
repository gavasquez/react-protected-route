import { create } from 'zustand';
import { persist } from 'zustand/middleware'


export const useStore = create(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }), // Cambia 'state' por 'user'
      logout: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
      getStorage: () => localStorage,
    }
  )
);
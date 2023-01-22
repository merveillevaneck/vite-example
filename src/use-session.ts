// use zustand to make a session store with a hook

import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export type SessionStore = {
  active: boolean,
  accessToken: string | null,
  setActive: (active: boolean) => void,
  setAccessToken: (accessToken: string) => void,
}

// debug this code
export const useSession = create<SessionStore>()(
  devtools(
    persist(
      (set) => ({
        active: false,
        accessToken: null,
        setActive: (active: boolean) => set(active ? { active } : { active, accessToken: null }),
        setAccessToken: (accessToken: string | null) => set({ accessToken })
      }),
      {
        name: 'session'
      }
    )
  )
)

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface PreferencesState {
  preferences: {
    themeColor: string
  }
  changeThemeColor: (color: string) => void
}

export const usePreferences = create<PreferencesState>()(
  immer(
    persist(
      set => ({
        preferences: {
          themeColor: '#f87171',
        },
        changeThemeColor: color => {
          set(state => {
            state.preferences.themeColor = color
          })
        },
      }),
      {
        name: 'preferences',
      },
    ),
  ),
)

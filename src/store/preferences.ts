import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface PreferencesState {
  preferences: {
    icon: string
    themeColor: string
  }
  changeThemeColor: (color: string) => void
  changeIcon: (icon: string) => void
}

export const usePreferences = create<PreferencesState>()(
  immer(
    persist(
      set => ({
        preferences: {
          icon: '🍎',
          themeColor: '#f87171',
        },
        changeThemeColor: color => {
          set(state => {
            state.preferences.themeColor = color
          })
        },
        changeIcon: icon => {
          set(state => {
            state.preferences.icon = icon
          })
        },
      }),
      {
        name: 'preferences',
      },
    ),
  ),
)

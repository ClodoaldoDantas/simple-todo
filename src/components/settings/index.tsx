import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { CheckIcon, Settings2 } from 'lucide-react'
import { useEffect } from 'react'

import { usePreferences } from '../../store/preferences'
import styles from './styles.module.scss'

interface ColorType {
  name: string
  color: string
}

const colors: ColorType[] = [
  { name: 'Slate', color: '#94a3b8' },
  { name: 'Gray', color: '#9ca3af' },
  { name: 'Red', color: '#f87171' },
  { name: 'Orange', color: '#fb923c' },
  { name: 'Yellow', color: '#facc15' },
  { name: 'Green', color: '#4ade80' },
  { name: 'Emerald', color: '#34d399' },
  { name: 'Teal', color: '#2dd4bf' },
  { name: 'Sky', color: '#38bdf8' },
  { name: 'Blue', color: '#60a5fa' },
  { name: 'Indigo', color: '#818cf8' },
  { name: 'Violet', color: '#a78bfa' },
  { name: 'Purple', color: '#c084fc' },
  { name: 'Fuchsia', color: '#e879f9' },
  { name: 'Pink', color: '#f472b6' },
  { name: 'Rose', color: '#fb7185' },
]

export function Settings() {
  const themeColor = usePreferences(state => state.preferences.themeColor)
  const changeThemeColor = usePreferences(state => state.changeThemeColor)

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--primary', themeColor)
  }, [themeColor])

  function handleSelectColor(item: ColorType) {
    changeThemeColor(item.color)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.dropdownMenuTrigger} type="button">
          <Settings2 size={20} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          className={styles.dropdownMenuContent}
          sideOffset={5}
        >
          {colors.map(item => (
            <DropdownMenu.Item
              key={item.name}
              className={styles.dropdownMenuItem}
              onSelect={() => handleSelectColor(item)}
            >
              <div
                className={styles.itemColor}
                style={{ backgroundColor: item.color }}
              />

              {item.name}

              {themeColor === item.color && (
                <CheckIcon style={{ marginLeft: 'auto' }} size={18} />
              )}
            </DropdownMenu.Item>
          ))}

          <DropdownMenu.Arrow className={styles.dropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

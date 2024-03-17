import { Settings2 } from 'lucide-react'
import { useEffect } from 'react'

import { Dropdown } from '../../../components/dropdown'
import { usePreferences } from '../../../store/preferences'
import { SelectColor } from './select-color'
import styles from './styles.module.scss'

export function Settings() {
  const themeColor = usePreferences(state => state.preferences.themeColor)
  const changeThemeColor = usePreferences(state => state.changeThemeColor)

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--primary', themeColor)
  }, [themeColor])

  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <button className={styles.trigger}>
          <Settings2 size={20} />
        </button>
      </Dropdown.Trigger>

      <Dropdown.Content>
        <SelectColor
          currentColor={themeColor}
          onSelectColor={(color: string) => changeThemeColor(color)}
        />
      </Dropdown.Content>
    </Dropdown.Root>
  )
}

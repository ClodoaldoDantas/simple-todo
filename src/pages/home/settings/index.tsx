import * as Tabs from '@radix-ui/react-tabs'
import { Globe, Palette, PartyPopper, Settings2 } from 'lucide-react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Dropdown } from '../../../components/dropdown'
import { usePreferences } from '../../../store/preferences'
import { IconSelector } from './icon-selector'
import { LanguageSelector } from './language-selector'
import { SelectColor } from './select-color'
import styles from './styles.module.scss'

export function Settings() {
  const { t } = useTranslation()
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
        <Tabs.Root defaultValue="colors">
          <Tabs.List className={styles.tabList} aria-label="Opções">
            <Tabs.Trigger className={styles.tabsTrigger} value="colors">
              <Palette size={20} />
              {t('settings.colors')}
            </Tabs.Trigger>

            <Tabs.Trigger className={styles.tabsTrigger} value="icons">
              <PartyPopper size={20} />
              {t('settings.icons')}
            </Tabs.Trigger>

            <Tabs.Trigger className={styles.tabsTrigger} value="languages">
              <Globe size={20} />

              {t('settings.languages')}
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="colors">
            <SelectColor
              currentColor={themeColor}
              onSelectColor={(color: string) => changeThemeColor(color)}
            />
          </Tabs.Content>

          <Tabs.Content value="icons">
            <IconSelector />
          </Tabs.Content>

          <Tabs.Content value="languages">
            <LanguageSelector />
          </Tabs.Content>
        </Tabs.Root>
      </Dropdown.Content>
    </Dropdown.Root>
  )
}

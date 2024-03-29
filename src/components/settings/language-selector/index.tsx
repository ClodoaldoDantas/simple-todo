import * as RadioGroup from '@radix-ui/react-radio-group'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FlagBR } from '../../flags/flag-br'
import { FlagUS } from '../../flags/flag-us'
import styles from './styles.module.scss'

export function LanguageSelector() {
  const { i18n, t } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)

  function handleLanguageChange(value: string) {
    i18n.changeLanguage(value)
    setSelectedLanguage(value)
  }

  return (
    <RadioGroup.Root
      className={styles.radioGroupRoot}
      value={selectedLanguage}
      onValueChange={handleLanguageChange}
      aria-label={t('languageSelectorAriaLabel')}
    >
      <div className={styles.radioGroupContent}>
        <RadioGroup.Item
          className={styles.radioGroupItem}
          value="pt-BR"
          id="portuguese"
        >
          <RadioGroup.Indicator className={styles.radioGroupIndicator} />
        </RadioGroup.Item>

        <label className={styles.label} htmlFor="portuguese">
          <FlagBR />
          Português (BR)
        </label>
      </div>

      <div className={styles.radioGroupContent}>
        <RadioGroup.Item
          className={styles.radioGroupItem}
          value="en"
          id="english"
        >
          <RadioGroup.Indicator className={styles.radioGroupIndicator} />
        </RadioGroup.Item>

        <label className={styles.label} htmlFor="english">
          <FlagUS />
          English (US)
        </label>
      </div>
    </RadioGroup.Root>
  )
}

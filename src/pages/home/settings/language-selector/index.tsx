import * as RadioGroup from '@radix-ui/react-radio-group'

import { FlagBR } from '../../../../components/flags/flag-br'
import { FlagUS } from '../../../../components/flags/flag-us'
import styles from './styles.module.scss'

export function LanguageSelector() {
  return (
    <RadioGroup.Root
      className={styles.radioGroupRoot}
      defaultValue="pt-br"
      aria-label="Selecione o idioma do aplicativo"
    >
      <div className={styles.radioGroupContent}>
        <RadioGroup.Item
          className={styles.radioGroupItem}
          value="pt-br"
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
          Inglês (US)
        </label>
      </div>
    </RadioGroup.Root>
  )
}

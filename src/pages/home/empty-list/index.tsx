import { Goal } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import styles from './styles.module.scss'

export function EmptyList() {
  const { t } = useTranslation()

  return (
    <div className={styles.emptyList}>
      <Goal size={48} />
      <strong>{t('emptyListTitle')}</strong>
      <p>{t('emptyListDescription')}</p>
    </div>
  )
}

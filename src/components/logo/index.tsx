import { usePreferences } from '../../store/preferences'
import { Container } from '../container'
import styles from './styles.module.scss'

export function Logo() {
  const icon = usePreferences(state => state.preferences.icon)

  return (
    <Container>
      <div className={styles.logoContainer}>
        <span className={styles.logo}>{icon}</span>
      </div>
    </Container>
  )
}

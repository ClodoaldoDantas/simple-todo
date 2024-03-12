import { Container } from '../container'
import styles from './styles.module.scss'

export function Logo() {
  return (
    <Container>
      <div className={styles.logoContainer}>
        <span className={styles.logo}>📝</span>
      </div>
    </Container>
  )
}

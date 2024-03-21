import { Container } from '../container'
import { Settings } from '../settings'
import styles from './styles.module.scss'

export function Banner() {
  return (
    <div className={styles.banner}>
      <Container className={styles.container}>
        <Settings />
      </Container>
    </div>
  )
}

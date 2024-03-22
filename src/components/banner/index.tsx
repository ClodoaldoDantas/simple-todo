import { Container } from '../container'
import { Settings } from '../settings'
import styles from './styles.module.scss'

export function Banner() {
  return (
    <header id="banner" className={styles.banner}>
      <Container className={styles.container}>
        <Settings />
      </Container>
    </header>
  )
}

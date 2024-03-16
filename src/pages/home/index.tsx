import { Banner } from '../../components/banner'
import { Container } from '../../components/container'
import { Logo } from '../../components/logo'
import { Settings } from '../../components/settings'
import { AddTodoForm } from './add-todo-form'
import styles from './styles.module.scss'
import { TodoList } from './todo-list'

export function Home() {
  return (
    <>
      <Banner />
      <Logo />

      <Container className={styles.actions}>
        <AddTodoForm />
        <Settings />
      </Container>

      <TodoList />
    </>
  )
}

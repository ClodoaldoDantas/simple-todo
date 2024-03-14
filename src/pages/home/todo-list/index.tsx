import { Container } from '../../../components/container'
import { useTodos } from '../../../store'
import styles from './styles.module.scss'

export function TodoList() {
  const todos = useTodos(state => state.todos)

  return (
    <Container>
      <ul className={styles.todoList}>
        {todos.map(todo => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
    </Container>
  )
}

import { Container } from '../../../components/container'
import { useTodos } from '../../../store/todos'
import { TodoItem } from '../todo-item'
import styles from './styles.module.scss'

export function TodoList() {
  const todos = useTodos(state => state.todos)

  return (
    <Container>
      <ul className={styles.todoList}>
        {todos.map(todo => (
          <TodoItem data={todo} key={todo.id} />
        ))}
      </ul>
    </Container>
  )
}

import { Reorder } from 'framer-motion'
import { PackageX } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Container } from '../../../components/container'
import { type Todo } from '../../../interfaces/todo'
import { useTodos } from '../../../store/todos'
import { TaskProgress } from '../task-progress'
import { TodoItem } from '../todo-item'
import styles from './styles.module.scss'

export function TodoList() {
  const { t } = useTranslation()
  const todos = useTodos(state => state.todos)
  const updateList = useTodos(state => state.updateList)
  const clearTodos = useTodos(state => state.clearTodos)

  function handleSort(newOrder: Todo[]) {
    updateList(newOrder)
  }

  return (
    <Container className={styles.todoListContainer}>
      <Reorder.Group
        as="ul"
        axis="y"
        id="todo-list"
        values={todos}
        onReorder={handleSort}
        className={styles.todoList}
      >
        {todos.map(todo => (
          <TodoItem data={todo} key={todo.id} />
        ))}
      </Reorder.Group>

      {todos.length > 0 && (
        <div className={styles.todoActions}>
          <TaskProgress />

          <button
            onClick={clearTodos}
            data-testid="clear-todos"
            className={styles.clearButton}
          >
            <PackageX size={20} />
            <span>{t('clearTodosLabel')}</span>
          </button>
        </div>
      )}
    </Container>
  )
}

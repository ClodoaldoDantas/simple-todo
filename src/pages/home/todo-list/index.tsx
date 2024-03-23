import { PackageX } from 'lucide-react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { Container } from '../../../components/container'
import { useTodos } from '../../../store/todos'
import { TaskProgress } from '../task-progress'
import { TodoItem } from '../todo-item'
import styles from './styles.module.scss'

export function TodoList() {
  const { t } = useTranslation()
  const todos = useTodos(state => state.todos)
  const updateList = useTodos(state => state.updateList)
  const clearTodos = useTodos(state => state.clearTodos)

  const dragItem = useRef<number>(0)
  const dragOverItem = useRef<number>(0)

  function handleSort() {
    const cloneTodos = [...todos]

    const temp = cloneTodos[dragItem.current]

    cloneTodos[dragItem.current] = cloneTodos[dragOverItem.current]
    cloneTodos[dragOverItem.current] = temp

    updateList(cloneTodos)
  }

  return (
    <Container>
      <ul id="todo-list" className={styles.todoList}>
        {todos.map((todo, index) => (
          <TodoItem
            data={todo}
            key={todo.id}
            draggable
            onDragStart={() => (dragItem.current = index)}
            onDragEnter={() => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={event => event.preventDefault()}
          />
        ))}
      </ul>

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

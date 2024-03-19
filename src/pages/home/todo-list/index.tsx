import { useRef } from 'react'

import { Container } from '../../../components/container'
import { useTodos } from '../../../store/todos'
import { TodoItem } from '../todo-item'
import styles from './styles.module.scss'

export function TodoList() {
  const todos = useTodos(state => state.todos)
  const updateList = useTodos(state => state.updateList)

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
      <ul className={styles.todoList}>
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
    </Container>
  )
}

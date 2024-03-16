import * as Checkbox from '@radix-ui/react-checkbox'
import classNames from 'classnames'
import { CheckIcon, TrashIcon } from 'lucide-react'

import { type Todo } from '../../../interfaces/todo'
import { useTodos } from '../../../store'
import styles from './styles.module.scss'

export function TodoItem({ data }: { data: Todo }) {
  const toggleTodo = useTodos(state => state.toggleTodo)
  const removeTodo = useTodos(state => state.removeTodo)

  function handleToggleTodo(checked: Checkbox.CheckedState) {
    const isCompleted = checked === true
    toggleTodo(data.id, isCompleted)
  }

  function handleRemoveTodo() {
    removeTodo(data.id)
  }

  return (
    <li className={styles.todoItem}>
      <Checkbox.Root
        checked={data.completed}
        onCheckedChange={handleToggleTodo}
        className={styles.checkboxRoot}
        id={`todo-${data.id}`}
      >
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <CheckIcon size={18} />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <label
        htmlFor={`todo-${data.id}`}
        className={classNames(styles.todoLabel, {
          [styles.completed]: data.completed,
        })}
      >
        {data.description}
      </label>

      <button
        type="button"
        onClick={handleRemoveTodo}
        className={styles.deleteButton}
        aria-label="Remover atividade"
      >
        <TrashIcon size={20} />
      </button>
    </li>
  )
}

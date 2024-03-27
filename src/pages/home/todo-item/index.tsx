import * as Checkbox from '@radix-ui/react-checkbox'
import classNames from 'classnames'
import { Reorder } from 'framer-motion'
import { CheckIcon, Grip, TrashIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { type Todo } from '../../../interfaces/todo'
import { useTodos } from '../../../store/todos'
import styles from './styles.module.scss'

interface TodoItemProps {
  data: Todo
}

export function TodoItem({ data }: TodoItemProps) {
  const { t } = useTranslation()

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
    <Reorder.Item as="li" value={data} className={styles.todoItem}>
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

      <div className={styles.actions}>
        <Grip size={20} className={styles.gripIcon} />

        <button
          type="button"
          onClick={handleRemoveTodo}
          className={styles.deleteButton}
          data-testid="remove-button"
          aria-label={t('removeTodoAriaLabel')}
        >
          <TrashIcon size={20} />
        </button>
      </div>
    </Reorder.Item>
  )
}

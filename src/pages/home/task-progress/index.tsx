import * as Progress from '@radix-ui/react-progress'

import { useTodos } from '../../../store/todos'
import styles from './styles.module.scss'

export function TaskProgress() {
  const todos = useTodos(state => state.todos)

  const total = todos.length
  const completed = todos.filter(todo => todo.completed).length
  const progress = total > 0 ? Math.floor((completed / total) * 100) : 0

  function getStatusIcon() {
    if (progress === 100) return '🎉'
    if (progress > 0) return '🚀'
    return '🌱'
  }

  return (
    <div className={styles.taskProgress}>
      <Progress.Root className={styles.progressRoot} value={progress}>
        <Progress.Indicator
          className={styles.progressIndicator}
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>

      <span data-testid="task-progress" className={styles.taskProgressValue}>
        {`${getStatusIcon()} ${progress}%`}
      </span>
    </div>
  )
}

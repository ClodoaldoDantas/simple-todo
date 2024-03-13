import { z } from 'zod'
import { Container } from '../container'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { v4 as uuidv4 } from 'uuid'
import { type Todo } from '../../interfaces/todo'
import { ClipboardPenLine } from 'lucide-react'

const addTodoFormSchema = z.object({
  description: z.string(),
})

type AddTodoFormData = z.infer<typeof addTodoFormSchema>

export function AddTodo() {
  const { register, handleSubmit, reset } = useForm<AddTodoFormData>({
    defaultValues: {
      description: '',
    },
    resolver: zodResolver(addTodoFormSchema),
  })

  function handleSaveTodo(data: AddTodoFormData) {
    if (data.description.trim() === '') {
      return
    }

    const todosStorage = localStorage.getItem('todos')
    const todos: Todo[] = todosStorage ? JSON.parse(todosStorage) : []

    const newTodo: Todo = {
      id: uuidv4(),
      description: data.description,
      completed: false,
    }

    const updatedTodos = [...todos, newTodo]

    localStorage.setItem('todos', JSON.stringify(updatedTodos))

    reset({ description: '' })
  }

  return (
    <Container>
      <form
        onSubmit={handleSubmit(handleSaveTodo)}
        className={styles.addTodoForm}
      >
        <div className={styles.field}>
          <ClipboardPenLine size={24} />

          <input
            type="text"
            placeholder="Digite a descrição da sua atividade"
            {...register('description')}
          />
        </div>
      </form>
    </Container>
  )
}

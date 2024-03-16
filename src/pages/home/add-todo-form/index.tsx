import { zodResolver } from '@hookform/resolvers/zod'
import { ClipboardPenLine } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'

import { Container } from '../../../components/container'
import { type Todo } from '../../../interfaces/todo'
import { useTodos } from '../../../store'
import styles from './styles.module.scss'

const addTodoFormSchema = z.object({
  description: z.string(),
})

type AddTodoFormData = z.infer<typeof addTodoFormSchema>

export function AddTodoForm() {
  const addTodo = useTodos(state => state.addTodo)

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

    const newTodo: Todo = {
      id: uuidv4(),
      description: data.description,
      completed: false,
    }

    addTodo(newTodo)

    reset({
      description: '',
    })
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
            placeholder="Descreva sua atividade"
            {...register('description')}
          />
        </div>
      </form>
    </Container>
  )
}
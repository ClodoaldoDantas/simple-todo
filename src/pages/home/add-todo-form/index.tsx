import { z } from 'zod'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { v4 as uuidv4 } from 'uuid'
import { ClipboardPenLine } from 'lucide-react'
import { type Todo } from '../../../interfaces/todo'
import { useTodos } from '../../../store'
import { Container } from '../../../components/container'

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

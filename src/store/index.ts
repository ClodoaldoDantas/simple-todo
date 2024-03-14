import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Todo } from '../interfaces/todo'

interface TodoState {
  todos: Todo[]
  addTodo: (newTodo: Todo) => void
  removeTodo: (id: string) => void
}

export const useTodos = create<TodoState>()(
  persist(
    set => ({
      todos: [],
      addTodo: newTodo => {
        set(state => ({ todos: [...state.todos, newTodo] }))
      },
      removeTodo: id => {
        set(state => ({ todos: state.todos.filter(todo => todo.id !== id) }))
      },
    }),
    {
      name: 'todos',
    },
  ),
)

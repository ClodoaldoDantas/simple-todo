import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { type Todo } from '../interfaces/todo'

interface TodoState {
  todos: Todo[]
  addTodo: (newTodo: Todo) => void
  removeTodo: (id: string) => void
  toggleTodo: (id: string, isCompleted: boolean) => void
  updateList: (newList: Todo[]) => void
}

export const useTodos = create<TodoState>()(
  immer(
    persist(
      set => ({
        todos: [],
        addTodo: newTodo => {
          set(state => {
            state.todos.push(newTodo)
          })
        },
        removeTodo: id => {
          set(state => {
            const todoIndex = state.todos.findIndex(todo => todo.id === id)
            state.todos.splice(todoIndex, 1)
          })
        },
        toggleTodo: (id: string, isCompleted: boolean) => {
          set(state => {
            const todoIndex = state.todos.findIndex(todo => todo.id === id)
            state.todos[todoIndex].completed = isCompleted
          })
        },
        updateList: newList => {
          set({ todos: newList })
        },
      }),
      {
        name: 'todos',
      },
    ),
  ),
)

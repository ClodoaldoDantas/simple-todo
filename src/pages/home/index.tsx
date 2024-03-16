import { Banner } from '../../components/banner'
import { Logo } from '../../components/logo'
import { AddTodoForm } from './add-todo-form'
import { TodoList } from './todo-list'

export function Home() {
  return (
    <>
      <Banner />
      <Logo />
      <AddTodoForm />
      <TodoList />
    </>
  )
}

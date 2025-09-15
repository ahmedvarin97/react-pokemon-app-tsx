import { AddTodo } from './components/AddTodo'
import { ClearAllBtn } from './components/ClearAllBtn'
import { AppSection } from './components/ComponentStyle'
import { HeaderComp } from './components/HeaderComp'
import { Navber } from './components/Navber'
import { TodoList } from './components/TodoList'
import { TodoData } from './storage/Todos'

export const AppLayout = () => {
  return(
    <>
    <TodoData>
      <section className={AppSection}>
          <HeaderComp/>
          <AddTodo/>
          <Navber/>
          <TodoList/>
          <ClearAllBtn/>
      </section>
    </TodoData>
    </>
  )
}

export default AppLayout

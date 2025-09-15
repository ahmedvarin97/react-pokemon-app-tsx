import { useSearchParams } from "react-router-dom";
import { useTodos } from "../storage/Todos"
import { MessageStyle, UlStyle } from "./ComponentStyle";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useTodos();
  const [searchParams] = useSearchParams();
  const todoFilter = searchParams.get("todo")
  
  let filterData = todos;

  if(todoFilter === 'active'){
    filterData = filterData.filter((task) => !task.completed)
  }

  if(todoFilter === 'completed'){
    filterData = filterData.filter((task) => task.completed)
  }
  
  if (filterData.length === 0 && todoFilter === null) {
    return <p className={MessageStyle}>You have No Task</p>;
  }
  if (filterData.length === 0 && todoFilter === "active") {
    return <p className={MessageStyle}>You have No Active Task</p>;
  }
  if (filterData.length === 0 && todoFilter === "completed") {
    return <p className={MessageStyle}>You have No Completed Task Yet!</p>;
  }
  return (
    <>
      <ul className={UlStyle}>
        {
          filterData.map((curTodo) => {
            return <TodoItem data={curTodo} key={curTodo.id} />
          })
        }
      </ul>
    </>
  );
};
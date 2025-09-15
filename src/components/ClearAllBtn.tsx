import { useTodos } from "../storage/Todos"
import { ButtonClearAll } from "./ComponentStyle"
import { IoClose } from "react-icons/io5"

export const ClearAllBtn = () => {
    const { handleClearAllTodo } = useTodos()
    return  <button className={ButtonClearAll} onClick={handleClearAllTodo}><IoClose /> Clear All</button>
}
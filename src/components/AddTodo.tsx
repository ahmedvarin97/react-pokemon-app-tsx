import { useRef, type FormEvent } from "react"
import { useTodos } from "../storage/Todos";
import { GoPlus } from "react-icons/go";
import { AddTodoForm, TodoButton, TodoInput } from "./ComponentStyle";

export const AddTodo = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { handleAddTodo }  = useTodos();
    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRef.current && inputRef.current.value.trim() !== "") {
            handleAddTodo(inputRef.current.value); // pass value to add function
            inputRef.current.value = ""; // reset after submit
        }
    }
    return(
        <form className={AddTodoForm} onSubmit={handleFormSubmit}>
            <input  type="text"  placeholder="Search..." className={TodoInput} ref={inputRef}/>
            <button type="submit" className= {TodoButton} ><GoPlus /></button>
        </form>
    )
}
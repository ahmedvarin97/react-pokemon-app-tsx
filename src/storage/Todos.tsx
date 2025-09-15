import { createContext, useContext, useRef, useState, type ReactNode } from "react"

export type TodoType = {
    id:string;
    task:string;
    completed:boolean;
    createdAt: Date;
}

export type TodoContextType = {
    todos: TodoType[];
    handleAddTodo:(task:string) => void;
    handleTodoToggle:(task:string) => void;
    handDeleteTodo:(task:string) => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
    handleClearAllTodo: () => void
}


// eslint-disable-next-line react-refresh/only-export-components
export const TodosContext = createContext<TodoContextType | null>(null);

export const TodoData:React.FC<{ children: ReactNode }> = ({children}) => {

    const LocalStorageDir = 'todostorage';
    const inputRef = useRef<HTMLInputElement>(null);
    const [todos, setTodos] = useState<TodoType[]>(() => {
        try {
            const TodoStorage = localStorage.getItem(LocalStorageDir)
            if (!TodoStorage) return []
            return JSON.parse(TodoStorage)
        } catch (error) {
            console.log(error);
            return [];
        }
    });
    const handleAddTodo = (getTask:string) => {
        if(!getTask) return;
        const exists = todos.some(todo => todo.task === getTask);
        if(exists){
            return
        }
        const newTodo =  {
            id: Math.random().toString(),
            task: getTask,
            completed: false,
            createdAt: new Date(),
        }
        const UpdatedTodo = [...todos, newTodo];
        setTodos(UpdatedTodo)
        localStorage.setItem(LocalStorageDir, JSON.stringify(UpdatedTodo));
        if (inputRef.current && inputRef.current.value.trim() !== "") {
            inputRef.current.value = ""; 
        }
    }

    const handleTodoToggle = (id: string): void => {
        const UpdatedTodo = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo )
        setTodos(UpdatedTodo);
        localStorage.setItem(LocalStorageDir, JSON.stringify(UpdatedTodo));
         if (inputRef.current && inputRef.current.value.trim() !== "") {
            inputRef.current.value = ""; 
        }
    };

    const handDeleteTodo = (id:string): void => {
        const UpdatedTodo = todos.filter((fitlerTodo) => fitlerTodo.id !== id);
        setTodos(UpdatedTodo);
        localStorage.setItem(LocalStorageDir, JSON.stringify(UpdatedTodo));
         if (inputRef.current && inputRef.current.value.trim() !== "") {
            inputRef.current.value = ""; 
        }
    }
    const handleClearAllTodo = () => {
        setTodos([]);
    }

    return <TodosContext.Provider value={{todos, handleAddTodo, handleTodoToggle, handDeleteTodo, inputRef, handleClearAllTodo }}>
        { children }
    </TodosContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) throw new Error("useTodos must be used within TodoProvider");
  return context;   
};
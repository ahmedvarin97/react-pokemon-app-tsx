import { useTodos } from "../storage/Todos";
import { ButtonStyleCheck, ButtonStyleDelete, ButtonStyleUncheck, LiCompletedStyle, LiDefaultStyle } from "./ComponentStyle";
import { FaCheck } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import type { TodoType } from "../storage/Todos";

interface TodoItemProps {
  data: TodoType;
}

export const TodoItem: React.FC<TodoItemProps> = ({ data }) => {
  const { handleTodoToggle, handDeleteTodo } = useTodos();

  return (
    <li key={data.id} className={data.completed ? LiCompletedStyle : LiDefaultStyle}>
      <div className="w-[50%] text-left">
        <label
          htmlFor={`todo-${data.id}`}
          className={data.completed ? "line-through " : "no-underline"}
        >
          {data.task}
        </label>
      </div>
      <div className="w-[50%] text-right">
        {!data.completed && (
          <button
            type="button"
            onClick={() => handleTodoToggle(data.id)}
            className={ButtonStyleCheck}
          >
            <FaCheck />
          </button>
        )}
        {data.completed && (
          <>
            <button
              type="button"
              onClick={() => handleTodoToggle(data.id)}
              className={ButtonStyleUncheck}
            >
              <MdOutlineRadioButtonUnchecked />
            </button>
            <button
              type="button"
              onClick={() => handDeleteTodo(data.id)}
              className={ButtonStyleDelete}
            >
              <AiOutlineDelete />
            </button>
          </>
        )}
      </div>
    </li>
  );
};

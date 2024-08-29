import { Todo } from "../lib/types";
import DeleteButton from "./DeleteButton"
import useTodosContext  from "../lib/hooks";


export default function TodoList() {

  const { todos, handleToggleTodo, handleDeleteTodo } = useTodosContext();

  return (
    <>
      {!todos?.length &&
        <div className="flex items-center justify-center">
          <div>'Start by adding a todo'</div>
        </div>
      }
      <ul>
        {todos.map((todo: Todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center px-8 border-b border-black py-2 cursor-pointer`}
            onClick={() => {
              handleToggleTodo(todo.id)
            }}
          >
            <span className={`${todo.isCompleted && "line-through opacity-55"}`}>
              {todo.text}
            </span>
            <DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo} />
          </li>
        ))}
      </ul>
    </>
  );
}

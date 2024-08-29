import { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";

type TodosContextProviderProps = {
  children: React.ReactNode;
};
type TodosContextType = {
  todos: Todo[];
  numberOfTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo: (newTodoText: string) => void;
  handleDeleteTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
};

export const TodosContext = createContext<TodosContextType | null>(null);

const getInitialTodos = () => {
  const localStorageTodos = localStorage.getItem("todos")
  if (localStorageTodos) {
    return JSON.parse(localStorageTodos)
  }
  else {
    return []
  }
}
export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {

  
  
  // state
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  // derived state
  const numberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  // event handlers / actions
  const handleAddTodo = (newTodoText: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: prev[prev.length - 1] ? prev[prev.length - 1].id + 1 : 0,
        text: newTodoText,
        isCompleted: false,
      },
    ]);
  };
  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };
  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            isCompleted: !t.isCompleted,
          };
        }
        return t;
      })
    );
  };

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const response = await fetch(
  //       "https://bytegrad.com/course-assets/api/todos"
  //     );
  //     const todos = await response.json();
  //     setTodos(todos);
  //   };

  //   fetchTodos();
  // }, []);

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        numberOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

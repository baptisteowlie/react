import   useTodosContext  from "../lib/hooks";

export default function Counter() {

  const { numberOfCompletedTodos,
    numberOfTodos } = useTodosContext()

  return (
    <p>
      <b>{numberOfCompletedTodos}</b> / {numberOfTodos} todos completed
    </p>
  );
}

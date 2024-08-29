import { useState } from "react";
import Button from "./Button";
import   useTodosContext  from "../lib/hooks";

export default function AddItemForm() {
  const [newTodoText, setNewTodoText] = useState("");

  const { handleAddTodo } = useTodosContext()

  return (
    <form
      className="space-y-2"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(newTodoText);
        setNewTodoText("");
      }}
    >
      <h2 className="font-medium">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] w-full rounded-md"
        value={newTodoText}
        onChange={(e) => {
          setNewTodoText(e.target.value);
        }}
      />
      <Button
        buttonType="secondary"
      >
        Add to list
      </Button>
    </form>
  );
}

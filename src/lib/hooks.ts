import { useContext } from "react";
import  { TodosContext } from "../contexts/TodosContextProvider";

export default function useTodosContext () {
    const context = useContext(TodosContext);
    if (!context) {
      throw new Error("AddItemForm must be used within a TodosContextProvider");
    }
    return context;
}
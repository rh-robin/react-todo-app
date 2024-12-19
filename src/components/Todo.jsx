import { useState } from "react";
import styles from "./Todo.module.css";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function () {
  const [todos, setTodos] = useState([]);
  const completed = todos.filter((todo) => todo.done).length;
  const total = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      {todos.length > 0 && <TodoList todos={todos} setTodos={setTodos} />}
      <Footer completed={completed} total={total} />
    </div>
  );
}

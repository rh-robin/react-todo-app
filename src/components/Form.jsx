import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit} action="">
      <div className={styles.inputContainer}>
        <input
          className={styles.formInput}
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          placeholder="Enter Todo Item"
        />
        <button className={styles.formButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

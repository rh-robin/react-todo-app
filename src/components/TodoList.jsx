import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.listContainer}>
      <p>Clik on the text to mark as completed</p>
      {todos.map((item, index) => (
        <TodoItem
          key={item.name}
          item={item}
          isLast={index === todos.length - 1}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

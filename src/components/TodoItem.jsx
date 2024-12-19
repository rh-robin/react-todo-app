import styles from "./TodoItem.module.css";

export default function TodoItem({ item, isLast, todos, setTodos }) {
  function handleDelete(item) {
    console.log(item.name + " clicked");
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  const classDone = item.done ? styles.completed : "";

  return (
    <div className={styles.itemContainer}>
      <div className={styles.item}>
        <p className={classDone} onClick={() => handleClick(item.name)}>
          {item.name}
        </p>
        <button onClick={() => handleDelete(item)} title="Delete">
          X
        </button>
      </div>
      {!isLast && <hr />}
    </div>
  );
}

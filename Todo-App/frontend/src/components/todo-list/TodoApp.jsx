import styles from "@/styles/modules/todo_list.module.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function TodoApp() {
  return (
    <div className={styles.todo_container}>
      <h2 className={styles.page_title}>
        Todo List
      </h2>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

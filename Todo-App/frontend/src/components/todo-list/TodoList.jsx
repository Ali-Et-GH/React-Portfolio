import styles from "@/styles/modules/todo_list.module.css";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { useEffect } from "react";
import { getTodos } from "../../redux/actions/todos";

export default function TodoList() {

  const todos = useSelector(state => state.todos);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos());
  }, [user]);

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (<TodoListItem key={todo.id} todo={todo}/>))}
    </ul>
  )
}

import styles from "@/styles/modules/todo_list.module.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions/todos";

export default function TodoForm() {

  const dispatch = useDispatch();

  const [todo, setTodo] = useState({});
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.keys(todo).length === 0) return;

    dispatch(addTodo(todo));
    inputRef.current.focus();
    setTodo({});
  }

  return (
    <form onSubmit={handleSubmit} className={styles.todo_form}>
      <div className={styles.input_container}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={(e) =>
            setTodo((todo) => ({ ...todo, title: e.target.value }))
          }
          value={todo.title || ""}
          ref={inputRef}
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          onChange={(e) =>
            setTodo((todo) => ({ ...todo, description: e.target.value }))
          }
          value={todo.description || ""}
        />
      </div>
      <button type="submit">Add todo</button>
    </form>
  )
}

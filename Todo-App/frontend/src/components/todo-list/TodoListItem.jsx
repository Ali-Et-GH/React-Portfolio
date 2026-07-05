import styles from "@/styles/modules/todo_list.module.css";
import { useRef, useState } from "react";
import { FaRegEdit, FaRegCheckSquare, FaRegSquare, FaTrashAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo, toggleDone } from "../../redux/actions/todos";

export default function TodoListItem({ todo }) {
  const { id, title, description, done } = todo;

  const [newTodo, setNewTodo] = useState({});
  const [editing, setEditing] = useState(false);

  const dispatch = useDispatch();

  function toggleEditing() {
    if (editing) {
      setEditing(false);
      return;
    }
    setNewTodo({
      id,
      title,
      description,
    });
    setEditing(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (newTodo.title.trim()) dispatch(editTodo(newTodo));

    setNewTodo({});
    setEditing(false);
  }

  return (
    <li className={styles.list_item}>
      <button
        type="button"
        onClick={() => dispatch(toggleDone(id))}
        className={`${styles.icons} ${styles.check_icon} ${done ? styles.done : ""}`}
      >
        {done ? <FaRegCheckSquare /> : <FaRegSquare />}
      </button>

      {!editing ? (
        <div className={styles.todo_info}>
          <span className={`${styles.todo_title} ${done ? styles.crossed : ""}`}>
            {title}
          </span>
          <p className={`${styles.todo_description} ${done ? styles.crossed : ""}`}>
            {description}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.edit_form}>
          <input
            type="text"
            placeholder="Title"
            autoFocus
            className={`${styles.edit_input} ${styles.edit_title}`}
            value={newTodo.title}
            onChange={(e) =>
              setNewTodo((t) => ({ ...t, title: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Description"
            className={`${styles.edit_input} ${styles.edit_description}`}
            value={newTodo.description}
            onChange={(e) =>
              setNewTodo((t) => ({ ...t, description: e.target.value }))
            }
          />
          <button type="submit" hidden></button>
        </form>
      )}

      <div className={styles.rmv_edit_icns_cont}>
        <button
          type="button"
          onClick={toggleEditing}
          className={`${styles.icons} ${styles.edit_icon} ${editing ? styles.edit_enable : ""}`}
        >
          {!editing ? <FaRegEdit /> : <FaXmark />}
        </button>
        <button
          type="button"
          onClick={() => dispatch(removeTodo(id))}
          className={`${styles.icons} ${styles.remove_icon}`}
        >
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
}

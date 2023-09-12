import { useState } from "react";
import EditModal from "./EditModal";
import classes from "./TodoItem.module.css";
import { FaEdit, FaTrash, FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import DeleteModal from "./DeleteModal";

export default function TodoItem({ todo, todoSetter }) {
  const [isEditing, setIsEditing] = useState(false);
  const editHandler = () => {
    setIsEditing(true);
  };

  const [isDeleting, setIsDeleting] = useState(false);
  const deleteHandler = () => {
    setIsDeleting(true);
  };

  // const deleteHandler = () => {
  //   fetch("http://localhost:3001/todos/" + todo.id, {
  //     method: "DELETE",
  //   }).then(() => {
  //     todoSetter();
  //   });
  // };

  const completeHandler = () => {
    fetch("http://localhost:3001/todos/" + todo.id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...todo, completed: !todo.completed }),
    }).then(() => {
      todoSetter();
    });
  };

  return (
    <>
      <li
        className={`${classes.todo} ${todo.completed ? classes.completed : ""}`}
      >
        <p
          className={`${classes.body} ${
            todo.completed ? classes.completed : ""
          }`}
          onClick={completeHandler}
        >
          {todo.body}
        </p>
        <div className={classes.actions}>
          <button onClick={completeHandler}>
            {todo.completed ? <FaRegCheckCircle /> : <FaRegCircle />}
          </button>

          <button onClick={editHandler}>
            <FaEdit />
          </button>

          <button onClick={deleteHandler}>
            <FaTrash />
          </button>
        </div>
      </li>
      {isEditing && (
        <EditModal
          todoSetter={todoSetter}
          todo={todo}
          setIsEditing={setIsEditing}
        />
      )}
      {isDeleting && (
        <DeleteModal
          todoSetter={todoSetter}
          todo={todo}
          setIsDeleting={setIsDeleting}
        />
      )}
    </>
  );
}

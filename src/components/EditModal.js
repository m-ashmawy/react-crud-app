import { useState } from "react";
import classes from "./Modal.module.css";

export default function EditModal(props) {
  const [newText, setNewText] = useState(props.todo.body);
  const changeHandler = (event) => {
    setNewText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/todos/" + props.todo.id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...props.todo, body: newText }),
    }).then(() => {
      props.todoSetter();
      props.setIsEditing(false);
    });
  };
  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => {
          props.setIsEditing(false);
        }}
      ></div>
      <div className={classes.modal}>
        <h2>Editing a Task</h2>
        <form onSubmit={submitHandler}>
          <input value={newText} onChange={changeHandler} required />
          <button type="submit">Edit</button>
        </form>
      </div>
    </>
  );
}

import { useState } from "react";
import classes from "./AddTodo.module.css";

export default function AddTodo(props) {
  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      body: input,
      id: Date.now().toString(),
      completed: false,
    };
    if (input.trim().length) {
      fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newTodo),
      }).then(() => {
        props.todoSetter();
      });
      setInput("");
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input
        className={classes.input}
        value={input}
        onChange={inputChangeHandler}
        type="text"
        placeholder="Enter a todo"
        required
      />
      <button className={classes.button} type="submit">
        Add
      </button>
    </form>
  );
}

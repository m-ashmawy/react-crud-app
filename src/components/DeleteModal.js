import classes from "./Modal.module.css";

export default function DeleteModal(props) {
  const submitHandler = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/todos/" + props.todo.id, {
      method: "DELETE",
    }).then(() => {
      props.todoSetter();
      props.setIsDeleting(false);
    });
  };

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => {
          props.setIsDeleting(false);
        }}
      ></div>
      <div className={classes.modal}>
        <h2>Are you sure to delete?</h2>
        <form onSubmit={submitHandler}>
          <button type="submit">Delete</button>
        </form>
      </div>
    </>
  );
}

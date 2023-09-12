import TodoItem from "./TodoItem";
import classes from "./TodosList.module.css";

export default function TodosList(props) {
  return (
    <ul className={classes.list}>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todoSetter={props.todoSetter} />
      ))}
    </ul>
  );
}

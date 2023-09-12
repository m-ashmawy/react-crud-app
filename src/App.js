import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";

function App() {
  const [todos, setTodos] = useState([]);

  const todoSetter = () => {
    fetch("http://localhost:3001/todos")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setTodos(response);
      })
      .catch((error) => {
        // error logic will be here;
      });
  };

  useEffect(() => {
    todoSetter();
  }, []);

  return (
    <div className="App">
      <Header />
      <AddTodo todoSetter={todoSetter} />
      <TodosList todos={todos} todoSetter={todoSetter} />
    </div>
  );
}

export default App;

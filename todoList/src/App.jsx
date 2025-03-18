import "./App.css";
import TaskList from "./Components/TaskList/TaskList";
import Form from "./Components/Form/Form";
import { useState } from "react";
import TodoHeader from "./Components/TodoHeader";

const App = () => {
  const [userInput, setUserInput] = useState("");

  const [todos, setTodos] = useState([]);

  const addItem = () => {
    if (userInput.trim() !== "") {
      const newTodo = {
        id: crypto.randomUUID(),
        content: userInput,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setUserInput("");
    }
  };

  return (
    <div className="App">
      <TodoHeader />
      <Form
        userInput={userInput}
        inputChange={(e) => setUserInput(e.target.value)}
        addItem={addItem}
      />
      {todos.length > 0 && (
        <div className="list">
          <TaskList todos={todos} setTodos={setTodos} />
        </div>
      )}
    </div>
  );
};

export default App;

import React from "react";
import TaskListItem from "../TaskListItem/TaskListItem";
import Checkbox from "@mui/material/Checkbox";
import "./TaskList.css";
import { useState } from "react";

const TaskList = ({ todos, setTodos }) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (id) => {
    setChecked((prevChevked) =>
      prevChevked.includes(id)
        ? prevChevked.filter((item) => item !== id)
        : [...prevChevked, id]
    );
    setChecked;
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <Checkbox
              checked={checked.includes(todo.id)}
              onChange={() => handleToggle(todo.id)}
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
            />
            <TaskListItem
              id={todo.id}
              content={todo.content}
              handleDelete={handleDelete}
              isChecked={checked.includes(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

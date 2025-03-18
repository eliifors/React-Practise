import React from "react";
import TaskListItem from "../TaskListItem/TaskListItem";

const TaskList = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <TaskListItem
              id={todo.id}
              content={todo.content}
              handleDelete={handleDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

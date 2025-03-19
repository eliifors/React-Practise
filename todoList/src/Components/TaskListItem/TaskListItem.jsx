import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TaskListItem.css";

function TaskListItem({ content, id, handleDelete, isChecked }) {
  return (
    <div className={`item ${isChecked ? "highlight" : ""}`}>
      <span className="content-text">
        {typeof content === "string" ? content : "Hatalı içerik!"}
      </span>

      <IconButton
        color="white"
        aria-label="delete"
        size="large"
        sx={{ color: "white" }}
        onClick={() => handleDelete(id)}
        className="deleteButton"
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default TaskListItem;

import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TaskListItem.css";

function TaskListItem({ content, id, handleDelete }) {
  return (
    <div className="item">
      {typeof content === "string" ? content : "Hatalı içerik!"}
      <Button
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => handleDelete(id)}
        className="deleteButton"
      >
        Sil
      </Button>
    </div>
  );
}

export default TaskListItem;

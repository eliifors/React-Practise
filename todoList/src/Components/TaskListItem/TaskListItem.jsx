import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskListItem({ content, id, handleDelete }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginTop: "20px",
        marginLeft: "10px",
      }}
    >
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

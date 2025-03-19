import React from "react";
import "./Form.css";
import Button from "@mui/material/Button";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { IconButton } from "@mui/material";

const Form = ({ userInput, inputChange, addItem }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        placeholder="Task"
        type="text"
        value={userInput}
        onChange={inputChange}
        className="form-control"
      />

      <IconButton
        aria-label="AddBoxRounded"
        color="success"
        onClick={addItem}
        className="icon-button"
        size="large"
      >
        <AddBoxRoundedIcon fontSize="inherit" />
      </IconButton>
    </form>
  );
};

export default Form;

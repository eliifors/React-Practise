import React from "react";
import "./Form.css";
import Button from "@mui/material/Button";

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
      <Button variant="contained" color="error" onClick={addItem}>
        Ekle
      </Button>
    </form>
  );
};

export default Form;

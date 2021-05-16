import React from "react";
import "./InpBox.css";
const InpBox = ({ addTodo }) => {
  return (
    <div className="inp-box-container">
      <input type="text" className="inp-box" placeholder="What's your plan?" />
      <button
        className="add-btn"
        onClick={() => {
          let todo = document.querySelector(".inp-box");
          if (todo.value) {
            addTodo(todo.value, "2021-05-13");
            todo.value = "";
          }
        }}
      >
        Add
      </button>
    </div>
  );
};
export default InpBox;

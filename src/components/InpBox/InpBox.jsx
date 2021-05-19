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
            let d = new Date();
            addTodo(
              todo.value,
              `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
            );
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

import React from "react";
import "./TodoItem.css";
import { ReactComponent as DeleteLogo } from "./icons/x-square.svg";
import { ReactComponent as EditLogo } from "./icons/edit.svg";
import EditModal from "../EditModal/EditModal";

const TodoItem = ({ todo, deleteTodo, index, editTodo }) => {
  const editMode = () => {
    console.log(todo, index);
  };
  return (
    <div className="todo-item-container">
      <div className="todo-item-wrapper">
        <div className="title-and-added-wrapper">
          <h1 className="todo-title">{todo.title}</h1>
          <span className="added">Added: {todo.added}</span>
        </div>
        <div className="button-wrapper">
          <EditLogo
            color="#ffffff"
            size={18}
            className="edit-btn"
            onClick={() => {
              editMode(todo, index);
              // editTodo(1, "Learn React.js");
            }}
          />
          <DeleteLogo
            color="#D64D4D"
            className="delete-btn"
            onClick={() => {
              deleteTodo(index);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default TodoItem;

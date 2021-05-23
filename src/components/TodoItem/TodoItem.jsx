import React from "react";
import "./TodoItem.css";
import { ReactComponent as DeleteLogo } from "./icons/x-square.svg";
import { ReactComponent as EditLogo } from "./icons/edit.svg";

const TodoItem = ({ todo, deleteTodo, index, setEditMode, checked }) => {
  return (
    <div className="todo-item-container">
      <div className="todo-item-wrapper">
        <div className="todo-item-input-wrapper">
          <input
            type="checkbox"
            name="done"
            className="done-check-box"
            onChange={(e) => checked(index, e.target.checked)}
            checked={todo.checked}
          />
          <div className="title-and-added-wrapper">
            <h1 className="todo-title">
              {todo.checked ? <strike>{todo.title}</strike> : todo.title}
            </h1>
            <span className="added">Added: {todo.added}</span>
          </div>
        </div>
        <div className="button-wrapper">
          <EditLogo
            color="#ffffff"
            size={18}
            className="edit-btn"
            onClick={() => {
              setEditMode({
                title: todo.title,
                idx: index,
              });
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

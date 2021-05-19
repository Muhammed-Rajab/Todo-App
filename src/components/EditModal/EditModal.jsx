import React from "react";
import "./EditModal.css";

const EditModal = ({ editTodo, title, idx, setEditMode }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h1 className="edit-heading">Edit To-Do</h1>
        <hr />
        <textarea
          type="text"
          className="editInput"
          defaultValue={title}
          onChange={(e) => {
            setEditMode({
              title: e.target.value,
              idx,
            });
          }}
        />
        <button
          className="saveChanges"
          onClick={() => {
            title && editTodo(idx, title);
          }}
        >
          Save changes
        </button>
      </div>
    </div>
  );
};
export default EditModal;

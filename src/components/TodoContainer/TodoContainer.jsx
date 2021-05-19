import React from "react";
import "./TodoContainer.css";
import TodoItem from "../TodoItem/TodoItem";
import NoItem from "../NoItem/NoItem";

const TodoContainer = ({ todoList, deleteTodo, editTodo, setEditMode }) => {
  return (
    <div className="todo-container">
      {todoList.length > 0 ? (
        todoList.map((e, idx) => {
          return (
            <TodoItem
              todo={e}
              key={idx}
              index={idx}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              setEditMode={setEditMode}
            />
          );
        })
      ) : (
        <NoItem />
      )}
    </div>
  );
};
export default TodoContainer;

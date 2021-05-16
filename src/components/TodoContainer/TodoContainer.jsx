import React from "react";
import "./TodoContainer.css";
import TodoItem from "../TodoItem/TodoItem";
import NoItem from "../NoItem/NoItem";

const TodoContainer = ({ todoList, deleteTodo, editTodo }) => {
  return (
    <div className="todo-container">
      {todoList.length > 0 ? (
        todoList.map((e, idx) => {
          console.log(idx);
          return (
            <TodoItem
              todo={e}
              key={idx}
              index={idx}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
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

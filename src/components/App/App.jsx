import "./App.css";
import InpBox from "../InpBox/InpBox";
import TodoContainer from "../TodoContainer/TodoContainer";
import { useState } from "react";

function App() {
  const [todoList, updateTodo] = useState([
    {
      title: "Learn React.js",
      added: "2021-05-15",
    },
    {
      title: "Learn Django",
      added: "2021-05-15",
    },
    {
      title: "Do workout",
      added: "2021-05-15",
    },
  ]);
  const addTodo = (title, added) => {
    updateTodo([{ title, added }, ...todoList]);
  };

  const deleteTodo = (idx) => {
    console.log("Deleting", idx, "th Todo");
    updateTodo(
      todoList.filter((_, i) => {
        if (i !== idx) return todoList[i];
      })
    );
  };

  const editTodo = (idx, title, date) => {
    console.log(`Editing ${idx} todo to ${title}`);
  };
  return (
    <div className="">
      <InpBox addTodo={addTodo} />
      <TodoContainer
        todoList={todoList}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;

import "./App.css";
import InpBox from "../InpBox/InpBox";
import TodoContainer from "../TodoContainer/TodoContainer";
import { useState, useEffect } from "react";
import EditModal from "../EditModal/EditModal";

function App() {
  const handleLocalStorage = () => {
    if (localStorage.getItem("todoList")) {
    } else localStorage.setItem("todoList", "[]");
    return localStorage.getItem("todoList");
  };

  const [todoList, updateTodo] = useState(JSON.parse(handleLocalStorage()));

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  const addTodo = (title, added, checked = false) => {
    updateTodo([{ title, added, checked }, ...todoList]);
  };

  const deleteTodo = (idx) => {
    updateTodo(
      todoList.filter((_, i) => {
        if (i !== idx) return todoList[i];
        return null;
      })
    );
  };

  const editTodo = (index, newTitle) => {
    updateTodo(
      todoList.filter((e, idx) => {
        if (idx === index) {
          e.title = newTitle;
        }
        return e;
      })
    );
    setEditMode();
  };

  const checked = (index, checked) => {
    updateTodo(
      todoList.filter((e, idx) => {
        if (idx === index) e.checked = checked;
        return e;
      })
    );
  };
  const [editMode, setEditMode] = useState();

  return (
    <div className="">
      <InpBox addTodo={addTodo} />
      <TodoContainer
        todoList={todoList}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        setEditMode={setEditMode}
        checked={checked}
      />
      {editMode ? (
        <EditModal
          idx={editMode.idx}
          title={editMode.title}
          editTodo={editTodo}
          setEditMode={setEditMode}
        />
      ) : null}
    </div>
  );
}

export default App;

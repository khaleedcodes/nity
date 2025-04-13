import ToDoList from "./ToDoList"; // Import the ToDoList component
import TodoForm from "./ToDoForm"; // Import the TodoForm component
import CurrentDate from "./Date";
import { useEffect, useState } from "react";
import type { ToDo } from "../types/types";

function ToDoWrapper() {
  // State to manage the list of to-do items
  const [toDoList, setToDoList] = useState<ToDo[]>(
    JSON.parse(localStorage.getItem("toDoList") || "[]") || []
  );

  // Function to update the to-do list with a new item
  function addToDo(newToDo: ToDo) {
    // Use the setToDoList function to update the state
    setToDoList((prevToDoList: ToDo[]) => [...prevToDoList, newToDo]);
  }

  function deleteToDo(toDoID: string) {
    setToDoList((prevToDoList: ToDo[]) =>
      prevToDoList.filter((toDoItem) => toDoItem.toDoID !== toDoID)
    );
  }

  function markCompleted(toDoID: string) {
    const newList = toDoList.map((toDoItem: ToDo) => {
      if (toDoItem.toDoID === toDoID) {
        return { ...toDoItem, isToDoCompleted: !toDoItem.isToDoCompleted };
      }
      return toDoItem;
    });
    setToDoList(newList);
  }

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  // Component rendering
  return (
    <div className="gap-6 h-full p-8 max-sm:p-2 min-h-[80vh]">
      <CurrentDate />
      {/* Render the TodoForm component and pass the 'updateToDo' function */}
      <TodoForm addToDo={addToDo} />

      {/* Render the ToDoList component */}
      {toDoList.length > 0 && (
        <ToDoList
          toDoList={toDoList}
          deleteToDo={deleteToDo}
          markCompleted={markCompleted}
        />
      )}
    </div>
  );
}

export default ToDoWrapper;

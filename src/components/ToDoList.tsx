import ToDoItem from "./ToDoItem";
import type { ToDoListProps } from "../types/types";

function ToDoList({ toDoList, deleteToDo, markCompleted }: ToDoListProps) {
  console.log(toDoList);
  // Map over the to-do list and render ToDoItem components
  return (
    <div className=" flex flex-col gap-2">
      {toDoList.map(({ toDoTitle, toDoID, isToDoCompleted }) => {
        return (
          <ToDoItem
            key={toDoID}
            toDoID={toDoID}
            toDoTitle={toDoTitle}
            deleteToDo={deleteToDo}
            isToDoCompleted={isToDoCompleted}
            markCompleted={markCompleted}
          />
        );
      })}
    </div>
  );
}

export default ToDoList;

import Uncompleted from "../assets/icons/Uncompleted";
import Completed from "../assets/icons/Completed";
import Favorite from "../assets/icons/Favorite";
import Delete from "../assets/icons/Delete";
import type { ToDoItemProps } from "../types/types";

function ToDoItem({
  toDoID,
  toDoTitle,
  deleteToDo,
  isToDoCompleted,
  markCompleted,
}: ToDoItemProps) {
  return (
    <div className=" flex gap-4 h-12 bg-dark-secondary-bg items-center pr-4 pl-4 cursor-pointer hover:bg-dark-todo-hover">
      <button
        className="h-full"
        onClick={() => {
          markCompleted(toDoID);
        }}
      >
        {isToDoCompleted ? <Completed /> : <Uncompleted />}
      </button>
      <h4 className="h-full flex items-center flex-grow">{toDoTitle}</h4>
      <button>
        <Favorite />
      </button>
      <button
        className="h-full"
        onClick={() => {
          deleteToDo(toDoID);
        }}
      >
        <Delete />
      </button>
    </div>
  );
}

export default ToDoItem;

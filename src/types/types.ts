type ToDo = {
  toDoTitle: string;
  toDoID: string;
  isToDoCompleted: boolean;
};
type ToDoListProps = {
  toDoList: ToDo[];
  deleteToDo: (toDoID: string) => void;
  markCompleted: (toDoId: string) => void;
};
type ToDoItemProps = {
  toDoID: string;
  toDoTitle: string;
  deleteToDo: (toDoID: string) => void;
  isToDoCompleted: boolean;
  markCompleted: (toDoID: string) => void;
};
type ToDoFormProps = {
  addToDo: (newToDo: ToDo) => void;
};
export type { ToDo, ToDoListProps, ToDoItemProps, ToDoFormProps };

type ToDo = {
  toDoTitle: string;
  toDoID: string;
};
type ToDoListProps = {
  toDoList: ToDo[];
  deleteToDo: (toDoID: string) => void;
};
type ToDoItemProps = {
  toDoID: string;
  toDoTitle: string;
  deleteToDo: (toDoID: string) => void;
};
type ToDoFormProps = {
  addToDo: (newToDo: ToDo) => void;
};
export type { ToDo, ToDoListProps, ToDoItemProps, ToDoFormProps };

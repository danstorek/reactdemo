export type TodoItem = {
  id: number;
  title: string;
  description?: string;
};
export type TodoListProps = {
  items: TodoItem[];
};

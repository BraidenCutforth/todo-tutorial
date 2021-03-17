export interface Todo {
  title: string;
  completed: boolean;
}

export const defaultTodos: Todo[] = [
  {
    title: "Clean room",
    completed: false,
  },
  {
    title: "Grocery Shopping",
    completed: true,
  },
  {
    title: "Buy masks",
    completed: true,
  },
];

export async function getTodos() {
  return Promise.resolve(defaultTodos);
}

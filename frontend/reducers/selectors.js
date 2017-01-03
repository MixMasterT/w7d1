export const allTodos = ({todos}) => {
  return Object.keys(todos).map(idx => {
    return todos[idx];
  });
};

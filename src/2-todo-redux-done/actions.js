export const addTodoAction = (todo) => ({
  type: 'ADD_TODO',
  todo,
});
export const removeTodoAction = (index) => ({
  type: 'REMOVE_TODO',
  index,
});
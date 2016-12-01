export const AddTodoAction = (title) => ({
  type: 'ADD_TO_ACTION',
  title,
});

export const removeToDoAction = (id) => ({
  type: 'REMOVE_TO_ACTION',
  id,
});

export const markToDoAsDone = (id) => ({
  type: 'MARK_TO_AS_DONE',
  id,
});
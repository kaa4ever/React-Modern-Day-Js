export default (state = {}, action) => {
  const todos = state.todos ? state.todos.slice() : [];
  switch (action.type) {
    case 'ADD_TO_ACTION':
      todos.push({
        id: todos.length,
        title: action.title,
        isDone: false,
      });
      return {
        ...state,
        todos,
      };
    case 'REMOVE_TO_ACTION':
      let found = false;
      todos.forEach((todo, index) => {
        if (todo.id === action.id) {
          found = index;
        }
      });

      if (found !== false) {
        todos.splice(found, 1);
      }
      return {
        ...state,
        todos,
      };
    case 'MARK_TO_AS_DONE':
      todos.forEach((todo, index) => {
        if (todo.id === action.id) {
          todos[index] = {
            ...todo,
            isDone: true,
          };
        }
      });

      return {
        ...state,
        todos,
      };
  }
  return state;
}
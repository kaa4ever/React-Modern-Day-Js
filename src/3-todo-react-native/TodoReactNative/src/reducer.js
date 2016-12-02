export default (state = { todos: [] }, action) => {
  const todos = state.todos.slice();
  switch (action.type) {
    case 'ADD_TODO': {
      todos.push(action.todo);
      return {
        ...state,
        todos,
      };
    }
    case 'REMOVE_TODO': {
      todos.splice(action.index, 1);
      return {
        ...state,
        todos,
      };
    }
    default: {
      return state;
    }
  }
}
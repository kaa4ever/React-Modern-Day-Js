import React from 'react';

import TodoComponent from './TodoComponent';

const TodoListComponent = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoComponent todo={todo} index={index} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoListComponent;
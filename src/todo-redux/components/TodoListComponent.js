import React from 'react';

import Todo from './TodoComponent';

const TodoList = ({ todos, removeTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} index={index} headline={todo} removeTodo={removeTodo} />
    ))}
  </ul>
);

export default TodoList;

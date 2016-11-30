import React from 'react';

import Todo from './TodoComponent';

const TodoList = ({ todos, removeTodo, markTodoAsDone }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} removeTodo={removeTodo} markTodoAsDone={markTodoAsDone} />
    ))}
  </ul>
);

export default TodoList;
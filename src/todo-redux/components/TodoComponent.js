import React, { Component } from 'react';

const Todo = ({ todo, removeTodo, markTodoAsDone }) => {
  const style = { textDecoration: todo.isDone ? 'line-through' : 'inherit' };
  return (
    <li>
      <span style={style}>{todo.title}</span>
      <a onClick={(e) => {
        e.preventDefault();
        markTodoAsDone(todo.id);
      }}>[done]</a>
      <a onClick={(e) => {
        e.preventDefault();
        removeTodo(todo.id);
      }}>[remove]</a>
    </li>
  );
};

export default Todo;

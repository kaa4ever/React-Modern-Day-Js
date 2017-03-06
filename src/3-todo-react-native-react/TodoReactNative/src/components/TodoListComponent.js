import React from 'react';
import { ScrollView } from 'react-native';
import TodoComponent from './TodoComponent';


const TodoListComponent = ({ todos, removeTodo }) => (
  <ScrollView>
    {todos.map((todo, index) => (
      <TodoComponent key={index} todo={todo} index={index} removeTodo={removeTodo} />
    ))}
  </ScrollView>
);

export default TodoListComponent;

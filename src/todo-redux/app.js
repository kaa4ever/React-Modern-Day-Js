import React, { Component } from 'react';
import { render } from 'react-dom';

import HeadlineComponent from './components/HeadlineComponent';
import FormComponent from './components/FormComponent';
import TodoListComponent from './components/TodoListComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [] };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.markTodoAsDone = this.markTodoAsDone.bind(this);
  }

  addTodo(todo) {
    const todos = this.state.todos;
    todos.push({
      id: todos.length,
      title: todo,
      isDone: false,
    });
    this.setState({ todos });
  }

  removeTodo(id) {
    const todos = this.state.todos;

    let found = false;
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        found = index;
      }
    });

    if (found !== false) {
      todos.splice(found, 1);
      this.setState({ todos });
    }
  }

  markTodoAsDone(id) {
    const todos = this.state.todos;

    todos.forEach(todo => {
      if (todo.id === id) {
        todo.isDone = true;
      }
    });

    this.setState({ todos });
  }

  render() {
    return (
      <div className="row">
        <div className="small-6 columns">
          <HeadlineComponent headline="Create" />
          <FormComponent addTodo={this.addTodo} />
          <HeadlineComponent headline="TODOS" />
          <TodoListComponent todos={this.state.todos} markTodoAsDone={this.markTodoAsDone} removeTodo={this.removeTodo} />
        </div>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);

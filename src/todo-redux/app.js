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
  }

  addTodo(todo) {
    const todos = this.state.todos;
    todos.push(todo);
    this.setState({ todos });
  }

  removeTodo(index) {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="row">
        <div className="small-6 columns">
          <HeadlineComponent headline="Create" />
          <FormComponent addTodo={this.addTodo} />
          <HeadlineComponent headline="TODOS" />
          <TodoListComponent todos={this.state.todos} removeTodo={this.removeTodo} />
        </div>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);

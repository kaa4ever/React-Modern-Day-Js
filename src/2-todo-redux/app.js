import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import HeadlineComponent from './components/HeadlineComponent';
import FormComponent from './components/FormComponent';
import TodoListComponent from './components/TodoListComponent';

const store = createStore(
  Reducer,
  applyMiddleware(createLogger())
);

class AppComponent extends Component {

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
          <HeadlineComponent headline="CREATE" />
          <FormComponent addTodo={this.addTodo} />
          <HeadlineComponent headline="TODOS"/>
          <TodoListComponent todos={this.state.todos} removeTodo={this.removeTodo} />
        </div>
      </div>
    );
  }
}

render(
  <AppComponent />,
  document.getElementById('app')
);
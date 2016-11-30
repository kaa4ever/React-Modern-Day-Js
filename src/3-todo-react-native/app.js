import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import Reducer from './reducer';
import HeadlineComponent from './components/HeadlineComponent';
import FormComponent from './components/FormComponent';
import TodoListComponent from './components/TodoListComponent';

const store = createStore(
  Reducer,
  applyMiddleware(createLogger())
);

const App = () => (
  <Provider store={store}>
    <div className="row">
      <div className="small-6 columns">
        <HeadlineComponent headline="Create" />
        <FormComponent />
        <HeadlineComponent headline="TODOS" />
        <TodoListComponent />
      </div>
    </div>
  </Provider>
);

render(
  <App />,
  document.getElementById('app')
);

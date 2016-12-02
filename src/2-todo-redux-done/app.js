import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import HeadlineComponent from './components/HeadlineComponent';
import FormComponent from './components/FormComponent';
import TodoListComponent from './components/TodoListComponent';
import Reducer from './reducer';

const store = createStore(
  Reducer,
  applyMiddleware(createLogger())
);

const AppComponent = () => (
  <Provider store={store}>
    <div className="row">
      <div className="small-6 columns">
        <HeadlineComponent headline="CREATE" />
        <FormComponent />
        <HeadlineComponent headline="TODOS"/>
        <TodoListComponent />
      </div>
    </div>
  </Provider>
);

render(
  <AppComponent />,
  document.getElementById('app')
);
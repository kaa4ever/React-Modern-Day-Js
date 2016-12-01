/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './src/reducer';
import HeadlineComponent from './src/components/HeadlineComponent';
import FormComponent from './src/components/FormComponent';
import TodoListComponent from './src/components/TodoListComponent';

const store = createStore(Reducer);

export default class TodoReactNative extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container} className="small-6 columns">
          <HeadlineComponent headline="Create" />
          <FormComponent />
          <HeadlineComponent headline="TODOS" />
          <TodoListComponent />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('TodoReactNative', () => TodoReactNative);

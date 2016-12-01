import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddTodoAction } from '../actions';

class Form extends Component {

  constructor(props) {
    super(props);

    this.input = null;

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.dispatch(AddTodoAction(this.input.value));
    this.input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Thing to do:
          <input ref={node => { this.input = node; }} type="text" required />
        </label>
        <button type="submit" className="button">Add</button>
      </form>
    );
  }
}

export default connect()(Form);

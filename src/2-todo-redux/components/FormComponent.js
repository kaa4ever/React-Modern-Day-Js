import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);

    this.input = null;

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.input.value);
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

export default Form;
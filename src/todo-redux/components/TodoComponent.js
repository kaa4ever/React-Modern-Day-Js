import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = { isDone: false };
  }

  render() {
    const style = { textDecoration: this.state.isDone ? 'line-through' : 'inherit' };
    return (
      <li>
        <span style={style}>{this.props.headline}</span>
        <a onClick={(e) => {
          e.preventDefault();
          this.setState({ isDone: true });
        }}>[done]</a>
        <a onClick={(e) => {
          e.preventDefault();
          this.props.removeTodo(this.props.index);
        }}>[remove]</a></li>
    );
  }
}

export default Todo;

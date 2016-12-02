import React, { Component } from 'react';

class FormComponent extends Component {

  constructor(props) {
    super(props);

    this.state = { input: '' };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Thing to do:
          <input type="text" value={this.state.input} onChange={e => {
            this.setState({ input: e.target.value });
          }} />
        </label>
        <button type="submit" className="button">Add</button>
      </form>
    );
  }
}

export default FormComponent;
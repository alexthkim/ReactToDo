import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: this.props.done
    }
    this.checkHandler = this.checkHandler.bind(this);
  }

  checkHandler() {
    this.setState({done: !this.state.done})
  }

  render() {
    return(
      //(this.state.done === true) ?
        <tr>
          <td>
            <div className="checkbox">
              <label style={this.state.done ? {"textDecoration": "line-through"}:{}}><input type="checkbox"  onChange={() => this.checkHandler()} checked={this.state.done} value=""/>{this.props.task}</label>
            </div>
          </td>
        </tr>
    )
  }
}

export default Todo;

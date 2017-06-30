import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = [{ taskText: "Do the dishes", completed: true },
{ taskText: "Read a book", completed: false },
{ taskText: "Eat pasta", completed: false }];



class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({todos:dummyData});
  }

  render() {
    return(
      <div className= "col-xs-offset-3 col-xs-6 full-container">
        <InputLine/>
        <table className="table">
          <TodoList todos={this.state.todos}/>
        </table>
      </div>
    )
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="row input-container">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="To Do Item"></input>
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="button">Submit</button>
          </span>
        </div>
      </div>
    )
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <tbody>
        {this.props.todos.map((item) => <Todo task={item.taskText} done={item.completed}/>)}
      </tbody>
    )
  }
}

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

ReactDOM.render(<TodoApp />, document.getElementById('root'));

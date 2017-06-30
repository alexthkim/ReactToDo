import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ["Do the dishes", "Read a book", "Eat pasta"];


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <InputLine/>
        <TodoList/>
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
      <div>
        <input type="text" placeholder="To Do Item"></input>
        <input type="submit" value="Submit"></input>
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
      <ul>
        {dummyData.map((item) => <Todo task={item}/>)}
      </ul>
    )
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li>
        {this.props.task}
        <button>X</button>
      </li>

    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));

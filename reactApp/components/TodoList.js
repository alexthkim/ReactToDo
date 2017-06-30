import React from 'react';
import Todo from './Todo';

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

export default TodoList;

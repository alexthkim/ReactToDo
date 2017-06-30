import React from 'react';
import InputLine from './InputLine'
import TodoList from './TodoList'
import axios form 'axios';

var dummyData = [{ taskText: "Do the dishes", completed: true },
{ taskText: "Read a book", completed: false },
{ taskText: "Eat pasta", completed: false }];

const dbUrl = "http://localhost:3000/db";

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

  addTodo(task) {
    axios.post(/*URL_HERE*/, /*POST_BODY_HERE*/)
      .then(function (response) {
        // Do whatever you want with the request's response in here
      })
      .catch(function (error) {
        // Do whatever you want in the event of an error in here
      });
    dummyData.push({taskText: task, completed: false});
    this.setState({todos: dummyData});
  }

  render() {
    return(
      <div className= "col-xs-offset-3 col-xs-6 full-container">
        <InputLine submit={(task) => this.addTodo(task)}/>
        <table className="table">
          <TodoList todos={this.state.todos}/>
        </table>
      </div>
    )
  }
}

export default TodoApp;

import React from 'react';
import InputLine from './InputLine'
import TodoList from './TodoList'

import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../actions/index';

let id = 0;

let TodoApp =({todos=[], addTodoClick, toggleTodoClick, removeTodoClick}) => {
    console.log(addTodoClick);
    return (
        <div className= "col-xs-offset-4 col-xs-4 full-container">
          {/* leave this alone for now */}
          <InputLine
              addTodo={(text) => addTodoClick(id++, text)}
          />
          <table className="table">
            <TodoList
              todos={todos}
              handleToggleTodo={(id) => toggleTodoClick(id)}
              handleRemoveTodo={(id) => removeTodoClick(id)}
            />
          </table>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoClick: (id,task) => dispatch(addTodo(id, task)),
    toggleTodoClick: (id) => dispatch(toggleTodo(id)),
    removeTodoClick: (id) => dispatch(removeTodo(id))
  };
}

const mapStateToProps = (state) => {
  return {
    todos: state
  };
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoApp;

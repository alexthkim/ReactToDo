import React from 'react';
import Todo from './Todo';

const TodoList =({ todos, handleToggleTodo, handleRemoveTodo }) => {
  return(
    <tbody>
      {todos.map((item) =>
        <Todo
          key={item.id}
          task={item.task}
          completed={item.completed}
          handleOnClick={() => handleToggleTodo(item.id)}
          handleRemove={() => handleRemoveTodo(item.id)}
        />)}
    </tbody>
  )
}

export default TodoList;

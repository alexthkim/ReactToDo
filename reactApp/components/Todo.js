import React from 'react';

const Todo = ({task, completed, handleOnClick}) => {
  return(
    <tr>
      <td>
        <div className="checkbox">
          <label style={completed ? {"textDecoration": "line-through"}:{}}><input type="checkbox"  onChange={handleOnClick} checked={completed} value=""/>{task}</label>
        </div>
      </td>
    </tr>
  );
}

export default Todo;

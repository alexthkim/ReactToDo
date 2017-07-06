import React from 'react';

const Todo = ({task, completed, handleOnClick, handleRemove}) => {
  return(
    <tr>
      <td>
        <div className="checkbox">
          <label style={completed ? {"textDecoration": "line-through"}:{}}><input type="checkbox"  onChange={handleOnClick} checked={completed} value=""/>{task}</label>
          <button type="button" className="close" aria-label="Close" onClick={handleRemove}>
            <span aria-hidden="false">&times;</span>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Todo;

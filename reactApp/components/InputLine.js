import React from 'react';

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

export default InputLine;

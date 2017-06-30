import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typedText: ""
    }
  }

  handleTyping(event) {
    this.setState({typedText: event.target.value});
  }

  handleSubmit() {
    if (this.state.typedText.trim().length !== 0) {
      this.props.submit(this.state.typedText);
      this.setState({typedText: ""});
    }
  }

  render() {
    return(
      <div className="row input-container">
        <div className="input-group">
          <input type="text" value={this.state.typedText} onChange={(event) => this.handleTyping(event)}className="form-control" placeholder="To Do Item"></input>
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="button" onClick={() => this.handleSubmit()}>Add</button>
          </span>
        </div>
      </div>
    )
  }
}

export default InputLine;

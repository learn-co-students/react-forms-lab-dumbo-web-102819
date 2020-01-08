import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.props.maxChars - this.state.value.length}</h3>
        <strong>Your message:</strong>
        <input
          onChange={this.handleChange} 
          type="text" 
          name="message" 
          id="message"
          value={this.state.value} />
      </div>
    );
  }
}

export default TwitterMessage;

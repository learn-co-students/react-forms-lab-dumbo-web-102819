import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: this.props.maxChars,
      message: ""
    };
  }

  

  handleChange = (event) => {

    this.setState({
      counter: this.props.maxChars - event.target.value.length ,
      message:event.target.value
    }) 
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message} />
        <h4>{this.state.counter}</h4>
      </div>
    );
  }
}

export default TwitterMessage;

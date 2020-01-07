import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      lengthLeft: props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
    let newLength = event.target.value.length
    let newLengthLeft = this.props.maxChars - newLength
    this.setState({
      lengthLeft: newLengthLeft
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>{this.state.lengthLeft}</p>
        <input value={this.state.message} type="text" name="message" id="message" onChange={event => this.handleChange(event)} />
      </div>
    );
  }
}

export default TwitterMessage;

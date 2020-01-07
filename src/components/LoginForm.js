import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.handleLogin(this.state)
    } else {
      return 
    }
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input value={this.state.username} id="username" name="username" type="text" onChange={event => this.handleChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} id="password" name="password" type="password" onChange={event => this.handleChange(event)} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

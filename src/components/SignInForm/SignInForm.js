import React from "react";
import "./style.css";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  changeEmailHandler() {}

  submitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };
  render() {
    return (
      <>
        <h1>Sign In Form</h1>
        <form className="form-wrapper" onSubmit={this.submitHandler}>
          <label>
            Type your email
            <input type="email" name="email" onChange={this.changeEmailHandler} value={this.state.email} />
          </label>
          <label>
            Type your password
            <input type="password" />
          </label>
          <button type="submit">Send form</button>
        </form>
      </>
    );
  }
}

export default SignInForm;

import { h, render, Component } from "preact";
import { route } from "preact-router";

import "./login.scss";
import Error from "../../Error/Error";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();

    let inputName = this.inputName.value;
    let inputPassword = this.inputPassword.value;
    if (inputName.length < 1 || inputPassword.length < 1) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
      this.props.setLogin(true);
      route("/phone");
    }
  }

  render() {
    return (
      <div className="login-wrapper">
        <form className="login-form" onSubmit={this.submit}>
          <div className="login-title">Log in:</div>
          <div className="login-input-title">Name</div>
          <input
            className="login-input"
            type="text"
            name="number"
            autoComplete="off"
            ref={inputName => (this.inputName = inputName)}
            data-testid="input-name"
          />
          <div className="login-input-title">Password</div>
          <input
            className="login-input"
            type="text"
            name="number"
            autoComplete="off"
            ref={inputPassword => (this.inputPassword = inputPassword)}
            data-testid="input-password"
          />
          <input
            className="login-input-hidden"
            type="submit"
            id="submit-login"
          />
        </form>
        {this.state.error && (
          <div
            className={
              this.state.error ? "login-error-box" : "login-error-box-hide"
            }
          >
            <Error error="login error" />
          </div>
        )}
        {/* <Error ref={this.error} error={this.state.error} data-testid="error" /> */}
        <label
          className="login-input-label"
          htmlFor="submit-login"
          tabIndex={0}
        >
          Submit
        </label>
      </div>
    );
  }
}

export default Login;

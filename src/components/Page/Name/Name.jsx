import { h, render, Component } from "preact";

import Error from "../../Error/Error";

class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      error: false
    };
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    let value = this.input.value;
    if (this.isKeyNumber(value)) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
      console.log("submit");
    }
  }

  isKeyNumber(char) {
    if (/^[0-9]*$/.test(char)) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    this.props.setStep(2);
  }

  render() {
    return (
      <div className="phone-wrapper">
        <form className="phone-form" onSubmit={this.submit}>
          <div className="phone-title">Name</div>
          <input
            className="phone-input"
            type="tel"
            name="number"
            autoComplete="off"
            ref={input => (this.input = input)}
            data-testid="input"
            onSubmit={this.submit}
          />
          <input
            className="phone-input-hidden"
            type="submit"
            id="submit-number"
          />
        </form>
        <div
          className={
            this.state.error ? "phone-error-box" : "phone-error-box-hide"
          }
        >
          <Error error="name error" />
        </div>
        <label
          className="phone-submit-label"
          htmlFor="submit-number"
          tabIndex={0}
        >
          Submit
        </label>
      </div>
    );
  }
}

export default Name;

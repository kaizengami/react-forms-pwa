import { h, render, Component } from "preact";
import { route } from "preact-router";

import Error from "../../Error/Error";

class Phone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      error: false
    };
    this.submit = this.submit.bind(this);
    this.onTyping = this.onTyping.bind(this);
    this.outOfFocus = this.outOfFocus.bind(this);
  }

  submit(e) {
    e.preventDefault();
    let value = this.input.value;
    if (value.length < 6) {
      //this.error.innerHTML = "not valid number";
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
      route("/name");
    }
    this.setState({ error: value.length < 6 });
  }

  isKeyNumber(char) {
    if (/^[0-9]*$/.test(char)) {
      return true;
    }
    return false;
  }

  onTyping() {
    const inputValue = this.input.value;
    const mask = this.input.getAttribute("mask");
    const lastChar = inputValue.slice(-1);

    if (this.isKeyNumber(lastChar)) {
      this.applyMask(inputValue, mask);
    } else {
      this.input.value = inputValue.slice(0, -1);
    }
  }

  applyMask(inputValue, mask) {
    let coutryCode = mask.match(/{([^}]+)}/)[1];
    let hyphenIndexes = this.getHyphenPosition(mask);

    if (inputValue.includes(coutryCode)) {
      inputValue = inputValue.replace(/-/g, "");
      let stringArray = inputValue.split("");
      hyphenIndexes.forEach((index, i) => {
        if (inputValue.length < index) return;
        stringArray.splice(index, 0, "-");
      });
      this.input.value = stringArray.join("");
    } else this.input.value = coutryCode;
  }

  getHyphenPosition(mask) {
    let indexes = [];
    let string = mask.replace(/{/, "").replace(/}/, "");
    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === "-") {
        indexes.push(i);
        // const test = [...indexes, i]
      }
    }
    return indexes;
  }

  outOfFocus() {
    if (this.input.value.length === 4) this.input.value = "";
  }

  componentDidMount() {
    this.props.setStep(1);
  }

  render() {
    return (
      <div className="phone-wrapper">
        <form className="phone-form" onSubmit={this.submit}>
          <div className="phone-title">Phone number:</div>
          <input
            className="phone-input"
            type="tel"
            name="number"
            autoComplete="off"
            ref={input => (this.input = input)}
            data-testid="input"
            onKeyDown={this.isKeyNumber}
            onKeyUp={this.onTyping}
            onFocus={this.onTyping}
            onBlur={this.outOfFocus}
            mask="{+234}-000-000-000"
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
          <Error error="phone number" />
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

export default Phone;

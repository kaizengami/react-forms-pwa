import Login from "./Login/Login";
import Steps from "./Steps/Steps";
import Phone from "./Phone/Phone";

import { h, render, Component } from "preact";

export class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      login: true
    };
  }

  setStep() {
    this.setState({ step: 2 });
  }

  setLogin(isLoggedIn) {
    this.setState({ login: isLoggedIn });
  }

  render() {
    return (
      <div class="page">
        {this.state.login ? (
          [<Steps step={this.state.step} />, <Phone setStep={this.setStep} />]
        ) : (
          <Login setLogin={this.setLogin.bind(this)} />
        )}
      </div>
    );
  }
}

export default Page;

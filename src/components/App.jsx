import Router from "preact-router";
import createHashHistory from "history/createHashHistory";
import { h, render, Component } from "preact";

//import Page from "./Page/Page";

import Menu from "./Menu/Menu";
import Login from "./Page/Login/Login";
import Steps from "./Page/Steps/Steps";
import Phone from "./Page/Phone/Phone";
import Name from "./Page/Name/Name";
import Footer from "./Footer/Footer";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      step: 0
    };
  }

  setLogin(isLoggedIn) {
    this.setState({ isLogged: isLoggedIn });
  }

  setStep(stepNumber) {
    this.setState({ step: stepNumber });
  }

  render() {
    return (
      <div id="root">
        <Menu />
        <div class="page">
          {this.state.isLogged && <Steps step={this.state.step} />}
          <Router history={createHashHistory()}>
            <Login path="/" setLogin={this.setLogin.bind(this)} />
            <Phone path="/phone" setStep={this.setStep.bind(this)} />
            <Name path="/name" setStep={this.setStep.bind(this)} />
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

import { h, render, Component } from "preact";

class Error extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  getErrorText(error) {
    switch (error) {
      case "phone number":
        return "Not valid phone number";
        break;
      case "name error":
        return "Not valid name";
        break;
      case "login error":
        return "Username or password is incorrect";
        break;
      default:
        return "Wrong input value";
        break;
    }
  }

  render() {
    return <div>{this.getErrorText(this.props.error)}</div>;
  }
}

export default Error;

import { h, render, Component } from "preact";

class Steps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="steps-wrapper">
        <div className="steps-step">
          <div
            className={
              this.props.step > 0 ? "step-icon step-icon-active" : "step-icon"
            }
          >
            <div className="step-icon-img">I</div>
          </div>
          <div className="icon-title">Phone</div>
        </div>
        <div className="steps-step">
          <div
            className={
              this.props.step > 1 ? "step-icon step-icon-active" : "step-icon"
            }
          >
            <div className="step-icon-img">N</div>
          </div>
          <div className="icon-title">Name</div>
        </div>
        <div className="steps-step">
          <div className="step-icon">
            <div className="step-icon-img">A</div>
          </div>
          <div className="icon-title">Address</div>
        </div>
        <div className="steps-step">
          <div className="step-icon">
            <div className="step-icon-img">C</div>
          </div>
          <div className="icon-title">Confirmation</div>
        </div>
        <div className="steps-step">
          <div className="step-icon">
            <div className="step-icon-img">S</div>
          </div>
          <div className="icon-title">Success</div>
        </div>
      </div>
    );
  }
}

export default Steps;

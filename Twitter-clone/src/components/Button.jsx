import React from "react";
import "../assets/css/components/Button.css";
import Popup from "reactjs-popup";

class Button extends React.Component {
  render() {
    return (
      <>
        <Popup
          trigger={
            <div className="btn-wrapper">
              <button className="btn" onClick={this.props.click}>
                {this.props.btn}
              </button>
            </div>
          }
        >
          {this.props.popupthing}
        </Popup>
      </>
    );
  }
}

export default Button;

import React from "react";

class Button extends React.Component {
  render() {
    return (
      <>
        <div className="btn-wrapper">
          <button className="btn">{this.props.btn}</button>
        </div>
      </>
    );
  }
}

export default Button;

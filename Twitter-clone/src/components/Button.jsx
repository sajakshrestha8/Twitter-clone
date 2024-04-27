import React from "react";

class Button extends React.Component {
  render() {
    return (
      <>
        <button className="btn">{this.props.btn}</button>
      </>
    );
  }
}

export default Button;

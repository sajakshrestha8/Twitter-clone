import React from "react";

class Button extends React.Component {
  render() {
    return (
      <>
        <div className="btn-wrapper">
          <button className="btn" onClick={this.props.click}>
            {this.props.btn}
          </button>
        </div>
      </>
    );
  }
}

export default Button;

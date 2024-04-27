import React from "react";

class Input extends React.Component {
  render() {
    return (
      <>
        <div className="input-wrapper">
          <input
            type="text"
            className="input"
            placeholder={this.props.placeholder}
          ></input>
        </div>
      </>
    );
  }
}

export default Input;

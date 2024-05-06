import React from "react";
import Button from "./Button.jsx";

class Left extends React.Component {
  render() {
    return (
      <>
        <div className="logo">
          <img src={this.props.image}></img>
        </div>

        <nav className="left-navigation-nav">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Explore</a>
            </li>
            <li>
              <a href="">Profile</a>
            </li>
            <li>
              <a href="">Setting</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Left;

import React from "react";
import "./Navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <>
        <div className="nav">
          <ul>
            <li>Sports News</li>
            <li>International News</li>
            <li>National News</li>
            <li>Business News</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;

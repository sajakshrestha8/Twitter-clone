import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <>
        <nav className="mid-navigation-nav">
          <ul>
            <li>
              <a href="">Sports News</a>
            </li>
            <li>
              <a href="">International News</a>
            </li>
            <li>
              <a href="">National News</a>
            </li>
            <li>
              <a href="">Business News</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navigation;

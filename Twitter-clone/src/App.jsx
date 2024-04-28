import React from "react";
import "./assets/css/index.css";
import Left from "./components/Left";
import Logo from "./assets/Images/logo.png";
import Mid from "./components/Mid";
import Right from "./components/Right";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="main-grid">
          <div className="left">
            <Left image={Logo} />
          </div>

          <div>
            <Mid />
          </div>

          <div>
            <Right />
          </div>
        </div>
      </>
    );
  }
}

export default App;

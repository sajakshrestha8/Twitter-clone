import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/Input";
import Navigation from "./components/Navigation";

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Input />
      </>
    );
  }
}

export default App;

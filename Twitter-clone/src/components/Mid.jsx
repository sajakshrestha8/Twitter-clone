import React from "react";
import Input from "./Input";
import Navigation from "./Navigation";
import Content from "./Content";
import Profile from "../assets/Images/profile.png";
import Newsimg from "../assets/Images/newsimg.jpg";

class Mid extends React.Component {
  render() {
    return (
      <>
        <Input placeholder="Enter your Status" />
        <Navigation />
        <Content
          Title={"Hello"}
          profile={Profile}
          news={
            "DRS became one of the top nepali PUBG team to qualify for the PMGC(PUBG Mobile Global Champainship)"
          }
          newsimg={Newsimg}
        />
      </>
    );
  }
}

export default Mid;

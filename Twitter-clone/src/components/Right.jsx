import React from "react";
import Profile from "../assets/Images/profile.png";
import Profile1 from "../assets/Images/profile1.png";
import RightNews from "../assets/Images/newsimg.jpg";
import RightNews1 from "../assets/Images/newsimg-1.jpg";
import ContentRight from "./ContentRight";

class Right extends React.Component {
  render() {
    return (
      <>
        <h1 className="trending">Trending News</h1>

        <ContentRight
          Title={"Hello"}
          profile={Profile}
          news={
            "DRS became one of the top nepali PUBG team to qualify for the PMGC(PUBG Mobile Global Champainship)"
          }
          newsimg={RightNews}
        />

        <ContentRight
          Title={"Sajak Shrestha"}
          profile={Profile1}
          news={
            "Nasa is hacked by Sajak Shrestha By just Using the core HTML and CSS..."
          }
          newsimg={RightNews1}
        />
      </>
    );
  }
}

export default Right;

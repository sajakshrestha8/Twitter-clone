import React from "react";
import PopUpInput from "./PopUpInput";
import Navigation from "./Navigation";
import Content from "./Content";
import Profile from "../assets/Images/profile.png";
import Newsimg from "../assets/Images/newsimg.jpg";

class Mid extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       // eslint-disable-next-line react-hooks/rules-of-hooks
  //       seen: useState(false),
  //     };
  //   }

  //   popup() {
  //     this.setState({

  //     })
  //   }

  render() {
    return (
      <>
        {<PopUpInput placeholder="Enter your Status" click="" />}
        <Navigation />
        <div className="post">
          <Content
            Title={"Hello"}
            profile={Profile}
            news={
              "DRS became one of the top nepali PUBG team to qualify for the PMGC(PUBG Mobile Global Champainship)"
            }
            newsimg={Newsimg}
          />

          {/* <Popup
            trigger={<button> Click to open popup </button>}
            position="right center"
          >
            <div>GeeksforGeeks</div>
            <button>Click here</button>
          </Popup> */}
        </div>
      </>
    );
  }
}

export default Mid;

import React from "react";
import PopUpInput from "./PopUpInput";
import Navigation from "./Navigation";
import Content from "./Content";
import Profile from "../assets/Images/profile.png";
import Newsimg from "../assets/Images/newsimg.jpg";

class Mid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ininame: ["Routine of Nepal Banda"],
      name: [""],
      ininews: ["I am Sajak Shrestha"],
      news: [""],
    };
  }

  popup() {
    this.setState({});
  }

  newssubmit() {
    this.setState({
      news: [...this.state.ininews, this.state.news],
    });
  }

  render() {
    return (
      <>
        {
          <PopUpInput
            placeholder="Enter your Status"
            post="Post"
            name={(e) => {
              this.setState({
                name: e.target.value,
              });
            }}
            news={(news) => {
              this.setState({
                news: news.target.value,
              });
            }}
            submit={() => {
              this.setState({
                ininame: [...this.state.ininame, this.state.name],
              });
              this.newssubmit();
            }}
          />
        }
        <Navigation />
        <section>
          {this.state.ininame.map((name, index) => {
            return (
              <>
                <div className="post">
                  <Content
                    key={index}
                    Title={name}
                    profile={Profile}
                    news={name}
                    newsimg={Newsimg}
                  />
                </div>
              </>
            );
          })}

          {this.state.ininews.map((value, index) => {
            console.log(value);
          })}
        </section>
      </>
    );
  }
}

export default Mid;

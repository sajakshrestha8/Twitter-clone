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
      news: [
        {
          title: "test",
          desc: "test",
        },
      ],
      ininame: ["Routine of Nepal Banda"],
      ininews: ["I am Sajak Shrestha"],
      title: "",
      desc: "",
    };
  }

  popup() {
    this.setState({});
  }

  newssubmit() {
    this.setState({
      news: [...this.state.desc, this.state.desc],
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
                title: e.target.value,
              });
            }}
            news={(news) => {
              this.setState({
                desc: news.target.value,
              });
            }}
            submit={() => {
              this.setState({
                ininame: [
                  ...this.state.news,
                  {
                    title: this.state.title,
                    desc: this.state.desc,
                  },
                ],
              });
              this.newssubmit();
            }}
          />
        }
        <Navigation />
        {console.log(this.state)}
        <section>
          {this.state.news.map((obj, index) => {
            return (
              <>
                <div className="post">
                  <Content
                    key={index}
                    Title={obj.title}
                    profile={Profile}
                    news={obj.desc}
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

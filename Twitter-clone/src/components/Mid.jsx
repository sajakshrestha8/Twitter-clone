import React from "react";
import PopUpInput from "./PopUpInput";
import Navigation from "./Navigation";
import Content from "./Content";
import Profile from "../assets/Images/profile.png";
import Newsimg from "../assets/Images/newsimg.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Mid extends React.Component {
  notify = () => toast.success(" New Post Added successfully");
  notify1 = () => toast.warning("This Post is Deleted successfully");
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          title: "Routine of Nepal Banda",
          desc: "I am Sajak Shrestha",
          profile: Profile,
        },
      ],
      title: "",
      desc: "",
      profile: {},
    };
  }

  popup() {
    this.setState({});
  }

  // newssubmit() {
  //   this.setState({
  //     news: [...this.state.news, this.state.desc],
  //   });
  // }

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
                news: [
                  ...this.state.news,
                  {
                    title: this.state.title,
                    desc: this.state.desc,
                    Profile: this.state.profile,
                  },
                ],
              });
              this.notify();
              // this.newssubmit();
            }}
          />
        }
        <ToastContainer
          theme="light"
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={true}
        />
        <Navigation />
        <section>
          {this.state.news.map((obj, index) => {
            return (
              <>
                <div className="post">
                  <Content
                    key={index}
                    Title={obj.title}
                    profile={obj.profile}
                    news={obj.desc}
                    newsimg={Newsimg}
                    yes={"Yes"}
                    no={"No"}
                    btnyes={() => {
                      this.setState({
                        news: this.state.news.filter(
                          (value, idx) => index !== idx
                        ),
                      });
                      this.notify1();
                    }}
                  />
                </div>
              </>
            );
          })}
        </section>
      </>
    );
  }
}

export default Mid;

import React from "react";
import PopUpInput from "./PopUpInput";
import Navigation from "./Navigation";
import Content from "./Content";
import Comment from "./Comment";
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
          like: 0,
          isclicked: false, // if isClicked true -> show me red color
          name: "Sajak Shrestha",
          comment: "Very nice so good to know about it right now!!",
        },
      ],
    };
  }

  popup() {
    this.setState({});
  }

  updateArrayOnIndex = (index, updatedValue) => {
    const oldArray = this.state.news;
    const updatedArrayWithUpdatedValue = [
      ...oldArray.slice(0, index),
      updatedValue,
      ...oldArray.slice(index + 1),
    ];
    this.setState({
      news: updatedArrayWithUpdatedValue,
    });
  };

  likeclicked = (index) => {
    // if isclicked is false then like should be +1, and change isclicked to true
    // if isclicked is true ignore everything
    let valueToChange = this.state.news[index]; //false
    valueToChange.isclicked = !valueToChange.isclicked; // true

    if (valueToChange.isclicked === true) {
      // user le button thichi sakyo, true xa ki false
      valueToChange.like = valueToChange.like + 1;
      this.updateArrayOnIndex(index, valueToChange);
    } else {
      valueToChange.like = valueToChange.like - 1;
      this.updateArrayOnIndex(index, valueToChange);
    }
    // const updatedNews = [...this.state.news];
    // const modified = { isclicked: !updatedNews.isclicked };
    // console.log(modified);
    // if (modified[index].isclicked == true) {
    //   updatedNews[index].like++;
    //   this.setState({
    //     news: updatedNews,
    //     isclicked: modified,
    //   });
    // } else {
    //   this.state.news.like;
    // }
  };

  addName = (name) => {
    this.setState({
      name: name.target.value,
    });
  };

  addComment = (comment) => {
    this.setState({
      comment: comment.target.value,
    });
  };

  sendComment = () => {
    console.log("Clicked");
    this.setState({
      news: [
        ...this.state.news,
        {
          name: this.state.name,
          comment: this.state.comment,
        },
      ],
    });
  };

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
                    like: this.state.like,
                    isclicked: this.state.isclicked,
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
        <div className="post">
          {this.state.news.map((obj, index) => {
            return (
              <>
                <Content
                  key={index}
                  singleNews={obj}
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
                  like={obj.like}
                  likeclicked={() => {
                    this.likeclicked(index);
                  }}
                  addName={this.addName}
                  sendComment={this.sendComment}
                />
              </>
            );
          })}
          <Comment name={"Sa"} comment={"sa"} />
        </div>
      </>
    );
  }
}

export default Mid;

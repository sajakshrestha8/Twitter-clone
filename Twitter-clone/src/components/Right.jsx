import React from "react";
import Profile from "../assets/Images/profile.png";
import RightNews from "../assets/Images/newsimg.jpg";
import ContentRight from "./ContentRight";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Right extends React.Component {
  notify = () => toast.success("Trending News Added successfully");
  notify1 = () => toast.warning("Trending News Deleted successfully");
  constructor(props) {
    super(props);
    this.state = {
      post: [
        {
          title: "Hello",
          news: "Test grdai xu hai",
        },
      ],
    };
  }

  name = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  news = (e) => {
    this.setState({
      news: e.target.value,
    });
  };

  submit = () => {
    this.setState({
      post: [
        ...this.state.post,
        {
          title: this.state.title,
          news: this.state.news,
        },
      ],
    });
    this.notify();
  };

  render() {
    return (
      <>
        <h1 className="trending">Trending News</h1>

        {/* Submit */}
        <Button
          btn="Share Trending News"
          popupthing={
            <section className="popup-form">
              <label>Share News</label>
              <br />
              <label>Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                onChange={this.name}
              ></input>
              <br />
              <label>News</label>
              <br />
              <input
                type="textarea"
                placeholder="Enter your news"
                onChange={this.news}
              ></input>
              <input type="file" src={this.props.profilesrc}></input>

              <Button btn={"share"} click={this.submit} />
              <ToastContainer
                theme="light"
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={true}
              />
            </section>
          }
        />
        <div>
          {this.state.post.map((value, index) => {
            return (
              <>
                <ContentRight
                  key={index}
                  Title={value.title}
                  profile={Profile}
                  news={value.news}
                  newsimg={RightNews}
                  yes={"Yes"}
                  no={"No"}
                  btnyes={() => {
                    this.setState({
                      post: this.state.post.filter(
                        (value, idx) => index !== idx
                      ),
                    });
                    this.notify1(console.log("Clicked"));
                  }}
                />
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Right;

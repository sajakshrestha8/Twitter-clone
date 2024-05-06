import React from "react";
import Button from "./Button.jsx";

class Content extends React.Component {
  render() {
    return (
      <>
        <div className="content-heading">
          <div className="profile">
            <img src={this.props.profile}></img>
          </div>

          <div>
            <h3>{this.props.Title}</h3>
            <label htmlFor="">{this.props.news}</label>
          </div>
          <div>
            <Button
              btn={"Delete"}
              heading={"Do you really want to delete this post?"}
              yes={"Yes"}
              No={"No"}
              click={this.props.buttonclick}
            />
          </div>
        </div>

        <div className="news-img-wrapper">
          <img src={this.props.newsimg} className="newsimg"></img>
        </div>
      </>
    );
  }
}

export default Content;

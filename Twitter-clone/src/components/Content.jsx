import React from "react";
import Button from "./Button.jsx";
import Popup from "reactjs-popup";

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
              popupthing={
                <div className="delete-popup">
                  <label>Are you sure to delete this post?</label>
                  <br />
                  <div className="yes-no-wrapper">
                    <button className="yes" onClick={this.props.btnyes}>
                      {this.props.yes}
                    </button>
                    <button className="no" onClick={this.props.btnno}>
                      {this.props.no}
                    </button>
                  </div>
                </div>
              }
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

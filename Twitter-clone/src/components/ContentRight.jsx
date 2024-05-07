import React from "react";
import Button from "./Button";

class ContentRight extends React.Component {
  render() {
    return (
      <>
        <div className="post">
          <div className="content-heading-right">
            <div className="profile-right">
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
                    <label>Remove this trending post?</label>
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

          <div className="news-img-wrapper-right">
            <img src={this.props.newsimg} className="newsimg-right"></img>
          </div>
        </div>
      </>
    );
  }
}

export default ContentRight;

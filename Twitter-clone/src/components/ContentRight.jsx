import React from "react";

class ContentRight extends React.Component {
  render() {
    return (
      <>
        <div className="content-heading-right">
          <div className="profile-right">
            <img src={this.props.profile}></img>
          </div>

          <div>
            <h3>{this.props.Title}</h3>
            <label htmlFor="">{this.props.news}</label>
          </div>
        </div>

        <div className="news-img-wrapper-right">
          <img src={this.props.newsimg} className="newsimg-right"></img>
        </div>
      </>
    );
  }
}

export default ContentRight;

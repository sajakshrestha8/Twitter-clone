import React from "react";
import CommentProfile from "../assets/Images/profile.png";

class Comment extends React.Component {
  render() {
    return (
      <>
        <label>Comment Section</label>
        <div className="comment-section">
          <div className="comment-profile">
            <img src={CommentProfile}></img>
          </div>

          <div>
            <label>
              <b>{this.props.name}</b>
            </label>
          </div>
          <br />
          <div>
            <label>{this.props.comment}</label>
          </div>
        </div>
      </>
    );
  }
}

export default Comment;

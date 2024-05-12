import React from "react";
import Button from "./Button.jsx";
import Popup from "reactjs-popup";
import CommentProfile from "../assets/Images/profile.png";

class Content extends React.Component {
  render() {
    return (
      <>
        <div className="content-heading">
          <div className="profile">
            <img src={CommentProfile}></img>
          </div>

          <div>
            <h3>{this.props.singleNews.title}</h3>
            <label htmlFor="">{this.props.singleNews.desc}</label>
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

        <div className="content-footer">
          <div className="like">
            <button onClick={this.props.likeclicked}>
              <svg
                className="like"
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="black"
              >
                <path
                  // eslint-disable-next-line react/prop-types
                  fill={this.props.singleNews.isclicked === true ? "red" : ""}
                  d="m480-120.67-46.67-42q-104.18-95.08-172.25-164.04Q193-395.67 152.67-450.17q-40.34-54.5-56.5-99.16Q80-594 80-640q0-91.44 61.33-152.72 61.34-61.28 152-61.28 55.34 0 103.34 25.33 48 25.34 83.33 72.67 39.33-49.33 86.33-73.67 47-24.33 100.34-24.33 90.66 0 152 61.28Q880-731.44 880-640q0 46-16.17 90.67-16.16 44.66-56.5 99.16-40.33 54.5-108.41 123.46-68.07 68.96-172.25 164.04l-46.67 42Zm0-88.66q99.49-90.67 163.75-155.5Q708-429.67 745.67-478.17q37.66-48.5 52.66-86.42t15-75.31q0-64.1-41.33-105.77-41.33-41.66-105.18-41.66-50.02 0-92.59 29.83-42.56 29.83-65.56 81.5h-58q-22.34-51-64.9-81.17-42.57-30.16-92.59-30.16-63.85 0-105.18 41.66-41.33 41.67-41.33 105.88 0 37.46 15 75.62 15 38.17 52.66 87Q252-428.33 316.67-363.83q64.66 64.5 163.33 154.5Zm0-289Z"
                />
              </svg>
            </button>
            <label>{this.props.singleNews.like}</label>
          </div>

          <div>
            <Popup
              trigger={
                <button onClick={this.props.commentclicked}>
                  <svg
                    className="comment"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="black"
                  >
                    <path d="M446.67-400h66.66v-126.67H640v-66.66H513.33V-720h-66.66v126.67H320v66.66h126.67V-400ZM80-80v-733.33q0-27 19.83-46.84Q119.67-880 146.67-880h666.66q27 0 46.84 19.83Q880-840.33 880-813.33v506.66q0 27-19.83 46.84Q840.33-240 813.33-240H240L80-80Zm131.33-226.67h602v-506.66H146.67v575l64.66-68.34Zm-64.66 0v-506.66 506.66Z" />
                  </svg>
                </button>
              }
            >
              <div className="popup-form">
                <label>Enter your Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  onChange={this.props.addName}
                ></input>
                <br />
                <label>Enter your Comment</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your comment.."
                  onChange={this.props.addComment}
                ></input>
                <br />

                <button
                  className="comment-done-btn"
                  onClick={this.props.sendComment}
                >
                  Send
                </button>
              </div>
            </Popup>
            <label>{this.props.comment}</label>
          </div>

          <div>
            <button onClick={this.props.shareclicked}>
              <svg
                className="share"
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="black"
              >
                <path d="M724.67-80q-48.34 0-82.17-33.9t-33.83-82.32q0-6.78 1.33-15.71t4-16.07L318-400q-15.67 16.33-37.33 26.17Q259-364 236-364q-48.33 0-82.17-33.83Q120-431.67 120-480t33.83-82.17Q187.67-596 236-596q23 0 44 8.83 21 8.84 38 25.17l296-170.67q-2.67-6.71-4-15.1-1.33-8.4-1.33-16.23 0-48.33 33.83-82.17Q676.33-880 724.67-880q48.33 0 82.16 33.83 33.84 33.84 33.84 82.17t-33.84 82.17Q773-648 724.67-648q-23.24 0-44.45-7.83Q659-663.67 643.33-680l-296 166.67q2 7.33 3.34 16.83Q352-487 352-479.84t-1.33 14.83q-1.34 7.68-3.34 15.01l296 169.33q15.67-14.33 36-22.83 20.34-8.5 45.34-8.5 48.33 0 82.16 33.83 33.84 33.84 33.84 82.17t-33.84 82.17Q773-80 724.67-80Zm.02-634.67q20.98 0 35.14-14.19Q774-743.05 774-764.02q0-20.98-14.19-35.15-14.19-14.16-35.17-14.16-20.97 0-35.14 14.19-14.17 14.19-14.17 35.16 0 20.98 14.19 35.15 14.19 14.16 35.17 14.16Zm-488.67 284q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16Zm488.67 284q20.98 0 35.14-14.19Q774-175.05 774-196.02q0-20.98-14.19-35.15-14.19-14.16-35.17-14.16-20.97 0-35.14 14.19-14.17 14.19-14.17 35.16 0 20.98 14.19 35.15 14.19 14.16 35.17 14.16ZM724.67-764ZM236-480Zm488.67 284Z" />
              </svg>
            </button>
            <label>{this.props.share}</label>
          </div>
        </div>
      </>
    );
  }
}

export default Content;

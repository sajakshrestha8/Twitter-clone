import Button from "./Button";
import React from "react";
import Popup from "reactjs-popup";

class PopUpInput extends React.Component {
  render() {
    return (
      <>
        <div className="input-wrapper">
          <Popup
            trigger={
              <input
                type="text"
                className="input"
                placeholder={this.props.placeholder}
                onClick={this.props.click}
              ></input>
            }
          >
            <section className="popup-form">
              <label>Share News</label>
              <br />
              <label>Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                onChange={this.props.name}
              ></input>
              <br />
              <label>News</label>
              <br />
              <input
                type="textarea"
                placeholder="Enter your news"
                onChange={this.props.news}
              ></input>
              <input
                type="file"
                src={this.props.profilesrc}
                onChange={this.props.imageinput}
              ></input>

              <Button btn={this.props.post} click={this.props.submit} />
            </section>
          </Popup>
        </div>
      </>
    );
  }
}

export default PopUpInput;

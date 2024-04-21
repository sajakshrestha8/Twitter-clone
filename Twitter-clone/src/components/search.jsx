import React from "react";
import "./search.css";
import Navigation from "./Navigation";

class search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: ["hi", "hello"],
      text: [""],
      // delete: [this.state.text],
    };
  }

  render() {
    return (
      <>
        <div className="search-div">
          <input
            type="text"
            onChange={(e) => {
              this.setState({
                text: e.target.value,
              });
            }}
            className="search"
            placeholder="Enter your news"
          ></input>
          <button
            onClick={() => {
              this.setState({
                news: [...this.state.news, this.state.text],
              });
            }}
          >
            Submit
          </button>
        </div>

        <Navigation />

        <section className="output-wrapper">
          <h4>The required News are:</h4>

          {this.state.news.map((name, index) => {
            return (
              <>
                <li key={name.id} className="output">
                  {name}

                  <button
                    onClick={(e) => {
                      this.setState({
                        news: this.state.news.filter((i) => i.id !== name.id),
                      });
                    }}
                  >
                    Delete
                  </button>

                  <button onClick={() => {
                    
                  }}>
                      Modify
                  </button>
                </li>
              </>
            );
          })}
        </section>
      </>
    );
  }
}

export default search;

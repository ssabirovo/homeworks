import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div className="btns">
        <button onClick={() => this.props.handleGenre("All")} className="btn">
          All
        </button>
        <button
          onClick={() => this.props.handleGenre("Horror")}
          className="btn"
        >
          Horror
        </button>
        <button
          onClick={() => this.props.handleGenre("Comedy")}
          className="btn"
        >
          Comedy
        </button>
        <button
          onClick={() => this.props.handleGenre("Action")}
          className="btn"
        >
          Action
        </button>
        <button
          onClick={() => this.props.handleGenre("Sci-fi")}
          className="btn"
        >
          Sci-Fi
        </button>
      </div>
    );
  }
}

export default Buttons;

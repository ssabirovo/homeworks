import React, { Component } from "react";
import "./tree.scss";

class Tree extends Component {
  state = {
    expand: false,
  };

  setExpand = () => {
    this.setState({ expand: !this.state.expand });
  };
  render() {
    const { explorer } = this.props;
    return (
      <>
        <span className="spancha" onClick={() => this.setExpand()}>
          {explorer.items ? (
            this.state.expand ? (
              <i className="fa-solid fa-caret-down"></i>
            ) : (
              <i className="fa-solid fa-caret-right"></i>
            )
          ) : (
            ""
          )}

          {explorer.name}
        </span>
        <div
          className="explore "
          style={{
            paddingLeft: "2rem",
            display: this.state.expand ? "flex" : "none",
          }}
        >
          {explorer.items
            ? explorer.items.map((explore) => <Tree explorer={explore} />)
            : console.log("ended")}
        </div>
      </>
    );
  }
}

export default Tree;

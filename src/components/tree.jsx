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
          {explorer.name}
        </span>
        <div
          className="explore"
          style={{
            paddingLeft: "2rem",
            display: this.state.expand ? "flex" : "none",
          }}
        >
          {explorer.items.map((explore) => (
            <Tree explorer={explore} />
          ))}
        </div>
      </>
    );
  }
}

export default Tree;

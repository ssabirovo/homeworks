import React, { Component } from "react";
import Tree from "./tree";
let key = 0;
class Trees extends Component {
  renderKey = () => key++;
  render() {
    return (
      <>
        {this.props.explorer.map((item) => (
          <Tree
            key={this.renderKey()}
            explorer={item}
            renderKey={this.renderKey}
          />
        ))}
      </>
    );
  }
}

export default Trees;

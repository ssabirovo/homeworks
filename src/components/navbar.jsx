import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    let countersLength = this.props.counters.filter(
      (item) => item.value !== 0
    ).length;

    return (
      <>
        <span className="badge badge-lg p-2 me-2 bg-info">
          {countersLength}
        </span>
        
      </>
    );
  }
}

export default Navbar;

import React, { Component } from "react";

class Counter extends Component {
  getCount = () => {
    const count = this.state.count;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClass = () => {
    const className = "badge badge-lg p-2 me-2 bg-";
    const types = [
      "dark",
      "info",
      "danger",
      "primary",
      "success",
      "warning",
      "secondary",
    ];
    const ranIdx = Math.floor(Math.random() * types.length);
    return className + types[ranIdx];
  };

  handleClick = (num = 1) => {};

  render() {
    return (
      <div className="my-2">
        <span className={this.getBadgeClass()}>{this.props.value}</span>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.onIncrement(this.props.id - 1);
          }}
        >
          Increment
        </button>
        <button
          className="btn btn-primary ms-2"
          onClick={() => {
            this.props.onDecrement(this.props.id - 1);
          }}
        >
          Decrement
        </button>
        <button
          className="btn btn-primary ms-2"
          onClick={() => {
            this.props.onDelete(this.props.id);
          }}
        >
          x
        </button>
      </div>
    );
  }
}

export default Counter;

import React, { Component } from "react";

class Step extends Component {
  render() {
    return (
      <div className="my-2">
        
        <span className="p-2 bg-success">{this.props.value}</span>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.onStart(this.props.id - 1, this.props.minusNum,this.props.plusNum);
          }}
        >
          Start
        </button>
      </div>
    );
  }
}

export default Step;

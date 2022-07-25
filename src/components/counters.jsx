import { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <button onClick={this.props.onReset} className="btn btn-success">
          Reset
        </button>
        {this.props.stateCounter.map((item) => (
          <Counter
            key={item.id}
            id={item.id}
            value={item.value}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </>
    );
  }
}

export default Counters;

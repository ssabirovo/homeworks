import { Component } from "react";
import Step from "./step";


class Steps extends Component {
  


  render() {
    
    console.log(this.props);
    return (
      <>
        {this.props.stateCounter.map((item) => (
          <Step
            plusNum={item.plus}
            minusNum={item.minus}
            key={item.id}
            id={item.id}
            value={item.value}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onStart={this.props.onStart}
          />
        ))}
      </>
    );
  }
}

export default Steps;

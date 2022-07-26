import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/base.scss";
import Steps from "./components/steps";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 0, plus: 2, minus: 1 },
      { id: 2, value: 0, plus: 3, minus: 2 },
      { id: 3, value: 0, plus: 4, minus: 3 },
    ],
  };

  handleStart = (selectedIdx,minusNum,plusNum) => {
    
      this.handleIncrement(selectedIdx,plusNum)
      setTimeout(() => {
        this.handleDecrement(selectedIdx,minusNum)
        setTimeout(() => {
          this.handleIncrement(selectedIdx,plusNum)
        }, 1000);
      }, 1000);
    
    
  };

  handleIncrement = (selectedIdx, num) => {
    const temp = this.state;
    temp.counter[selectedIdx].value += num;
    this.setState(temp);
  };
  handleDecrement = (selectedIdx, num) => {
    const temp = this.state;
    temp.counter[selectedIdx].value -= num;
    this.setState(temp);
  };

  render() {
    return (
      <>
        <Steps
          stateCounter={this.state.counter}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onStart={this.handleStart}
        />
      </>
    );
  }
}

export default App;

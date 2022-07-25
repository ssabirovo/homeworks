import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/base.scss";

import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 20 },
      { id: 2, value: 30 },
      { id: 3, value: 40 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (selectedIdx) => {
    const temp = this.state;
    temp.counter[selectedIdx].value++;
    this.setState(temp);
  };
  handleDecrement = (selectedIdx) => {
    const temp = this.state;
    temp.counter[selectedIdx].value--;
    this.setState(temp);
  };

  handleDelete = (selectedId) => {
    const temp = this.state.counter.filter((item) => item.id !== selectedId);
    this.setState({ counter: temp });
  };
  handleReset = () =>
    this.setState(this.state.counter.map((item) => (item.value = 0)));
  render() {
    return (
      <>
        <Navbar counters={this.state.counter} />
        <Counters
          stateCounter={this.state.counter}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;

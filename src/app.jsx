import { Component } from "react";
import products from "./products";

class App extends Component {
  state = {};

  render() {
    console.log("products = ", products);
    return <div className='App'>Apple Watch</div>;
  }
}

export default App;

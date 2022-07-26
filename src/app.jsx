import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/base.scss";
import Tree from "./components/tree";
import explorer from "./components/data";

let key = 0;
class App extends Component {
  renderKey = () => {
    key++;
  };
  render() {
    return (
      <>
        {explorer.map((item) => (
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

export default App;

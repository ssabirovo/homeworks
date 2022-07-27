import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/base.scss";

import explorer from "./components/data";
import Trees from "./components/trees";

class App extends Component {
  render() {
    return (
      <>
        <Trees explorer={explorer} />
      </>
    );
  }
}

export default App;

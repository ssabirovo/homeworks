import React, { Component } from "react";
import Buttons from "./components/buttons";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import "./style.scss";

class App extends Component {
  state = {
    data: [],
    renderData: [],
  };

  // getData = () => {};
  componentDidMount = () => {
    // this.getData();
    fetch("http://localhost:8000")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json, renderData: json });
      });
  };

  handleGenre = (genre) => {
    if (genre !== "All") {
      let temp = this.state.data.filter((item) => item.genres === genre);
      return this.setState({ renderData: temp });
    } else {
      return this.setState({ renderData: this.state.data });
    }
  };

  render() {
    console.log(this.state.renderData);
    return (
      <>
        <Navbar />
        <Buttons handleGenre={this.handleGenre} />
        <Movies movies={this.state.renderData} />
      </>
    );
  }
}

export default App;

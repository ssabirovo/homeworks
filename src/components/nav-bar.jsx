import { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-light bg-light'>
        <div className='container justify-content-start'>
          <span style={{ fontSize: 50 }} className='navbar-brand m-0 h1'>
            Zetflix
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;

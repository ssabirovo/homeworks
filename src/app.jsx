import { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { Login, Movies, Register } from "./pages";
import { NavBar } from "./components";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className='container pt-4 wrapper'>
          <Switch>
            <Route path='/movies' component={Movies} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;

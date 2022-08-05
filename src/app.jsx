import { Component } from "react";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import BagItems from "./pages/bag-items/bag-items";
import View from "./pages/view/view";

const USER_KEY = "user";
const PAGE_KEY = "page";
const REDIRECT_PAGE = "login";
class App extends Component {
  constructor(props) {
    super(props);
    const user = JSON.parse(localStorage.getItem(USER_KEY)); // get user
    const page = JSON.parse(localStorage.getItem(PAGE_KEY)); // get page

    this.state = {
      page: user ? page : REDIRECT_PAGE,
      user,
      products: [{ id: "1", name: "macBook pro", price: "$1000" }],
    };
  }

  handleLogOut = () => {
    localStorage.removeItem(USER_KEY); // delete user
    this.setState({ user: null, page: REDIRECT_PAGE });
  };

  handleLogIn = () => {
    localStorage.setItem(USER_KEY, true); // save user
    localStorage.setItem(PAGE_KEY, JSON.stringify("dashboard")); // save page
    this.setState({ user: true, page: "dashboard" });
  };

  handlePageChange = (newPage) => {
    localStorage.setItem(PAGE_KEY, JSON.stringify(newPage)); // save page
    this.setState({ page: newPage });
  };

  getPage = () => {
    const { products } = this.state;
    const defaultProps = {
      onPageChange: this.handlePageChange,
      onLogOut: this.handleLogOut,
    };

    switch (this.state.page) {
      case "login":
        return <Login onLogin={this.handleLogIn} />;
      case "dashboard":
        return <Dashboard {...defaultProps} products={products} />;
      case "bag-items":
        return <BagItems {...defaultProps} />;
      case "view":
        return <View {...defaultProps} />;
      default:
        return <Login onLogin={this.handleLogIn} />;
    }
  };
  render() {
    return <div className='wrapper'>{this.getPage()}</div>;
  }
}

export default App;

import { Component } from "react";
import { toast } from "react-toastify";
class Login extends Component {
  state = {
    disabled: false,
    data: {
      email: "afaf",
      password: "",
      age: 0,
      username: "afafafsfgdhd",
      lastName: "",
    },
  };
  handleChange = (e, inputIdx) => {
    let temp = Object.entries(this.state.data);

    console.log(temp);
    // console.log(inputIdx, "=", e.target.value);
    this.setState({ data: temp });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ disabled: true });

    const { email, password } = this.state;
    setTimeout(() => {
      toast.success(`Login, user ${email} password ${password}`);
      this.setState({ disabled: false });
    }, 2000);
  };

  render() {
    const { disabled, data } = this.state;
    let mapArr = new Array(Object.keys(this.state.data).length).fill("");
    let obj = Object.keys(this.state.data);
    return (
      <>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {mapArr.map((item, idx) => (
            <div key={idx} className="form-group my-2">
              <label htmlFor={obj[idx]}>{obj[idx]}</label>
              <input
                className="form-control"
                // type="password"
                id="password"
                placeholder={`Enter ${obj[idx]}`}
                onChange={(e) => this.handleChange(e, idx)}
              />
            </div>
          ))}

          <button className="btn btn-primary" disabled={disabled}>
            Login
          </button>
        </form>
      </>
    );
  }
}

export default Login;

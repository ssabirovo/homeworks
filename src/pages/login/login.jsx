import "./login.scss";

const Login = ({ onLogin }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;

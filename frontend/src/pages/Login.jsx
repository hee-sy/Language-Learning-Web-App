import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Alert from "../Components/Alert";
import AlertContext from "../Contexts/alert.context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //code for alert
  const [, setAlert] = useContext(AlertContext);
  const showAlert = (msg, type) => {
    setAlert({ text: msg, type: type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5555/user/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          navigate("/home");
        }
      })
      .catch((err) => showAlert(err.response.data.message, "error"));
  };

  return (
    <div>
      <h2>Login</h2>
      <Alert />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input type="email" placeholder="Enter Email" autoComplete="off" name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <br />
        <div>
          <label htmlFor="email">
            <strong>Password</strong>
          </label>
          <input type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <br />
        <button type="submit">Login</button>
        <p>{"Don't have an account?"}</p>
        <Link to="/" className="font-bold text-lime-400">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;

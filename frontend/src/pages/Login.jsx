import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Login</h2>
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

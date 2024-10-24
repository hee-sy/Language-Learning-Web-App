import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            <strong>Name</strong>
          </label>
          <input type="text" placeholder="Enter Name" autoComplete="off" name="email" onChange={(e) => setName(e.target.value)} />
        </div>
        <br />
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
        <button type="submit">Register</button>
        <p>Already have an account?</p>
        <Link to="/login" className="font-bold text-lime-400">
          Login
        </Link>
      </form>
    </div>
  );
};

export default Register;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, TextInput } from "flowbite-react";
import { useContext } from "react";

import Alert from "../Components/Alert";
import AlertContext from "../Contexts/alert.context";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //code for alert
  const [, setAlert] = useContext(AlertContext);
  const showAlert = (msg, type) => {
    setAlert({ text: msg, type: type });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission so that we can use axios to submit the form data to the server
    axios
      .post("http://localhost:5555/user/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/user/login");
      })
      .catch((err) => showAlert(err.response.data.message, "error"));
    // to get the message from the response object, we need to use err.response.data.message,
    // response's props are [data, status, statusText, headers, config, request],
    //learn more about this by reading the axios documentation
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="">Register</h2>
      <Alert />
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div>
          <TextInput type="text" placeholder="Name" autoComplete="off" name="email" onChange={(e) => setName(e.target.value)} />
        </div>
        <br />
        <div>
          <TextInput type="email" placeholder="Email" autoComplete="off" name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <br />
        <div>
          <TextInput type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <br />
        <Button className="self-center" type="submit">
          Register
        </Button>
        <p>Already have an account?</p>
        <Link to="/user/login" className="font-bold text-lime-400">
          Login
        </Link>
      </form>
    </div>
  );
};

export default Register;

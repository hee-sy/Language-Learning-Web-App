import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Alert from "../Components/Alert";
import AlertContext from "../Contexts/alert.context";

import Logo from "../Components/Logo";

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
        alert("User created successfully");
        navigate(`/user/login`, { state: { userData: result.data } });
      })
      .catch((err) => showAlert(err.response.data.message, "error"));
    // to get the message from the response object, we need to use err.response.data.message,
    // response's props are [data, status, statusText, headers, config, request],
    //learn more about this by reading the axios documentation
  };

  return (
    <div className="flex flex-col items-center bg-slate-50">
      <Logo />
      <div className="mx-10 flex min-w-40 max-w-screen-md flex-col items-center justify-center rounded-3xl bg-slate-50 px-10 shadow-xl shadow-slate-400 md:mx-20 md:px-32">
        <h2 className="m-10 mx-0 text-lg font-medium text-gray-900 dark:text-white md:mx-10 md:text-3xl">
          Create an account
        </h2>
        <div className="mb-4 flex flex-row text-xs md:text-sm">
          <p>Already have an account?</p>
          <Link
            to="/user/login"
            className="mx-2 text-xs font-bold text-lime-600 hover:scale-90 max-[342px]:py-2 md:text-sm"
          >
            Login
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="w-full min-w-40 max-w-72">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-medium text-gray-900 dark:text-white md:text-sm"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 focus:border-lime-400 focus:ring-lime-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-400 dark:focus:ring-lime-400 md:text-sm"
              placeholder="Alice"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-medium text-gray-900 dark:text-white md:text-sm"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 focus:border-lime-400 focus:ring-lime-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-400 dark:focus:ring-lime-400 md:text-sm"
              placeholder="alice@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="mb-2 block text-xs font-medium text-gray-900 dark:text-white md:text-sm"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 focus:border-lime-400 focus:ring-lime-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-400 dark:focus:ring-lime-400 md:text-sm"
              placeholder="***"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Alert />
          <button
            type="submit"
            className="mb-10 w-full rounded-lg bg-lime-700 px-5 py-2.5 text-center text-xs font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 sm:w-auto md:text-sm"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

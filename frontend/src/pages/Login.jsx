import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

import Alert from "../Components/Alert";
import AlertContext from "../Contexts/alert.context";

import Logo from "../Components/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // auto-fill the email and password fields if the user is redirected from the register page
  const location = useLocation();
  const userData = location.state?.userData;
  useEffect(() => {
    if (userData) {
      setEmail(userData.email);
      setPassword(userData.password);
    }
  }, [userData]); // userData is changed only when the location state is changed

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
          navigate(`/${result.data._id}/iolsq`, { replace: true }); // Use replace to clear the stack
        }
      })
      .catch((err) => showAlert(err.response.data.message, "error"));
  };

  return (
    <div className="flex flex-col items-center bg-slate-50">
      <Logo />
      <div className="mx-10 flex min-w-40 max-w-screen-md flex-col items-center justify-center rounded-3xl bg-slate-50 px-10 shadow-xl shadow-slate-400 md:mx-20 md:px-32">
        <div className="mb-4 flex flex-row text-xs md:text-sm">
          <p className="py-2">{"Don't have an account?"}</p>
          <Link
            to="/"
            className="mx-2 py-2 text-xs font-bold text-lime-600 hover:scale-90 hover:object-scale-down md:text-sm"
          >
            Create an account
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="w-full min-w-40 max-w-72">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-medium text-gray-900 dark:text-white md:text-sm"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 focus:border-lime-400 focus:ring-lime-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-400 dark:focus:ring-lime-400 md:text-sm"
              placeholder="alice@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="mb-2 block text-xs font-medium text-gray-900 dark:text-white md:text-sm"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 focus:border-lime-400 focus:ring-lime-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-400 dark:focus:ring-lime-400 md:text-sm"
              placeholder="***"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Alert />
          <button
            type="submit"
            className="mb-10 w-full rounded-lg bg-lime-700 px-5 py-2.5 text-center text-xs font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 sm:w-auto md:text-sm"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

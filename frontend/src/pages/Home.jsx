import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  //catch the back button and if pressed, clear the stack
  useEffect(() => {
    window.onpopstate = () => {
      navigate(`/${id}/home`, { replace: true });
    };
  }, [navigate]);

  return (
    <div>
      <h1>Home</h1>

      <a
        href="#"
        className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:scale-95 hover:bg-lime-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Lesson 1
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>

      <button
        className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:scale-95 hover:bg-lime-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        onClick={() => {
          navigate("/user/login", { replace: true }); // to not allow user to go back to home page after logout
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;

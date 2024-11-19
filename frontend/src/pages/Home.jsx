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
    <div className="mx-5 flex flex-col items-center">
      <h1 className="my-10 text-2xl font-bold md:text-3xl">My Lessons</h1>

      <a
        href={``}
        className="my-3 block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:scale-95 hover:bg-lime-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
          Lesson A 🤗
        </h5>
        <p className="text-sm font-normal text-gray-700 dark:text-gray-400 md:text-base">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>

      <a
        href={`/${id}/iolsq`}
        className="my-3 block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:scale-95 hover:bg-lime-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
          Lesson B 😎
        </h5>
        <p className="text-sm font-normal text-gray-700 dark:text-gray-400 md:text-base">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>

      <button
        className="my-20 block max-w-sm rounded-lg border border-gray-200 bg-white px-4 py-2 shadow hover:scale-95 hover:bg-lime-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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

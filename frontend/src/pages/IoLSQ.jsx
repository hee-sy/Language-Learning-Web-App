import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const IoLSQ = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [curr, setCurr] = useState(1);
  const pages = [
    { page: 1 },
    { page: 2 },
    { page: 3 },
    { page: 4 },
    { page: 5 },
  ];
  //   const handlePageChange = (page: number) => setCurrentPage(page);

  //catch the back button and if pressed, clear the stack
  useEffect(() => {
    window.onpopstate = () => {
      navigate(`/${id}/iolsq`, { replace: true });
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center">
      <div
        id="progress-bar"
        className="fixed top-0 z-50 mt-5 w-[70%] md:w-screen md:px-10"
      >
        <div className="mb-1 flex justify-between">
          <span className="text-xs font-medium text-lime-700 dark:text-white">
            Index of Learning Styles Questionnaire
          </span>
          <span className="hidden text-xs font-medium text-lime-700 dark:text-white md:block">
            45%
          </span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700 md:w-auto">
          <div
            className="h-2.5 rounded-full bg-lime-600"
            style={{ width: "45%" }}
          />
        </div>
        <span className="text-xs font-medium text-lime-700 dark:text-white md:hidden">
          45%
        </span>
      </div>

      <div className="mt-10 flex flex-col items-center"></div>

      <nav
        aria-label="Page navigation example"
        className="fixed bottom-0 left-0 z-50 mb-3 flex w-screen flex-row justify-center"
      >
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <button
              onClick={() => (curr === 1 ? setCurr(1) : setCurr(curr - 1))}
              className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none active:text-lime-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
          </li>
          {pages.map((pg, i) => (
            <li key={i}>
              <button
                onClick={() => setCurr(pg.page)}
                className={`flex h-8 items-center justify-center px-3 focus:outline-none ${curr === pg.page ? "border border-gray-300 bg-lime-600 text-white dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "border border-gray-300 bg-white leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`}
              >
                {pg.page}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => (curr === 5 ? setCurr(5) : setCurr(curr + 1))}
              className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none active:text-lime-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default IoLSQ;

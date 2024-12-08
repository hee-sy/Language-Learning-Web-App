import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Hiragana, Katakana } from "../Components/LearningObjects/Hiragana";

import { Fulltext } from "../Components/LearningObjects/Fulltext";
import JapanCharIntro from "./JapanCharIntro";
import { Sidebar } from "flowbite-react";
import { LogoSideBar } from "../Components/Logo";
import LessonAP1 from "./LessonAP1";
import LessonAP2 from "./LessonAP2";
import LessonAP3 from "./LessonAP3";
import LessonAP4 from "./LessonAP4";

export const LSContext = createContext();
export const LastLSContext = createContext();

const LessonA = () => {
  const [chart, setChart] = useState(0);
  const [open, setOpen] = useState(false);
  const [lsScore, setLSScore] = useState({
    AR: undefined,
    SI: undefined,
    VV: undefined,
    SG: undefined,
  });
  const [lastLS, setLastLS] = useState({
    AR: undefined,
    SI: undefined,
    VV: undefined,
    SG: undefined,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [curr, setCurr] = useState(1);
  const parts = [
    { part: 1 },
    { part: 2 },
    { part: 3 },
    { part: 4 },
    { part: 5 },
    { part: 6 },
  ];
  const partRef = useRef([]);
  switch (curr) {
    case 1:
      partRef.current = <JapanCharIntro />;
      break;
    case 2:
      partRef.current = <Fulltext />;
      break;
    case 3:
      partRef.current = <LessonAP1 id={id} />;
      break;
    case 4:
      partRef.current = <LessonAP2 id={id} />;
      break;
    case 5:
      partRef.current = <LessonAP3 id={id} />;
      break;
    case 6:
      partRef.current = <LessonAP4 id={id} />;
      break;
    default:
      partRef.current = <JapanCharIntro />;
      break;
  }

  useEffect(() => {
    console.log("LA mount");

    return () => {
      console.log("LA unmount");
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div
        id="mobile-chart"
        className="z-50 flex flex-col items-center xl:hidden"
      >
        <h2 className="fixed top-0 flex flex-row items-center">
          <button
            type="button"
            className="w-fullS flex h-5 items-center justify-between gap-3 rounded-b-xl border border-b-0 border-gray-200 bg-gray-100 p-3 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
            onClick={() => setOpen(true)}
          >
            <span>chart</span>
            <svg
              data-accordion-icon=""
              className="h-3 w-3 shrink-0 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          className={`fixed inset-0 flex items-center justify-center transition-colors ${open ? "visible" : "invisible"}`}
        >
          <div
            onClick={() => setOpen(false)}
            className={`fixed inset-0 -z-10 bg-black/20`}
          />
          <div className="top-14 bg-white">
            {chart ? (
              <Katakana setC={(val) => setChart(val)} />
            ) : (
              <Hiragana setC={(val) => setChart(val)} />
            )}
          </div>
        </div>
      </div>
      <div
        id="desktop-chart"
        className="fixed left-5 top-20 block max-xl:hidden"
      >
        {chart ? (
          <Katakana setC={(val) => setChart(val)} />
        ) : (
          <Hiragana setC={(val) => setChart(val)} />
        )}
      </div>
      <LSContext.Provider value={[lsScore, setLSScore]}>
        <LastLSContext.Provider value={[lastLS, setLastLS]}>
          <div className="relative top-16 mx-3 flex flex-col items-center justify-center divide-y lg:mx-72">
            {partRef.current}
          </div>
        </LastLSContext.Provider>
      </LSContext.Provider>

      {/* Side navi bar */}
      <h2 className="fixed right-0 top-0 flex flex-row items-center xl:hidden">
        <button
          type="button"
          className="w-fullS flex h-5 items-center justify-between gap-3 rounded-bl-xl border border-b-0 border-gray-200 bg-gray-100 p-3 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
          onClick={() => setIsSideOpen(true)}
        >
          <span>menu</span>
          <svg
            data-accordion-icon=""
            className="h-3 w-3 shrink-0 rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        onClick={() => setIsSideOpen(false)}
        className={`${isSideOpen ? "block" : "hidden"} fixed inset-0 z-10 bg-gray-900/40 xl:hidden`}
      />

      <Sidebar
        aria-label="Sidebar with logo branding example"
        className={`${isSideOpen ? "block" : "hidden"} fixed right-0 top-0 z-20 xl:block`}
      >
        <LogoSideBar />
        <br />
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              onClick={() => {
                handleBacktoHome(id, navigate);
              }}
              icon={HomeIcon}
              className="hover:cursor-pointer"
            >
              Back to Home
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Page navi */}
      <nav
        aria-label="Page navigation example"
        className="fixed bottom-0 left-0 z-50 mb-3 flex w-screen flex-row justify-center"
      >
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <button
              onClick={() => {
                curr === 1 ? setCurr(1) : setCurr(curr - 1);
                window.scrollTo(0, 0);
              }}
              className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none active:text-lime-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
          </li>
          {parts.map((pt, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  setCurr(pt.part);
                  window.scrollTo(0, 0);
                }}
                className={`flex h-8 items-center justify-center px-3 focus:outline-none ${curr === pt.part ? "border border-gray-300 bg-lime-600 text-white dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "border border-gray-300 bg-white leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`}
              >
                {pt.part}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                curr === 6 ? setCurr(6) : setCurr(curr + 1);
                window.scrollTo(0, 0);
              }}
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

const handleBacktoHome = (id, navigate) => {
  navigate(`/${id}/home`);
};

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

export default LessonA;

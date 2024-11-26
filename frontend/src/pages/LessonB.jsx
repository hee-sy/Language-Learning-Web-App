import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../Components/Spinner";
import { Hiragana, Katakana } from "../Components/LearningObjects/Hiragana";
import { MnemonicsP1 } from "../Components/LearningObjects/Mnemonics";

export const LSContext = React.createContext();

const LessonB = () => {
  const [chart, setChart] = useState(0);
  const [open, setOpen] = useState(false);
  const [lsScore, setLSScore] = useState({
    AR: undefined,
    SI: undefined,
    VV: undefined,
    SG: undefined,
  });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    //get learning style score
    axios
      .get(`http://localhost:5555/user/get-learning-style/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setLSScore({
            AR: res.data.AR.score,
            SI: res.data.SI.score,
            VV: res.data.VV.score,
            SG: res.data.SG.score,
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div id="mobile-chart" className="flex flex-col items-center lg:hidden">
        <h2 className="fixed top-6 flex flex-row items-center">
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
        className="fixed left-5 top-20 block max-lg:hidden"
      >
        {chart ? (
          <Katakana setC={(val) => setChart(val)} />
        ) : (
          <Hiragana setC={(val) => setChart(val)} />
        )}
      </div>

      <div className="fixed top-0 w-full bg-slate-300 text-center">
        {loading ? (
          <Spinner size="4" />
        ) : (
          <>
            AR: {" " + lsScore.AR}
            <span className="mx-2 border-x-2 border-slate-200/70" />
            SI:
            {" " + lsScore.SI}
            <span className="mx-2 border-x-2 border-slate-200/70" /> VV:
            {" " + lsScore.VV}
            <span className="mx-2 border-x-2 border-slate-200/70" /> SG:
            {" " + lsScore.SG}
          </>
        )}
      </div>

      <div className="flex flex-col items-center justify-center lg:mx-72">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla libero
        temporibus eius similique tempore neque incidunt dicta quibusdam,
        laudantium magni totam dolores. Illum molestiae iusto explicabo
        praesentium eaque, est sint. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nulla libero temporibus eius similique tempore neque
        incidunt dicta quibusdam, laudantium magni totam dolores. Illum
        molestiae iusto explicabo praesentium eaque, est sint. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Nulla libero temporibus eius
        similique tempore neque incidunt dicta quibusdam, laudantium magni totam
        dolores. Illum molestiae iusto explicabo praesentium eaque, est sint.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla libero
        temporibus eius similique tempore neque incidunt dicta quibusdam,
        laudantium magni totam dolores. Illum molestiae iusto explicabo
        praesentium eaque, est sint. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nulla libero temporibus eius similique tempore neque
        incidunt dicta quibusdam, laudantium magni totam dolores. Illum
        molestiae iusto explicabo praesentium eaque, est sint. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Nulla libero temporibus eius
        similique tempore neque incidunt dicta quibusdam, laudantium magni totam
        dolores. Illum molestiae iusto explicabo praesentium eaque, est sint.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla libero
        temporibus eius similique tempore neque incidunt dicta quibusdam,
        laudantium magni totam dolores. Illum molestiae iusto explicabo
        praesentium eaque, est sint. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nulla libero temporibus eius similique tempore neque
        incidunt dicta quibusdam, laudantium magni totam dolores. Illum
        molestiae iusto explicabo praesentium eaque, est sint. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Nulla libero temporibus eius
        similique tempore neque incidunt dicta quibusdam, laudantium magni totam
        dolores. Illum molestiae iusto explicabo praesentium eaque, est sint.
        <MnemonicsP1 />
      </div>
    </div>
  );
};

export default LessonB;

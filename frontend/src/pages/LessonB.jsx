import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../Components/Spinner";
import { Hiragana, Katakana } from "../Components/LearningObjects/Hiragana";
import {
  MnemonicsP1,
  MnemonicsP2,
  MnemonicsP3,
  MnemonicsP4,
} from "../Components/LearningObjects/Mnemonics";
import {
  VideosP1,
  VideosP2,
  VideosP3,
  VideosP4,
} from "../Components/LearningObjects/Videos";
import {
  TransPrac1,
  TransPrac2,
  TransPrac3,
  TransPrac4,
} from "../Components/LearningObjects/TransPrac";
import {
  ReflectPrompt1,
  ReflectPrompt2,
  ReflectPrompt3,
  ReflectPrompt4,
} from "../Components/LearningObjects/ReflectPrompt";
import {
  FillBlanks1,
  FillBlanks2,
  FillBlanks3,
  FillBlanks4,
} from "../Components/LearningObjects/FillBlanks";
import {
  DialPrac1,
  DialPrac2,
  DialPrac3,
  DialPrac4,
} from "../Components/LearningObjects/DialPrac";
import { StorySeq1 } from "../Components/LearningObjects/StorySeq";
import {
  Fulltext,
  FulltextP1,
  FulltextP2,
  FulltextP3,
  FulltextP4,
} from "../Components/LearningObjects/Fulltext";
import EOLSum from "../Components/LearningObjects/EOLSum";

export const LSContext = React.createContext();
export const LastLSContext = React.createContext();

const LessonB = () => {
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
  }, [id]);

  useEffect(() => {
    // when the page unmount,
    console.log("mount");
    return () => {
      //TODO: move this to when LessonBPage*.jsx unmounts, not LessonB.jsx
      //update last learning style score state variable
      console.log("unmount");

      //TODO：update learning style score in DB
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div
        id="mobile-chart"
        className="z-50 flex flex-col items-center xl:hidden"
      >
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
        className="fixed left-5 top-20 block max-xl:hidden"
      >
        {chart ? (
          <Katakana setC={(val) => setChart(val)} />
        ) : (
          <Hiragana setC={(val) => setChart(val)} />
        )}
      </div>

      <div className="fixed top-0 z-50 w-full bg-slate-300 text-center">
        {loading ? (
          <Spinner size="4" />
        ) : (
          <>
            AR: {" " + lsScore.AR}
            <span className="mx-2 border-x-[1px] border-slate-200/70" />
            SI:
            {" " + lsScore.SI}
            <span className="mx-2 border-x-[1px] border-slate-200/70" /> VV:
            {" " + lsScore.VV}
            <span className="mx-2 border-x-[1px] border-slate-200/70" /> SG:
            {" " + lsScore.SG}
          </>
        )}
      </div>

      <LSContext.Provider value={[lsScore, setLSScore]}>
        <LastLSContext.Provider value={[lastLS, setLastLS]}>
          <div className="relative top-16 mx-3 flex flex-col items-center justify-center divide-y lg:mx-72">
            <FulltextP1 />
            <StorySeq1 />
            <EOLSum id={id} part={1} />
            <DialPrac4 />
            <FillBlanks3 />
            <ReflectPrompt4 />
            <MnemonicsP1 />
            <MnemonicsP2 />
            <MnemonicsP3 />
            <MnemonicsP4 />
            <TransPrac4 />
          </div>
        </LastLSContext.Provider>
      </LSContext.Provider>
    </div>
  );
};

export default LessonB;

/*
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla libero
          temporibus eius similique tempore neque incidunt dicta quibusdam,
          laudantium magni totam dolores. Illum molestiae iusto explicabo
          praesentium eaque, est sint. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nulla libero temporibus eius similique tempore neque
          incidunt dicta quibusdam, laudantium magni totam dolores. Illum
          molestiae iusto explicabo praesentium eaque, est sint. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nulla libero temporibus
          eius similique tempore neque incidunt dicta quibusdam, laudantium
          magni totam dolores. Illum molestiae iusto explicabo praesentium
          eaque, est sint. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nulla libero temporibus eius similique tempore neque incidunt
          dicta quibusdam, laudantium magni totam dolores. Illum molestiae iusto
          explicabo praesentium eaque, est sint. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nulla libero temporibus eius similique
          tempore neque incidunt dicta quibusdam, laudantium magni totam
          dolores. Illum molestiae iusto explicabo praesentium eaque, est sint.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla libero
          temporibus eius similique tempore neque incidunt dicta quibusdam,
          laudantium magni totam dolores. Illum molestiae iusto explicabo
          praesentium eaque, est sint. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nulla libero temporibus eius similique tempore neque
          incidunt dicta quibusdam, laudantium magni totam dolores. Illum
          molestiae iusto explicabo praesentium eaque, est sint. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nulla libero temporibus
          eius similique tempore neque incidunt dicta quibusdam, laudantium
          magni totam dolores. Illum molestiae iusto explicabo praesentium
          eaque, est sint. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nulla libero temporibus eius similique tempore neque incidunt
          dicta quibusdam, laudantium magni totam dolores. Illum molestiae iusto
          explicabo praesentium eaque, est sint.
*/

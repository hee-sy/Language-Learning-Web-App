import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const FinalQuizResult = () => {
  let { id, ans } = useParams();
  const navigate = useNavigate();
  ans = ans.split(","); //split the string into an array

  const correctAns = [
    "c",
    "b",
    "b",
    "d",
    "c",
    "a",
    "c",
    "a",
    "b",
    "b",
    "b",
    "d",
    "b",
    "d",
    "c",
    "b",
    "c",
    "a",
    "c",
    "a",
    "a",
    "c",
    "c",
    "a",
    "a",
    "a",
    "a",
    "d",
    "d",
    "b",
  ];

  let score = 0;
  let ans_stats = ans.map((ans, index) => {
    if (ans == correctAns[index]) {
      score++;
      return true;
    } else {
      return false;
    }
  });

  const handleContinue = (id, score, ans_stats) => {
    axios
      .post(
        `https://chamelearn-a-japanese-language-learning.onrender.com/user/update-final-quiz-result`,
        {
          id: id,
          score: score,
          ans_stats: ans_stats,
        },
      )
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          console.log("Quiz result updated successfully");
          console.log(result);
          navigate(`/${id}/home`, { replace: true }); // to not allow user to go back to the quiz result page
        } else {
          alert("Error updating quiz result", "error");
        }
      })
      .catch((err) => alert(err.response.data.message, "error"));
  };

  return (
    <div>
      <div
        id="quiz_result"
        className="mx-5 mt-20 flex flex-col items-center justify-center md:mx-20"
      >
        <h1 className="mb-5 text-2xl font-extrabold md:mb-16 md:text-center md:text-5xl">
          Your score is <br />
          <span>
            <span className="text-lime-700">{score}</span>/30
          </span>
          ! {score > 20 ? "😀" : score > 10 ? "😁" : "😊"}
        </h1>
        <div className="flex flex-col text-sm md:w-[60%] md:justify-self-center md:text-lg">
          <p>
            Thank you for taking the time to complete the quiz. Your score will
            help us to better understand the performance of my adaptive learning
            system.
          </p>
          <br />
          <button
            type="button"
            onClick={() => handleContinue(id, score, ans_stats)}
            className="my-5 inline-flex items-center self-end rounded-lg bg-lime-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 md:my-10"
          >
            Save and Return to Home
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalQuizResult;

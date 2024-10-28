import { useEffect, useState, useRef } from "react";
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

  const questionsRef = useRef([]);
  const questions1 = [
    {
      num: 1,
      question: "I understand something better after I",
      a: "try it out.",
      b: "think it through.",
    },
    {
      num: 2,
      question: "I would rather be considered",
      a: "realistic.",
      b: "innovative.",
    },
    {
      num: 3,
      question:
        "When I think about what I did yesterday, I am most likely to get",
      a: "a picture.",
      b: "words.",
    },
    {
      num: 4,
      question: "I tend to",
      a: "understand details of a subject but may be fuzzy about its overall structure.",
      b: "understand the overall structure but may be fuzzy about details",
    },
    {
      num: 5,
      question: "When I am learning something new, it helps me to",
      a: "talk about it.",
      b: "think about it.",
    },
    {
      num: 6,
      question: "If I were a teacher, I would rather teach a course",
      a: "that deals with facts and real life situations.",
      b: "that deals with ideas and theories.",
    },
    {
      num: 7,
      question: "I prefer to get new information in",
      a: "pictures, diagrams, graphs, or maps.",
      b: "written directions or verbal information.",
    },
    {
      num: 8,
      question: "Once I understand",
      a: "all the parts, I understand the whole thing.",
      b: "the whole thing, I see how the parts fit.",
    },
    {
      num: 9,
      question:
        "In a study group working on difficult material, I am more likely to",
      a: "jump in and contribute ideas.",
      b: "sit back and listen.",
    },
    {
      num: 10,
      question: "I find it easier",
      a: "to learn facts.",
      b: "to learn concepts.",
    },
    {
      num: 11,
      question: "In a book with lots of pictures and charts, I am likely to",
      a: "look over the pictures and charts carefully.",
      b: "focus on the written text.",
    },
  ];
  const questions2 = [
    {
      num: 12,
      question: "When I solve math problems",
      a: "I usually work my way to the solutions one step at a time.",
      b: " I often just see the solutions but then have to struggle to figure out the steps to get to them.",
    },
    {
      num: 13,
      question: "In classes I have taken",
      a: "I have usually gotten to know many of the students.",
      b: "I have rarely gotten to know many of the students.",
    },
    {
      num: 14,
      question: "In reading nonfiction, I prefer",
      a: "something that teaches me new facts or tells me how to do something.",
      b: "something that gives me new ideas to think about.",
    },
    {
      num: 15,
      question: "I like teachers",
      a: "who put a lot of diagrams on the board.",
      b: "who spend a lot of time explaining.",
    },
    {
      num: 16,
      question: "When I'm analyzing a story or a novel",
      a: "I think of the incidents and try to put them together to figure out the themes.",
      b: "I just know what the themes are when I finish reading and then I have to go back and find the incidents that demonstrate them.",
    },
    {
      num: 17,
      question: "When I start a homework problem, I am more likely to",
      a: "start working on the solution immediately.",
      b: "try to fully understand the problem first.",
    },
    {
      num: 18,
      question: "I prefer the idea of",
      a: "certainty.",
      b: "theory.",
    },
    {
      num: 19,
      question: "I remember best",
      a: "what I see.",
      b: "what I hear.",
    },
    {
      num: 20,
      question: "It is more important to me that an instructor",
      a: "lay out the material in clear sequential steps.",
      b: "give me an overall picture and relate the material to other subjects.",
    },
    {
      num: 21,
      question: "I prefer to study",
      a: "in a study group.",
      b: "alone.",
    },
    {
      num: 22,
      question: "I am more likely to be considered",
      a: "careful about the details of my work.",
      b: "creative about how to do my work.",
    },
  ];
  const questions3 = [
    {
      num: 23,
      question: "When I get directions to a new place, I prefer",
      a: "a map.",
      b: "written instructions.",
    },
    {
      num: 24,
      question: "I learn",
      a: 'at a fairly regular pace. If I study hard, I\'ll "get it."',
      b: 'in fits and starts. I\'ll be totally confused and then suddenly it all "clicks."',
    },
    {
      num: 25,
      question: "I would rather first",
      a: "try things out.",
      b: "think about how I'm going to do it.",
    },
    {
      num: 26,
      question: "When I am reading for enjoyment, I like writers to",
      a: "clearly say what they mean.",
      b: "say things in creative, interesting ways.",
    },
    {
      num: 27,
      question:
        "When I see a diagram or sketch in class, I am most likely to remember",
      a: "the picture.",
      b: "what the instructor said about it.",
    },
    {
      num: 28,
      question: "When considering a body of information, I am more likely to",
      a: "focus on details and miss the big picture.",
      b: "try to understand the big picture before getting into the details.",
    },
    {
      num: 29,
      question: "I more easily remember",
      a: "something I have done.",
      b: "something I have thought a lot about.",
    },
    {
      num: 30,
      question: "When I have to perform a task, I prefer to",
      a: "master one way of doing it.",
      b: "come up with new ways of doing it.",
    },
    {
      num: 31,
      question: "When someone is showing me data, I prefer",
      a: "charts or graphs.",
      b: "text summarizing the results.",
    },
    {
      num: 32,
      question: "When writing a paper, I am more likely to",
      a: "work on (think about or write) the beginning of the paper and progress forward.",
      b: "work on (think about or write) different parts of the paper and then order them.",
    },
    {
      num: 33,
      question: "When I have to work on a group project, I first want to",
      a: 'have "group brainstorming" where everyone contributes ideas.',
      b: "brainstorm individually and then come together as a group to compare ideas.",
    },
  ];
  const questions4 = [
    {
      num: 34,
      question: "I consider it higher praise to call someone",
      a: "sensible.",
      b: "imaginative.",
    },
    {
      num: 35,
      question: "When I meet people at a party, I am more likely to remember",
      a: "what they looked like.",
      b: "what they said about themselves.",
    },
    {
      num: 36,
      question: "When I am learning a new subject, I prefer to",
      a: "stay focused on that subject, learning as much about it as I can.",
      b: " try to make connections between that subject and related subjects.",
    },
    {
      num: 37,
      question: "I am more likely to be considered",
      a: "outgoing.",
      b: "reserved.",
    },
    {
      num: 38,
      question: "I prefer courses that emphasize",
      a: "concrete material (facts, data).",
      b: "abstract material (concepts, theories).",
    },
    {
      num: 39,
      question: "For entertainment, I would rather",
      a: "watch television.",
      b: "read a book.",
    },
    {
      num: 40,
      question:
        "Some teachers start their lectures with an outline of what they will cover. Such outlines are",
      a: "somewhat helpful to me.",
      b: "very helpful to me.",
    },
    {
      num: 41,
      question:
        "The idea of doing homework in groups, with one grade for the entire group,",
      a: "appeals to me.",
      b: "does not appeal to me.",
    },
    {
      num: 42,
      question: "When I am doing long calculations,",
      a: "I tend to repeat all my steps and check my work carefully.",
      b: "I find checking my work tiresome and have to force myself to do it.",
    },
    {
      num: 43,
      question: "I tend to picture places I have been",
      a: "easily and fairly accurately.",
      b: "with difficulty and without much detail.",
    },
    {
      num: 44,
      question: "When solving problems in a group, I would be more likely to",
      a: "think of the steps in the solution process.",
      b: "think of possible consequences or applications of the solution in a wide range of areas.",
    },
  ];

  const [ans, setAns] = useState(() => {
    const arr = [];
    for (let i = 0; i < 44; i++) {
      arr[i] = "";
    }
    return arr;
  }); //initialize ans[] with 44 empty strings

  //catch the back button and if pressed, clear the stack
  useEffect(() => {
    window.onpopstate = () => {
      navigate(`/${id}/iolsq`, { replace: true });
    };
  }, [navigate]);

  //function to iterate over questions on current page and set the checked state based on ans[]
  const checkOptions = () => {
    questionsRef.current.forEach((ques) => {
      const a = document.getElementById(`option-a-${ques.num.toString()}`);
      const b = document.getElementById(`option-b-${ques.num.toString()}`);
      if (ans[ques.num - 1] === "a") {
        a.checked = true;
      } else if (ans[ques.num - 1] === "b") {
        b.checked = true;
      }
    });
  };
  //calls checkOptions() when curr changes
  useEffect(() => {
    checkOptions();
  }, [curr]);

  //switch statement to point questionsRef.current to questions1[] when curr==1, to questions2[] when curr==2, ...
  switch (curr) {
    case 1:
      questionsRef.current = [];
      break;
    case 2:
      questionsRef.current = questions1;
      break;
    case 3:
      questionsRef.current = questions2;
      break;
    case 4:
      questionsRef.current = questions3;
      break;
    case 5:
      questionsRef.current = questions4;
      break;
    default:
      questionsRef.current = [];
  }

  return (
    <div className="flex flex-col items-center">
      <div
        id="progress-bar"
        className="h-18 fixed top-0 z-50 w-screen bg-white px-2 pt-5 md:h-16 md:max-w-[70%] md:px-10"
      >
        <div className="mb-1 flex justify-between">
          <span className="text-xs font-medium text-lime-700 dark:text-white">
            Index of Learning Styles Questionnaire
          </span>
          <span className="hidden text-xs font-medium text-lime-700 dark:text-white md:block">
            {curr * 20}%
          </span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700 md:w-auto">
          <div
            className="h-2.5 rounded-full bg-lime-600"
            style={{ width: `${curr * 20}%` }}
          />
        </div>
        <span className="text-xs font-medium text-lime-700 dark:text-white md:hidden">
          {curr * 20}%
        </span>
      </div>

      <div id="questions" className="mx-5 mt-20">
        {questionsRef.current.map((ques) => (
          <div
            id={`question${ques.num.toString()}`}
            key={ques.num.toString()}
            className="my-8"
          >
            <p className="flex flex-row items-start">
              <span className="me-2 text-sm font-semibold text-gray-900 dark:text-white">
                {ques.num}
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {ques.question}
              </span>
            </p>
            <div className="mt-2 flex justify-center">
              <ul className="w-full rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white md:max-w-[70%]">
                <li className="w-full rounded-t-lg border-b border-gray-200 hover:bg-gray-100 has-[:checked]:bg-lime-100 dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id={`option-a-${ques.num.toString()}`}
                      type="radio"
                      required
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-lime-600 focus:outline-none focus:ring-0 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      name={`option-${ques.num.toString()}`}
                      value="a"
                      onClick={(e) => {
                        //store the selected option in ans[]
                        const index = ques.num - 1;
                        const newArr = [...ans];
                        newArr[index] = e.target.value;
                        setAns(newArr);
                      }}
                    />
                    <label
                      htmlFor={`option-a-${ques.num.toString()}`}
                      className="checked: ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {ques.a}
                    </label>
                  </div>
                </li>
                <li className="w-full rounded-t-lg border-b border-gray-200 hover:bg-gray-100 has-[:checked]:bg-lime-100 dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id={`option-b-${ques.num.toString()}`}
                      type="radio"
                      required
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-lime-600 focus:outline-none focus:ring-0 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      name={`option-${ques.num.toString()}`}
                      value="b"
                      onClick={(e) => {
                        //store the selected option in ans[]
                        const index = ques.num - 1;
                        const newArr = [...ans];
                        newArr[index] = e.target.value;
                        setAns(newArr);
                      }}
                    />
                    <label
                      htmlFor={`option-b-${ques.num.toString()}`}
                      className="checked: ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {ques.b}
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
        {curr === 5 && (
          <button
            onClick={() => {
              //check if all questions are answered
              if (ans.includes("")) {
                alert("Please answer all questions.");
                return;
              }
              navigate(`/${id}/iolsq/results/${ans}`, {
                replace: true,
              });
            }}
            className="rounded-lg bg-lime-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
          >
            Submit
          </button>
        )}
        <div className="h-20" />
      </div>

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
          {pages.map((pg, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  setCurr(pg.page);
                  window.scrollTo(0, 0);
                }}
                className={`flex h-8 items-center justify-center px-3 focus:outline-none ${curr === pg.page ? "border border-gray-300 bg-lime-600 text-white dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "border border-gray-300 bg-white leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`}
              >
                {pg.page}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                curr === 5 ? setCurr(5) : setCurr(curr + 1);
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

export default IoLSQ;

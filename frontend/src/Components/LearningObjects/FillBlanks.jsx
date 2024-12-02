import { useState, useContext, useLayoutEffect, useEffect } from "react";
import { LastLSContext, LSContext } from "../../pages/LessonB";

const AnsGroup = ({ isAnsed, setIsAnsed, ans, options, translations }) => {
  return (
    <div className="mx-2 my-4 flex flex-col items-start justify-center xl:grid xl:grid-cols-2">
      <button
        type="button"
        onClick={() => setIsAnsed(true)}
        className="my-2 me-2 h-min rounded-lg border border-gray-200 bg-white px-5 py-2 text-left align-middle text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        A) {options[0]}
        {isAnsed ? (
          <>
            <span className="text-lime-600"> - {translations[0]}</span>
            {ans == 1 ? (
              <div className="mx-2 my-1 inline-block rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                Correct Answer
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </button>
      <button
        type="button"
        onClick={() => setIsAnsed(true)}
        className="my-2 me-2 h-min rounded-lg border border-gray-200 bg-white px-5 py-2 text-left align-middle text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        B) {options[1]}
        {isAnsed ? (
          <>
            <span className="text-lime-600"> - {translations[1]}</span>
            {ans == 2 ? (
              <div className="mx-2 my-1 inline-block rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                Correct Answer
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </button>
      <button
        type="button"
        onClick={() => setIsAnsed(true)}
        className="my-2 me-2 h-min rounded-lg border border-gray-200 bg-white px-5 py-2 text-left align-middle text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        C) {options[2]}
        {isAnsed ? (
          <>
            <span className="text-lime-600"> - {translations[2]}</span>
            {ans == 3 ? (
              <div className="mx-2 my-1 inline-block rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                Correct Answer
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </button>
      <button
        type="button"
        onClick={() => setIsAnsed(true)}
        className="my-2 me-2 h-min rounded-lg border border-gray-200 bg-white px-5 py-2 text-left align-middle text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        D) {options[3]}
        {isAnsed ? (
          <>
            <span className="text-lime-600"> - {translations[3]}</span>
            {ans == 4 ? (
              <div className="mx-2 my-1 inline-block rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                Correct Answer
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

const FillBlanks1 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);
  const [lastLS] = useContext(LastLSContext);
  const [isAnsed1, setIsAnsed1] = useState(false);
  const [isSubmitted1, setIsSubmitted1] = useState(false);
  const [isAnsed2, setIsAnsed2] = useState(false);
  const [isSubmitted2, setIsSubmitted2] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const incrementAct = () => {
    if (lsScore.AR !== undefined) {
      {
        if (lsScore.AR > -11) {
          setLSScore({ ...lsScore, AR: lsScore.AR - 1 });
        }
      }
    }
  };

  useEffect(() => {
    setIsActive(lastLS.AR < 0); //if AR is negative, isActive is true
  }, [lastLS.AR]);

  return (
    <>
      <div
        onClick={() => incrementAct()}
        className="my-3 w-fit justify-self-center rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Fill in the blank(s):
          </h3>
        </div>
        <div className="flex flex-col px-3 py-2">
          <p className="text-wrap text-gray-900">
            今日{"  "}は
            {!isActive ? (
              `_________`
            ) : (
              <input
                id="fill1"
                type="text"
                className="mx-1 inline-block w-20 rounded-md border border-gray-300 bg-gray-50 p-2 text-center text-xs text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
              />
            )}
            なので、あまり 時間が ありません。
          </p>
          <p className="text-wrap italic">
            (Kyō wa _________nanode, amari jikan ga arimasen.)
          </p>
          <p>Today is a _________, so I don’t have much time.</p>
          {!isActive ? (
            ""
          ) : (
            <div className="flex flex-row">
              <button
                type="button"
                onClick={() => {
                  // check if input is empty
                  if (document.getElementById("fill1").value === "") {
                    alert("Please write your answer first.");
                  } else {
                    setIsSubmitted1(true);
                  }
                  return;
                }}
                className="my-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
              >
                Submit
              </button>
              {isSubmitted1 ? (
                <div className="mx-2 my-1 inline-block content-center rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  Correct Answer: 平日 (heijitsu) - weekday
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        {!isActive ? (
          <AnsGroup
            isAnsed={isAnsed1}
            setIsAnsed={setIsAnsed1}
            ans={4}
            options={[
              "週末 (Shūmatsu)",
              "休日 (Kyūjitsu)",
              "今度 (Kondo)",
              "平日 (heijitsu)",
            ]}
            translations={["weekend", "holiday", "this time", "weekday"]}
          />
        ) : (
          ""
        )}
      </div>
      <div
        onClick={() => incrementAct()}
        className="my-3 w-fit justify-self-center rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Fill in the blank(s):
          </h3>
        </div>
        <div className="flex flex-col px-3 py-2">
          <p className="text-wrap text-gray-900">
            彼はいつも
            {!isActive ? (
              `_________`
            ) : (
              <input
                id="fill2"
                type="text"
                className="mx-1 inline-block w-20 rounded-md border border-gray-300 bg-gray-50 p-2 text-center text-xs text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
              />
            )}
            けど、仕事が終わった後は遊びに行きます。
          </p>
          <p className="text-wrap italic">
            (Kare wa itsumo _________ kedo, shigoto ga owatta nochi wa asobi ni
            ikimasu.)
          </p>
          <p>He’s always _________, but he goes out after work.</p>
          {!isActive ? (
            ""
          ) : (
            <div className="flex flex-row">
              <button
                type="button"
                onClick={() => {
                  // check if input is empty
                  if (document.getElementById("fill2").value === "") {
                    alert("Please write your answer first.");
                  } else {
                    setIsSubmitted2(true);
                  }
                  return;
                }}
                className="my-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
              >
                Submit
              </button>
              {isSubmitted2 ? (
                <div className="mx-2 my-1 inline-block content-center rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  Correct Answer: 忙しい (isogashii) - busy
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        {!isActive ? (
          <AnsGroup
            isAnsed={isAnsed2}
            setIsAnsed={setIsAnsed2}
            ans={2}
            options={[
              "幸せだ (shiawaseda)",
              "忙しい (isogashii)",
              "聞いている (kiite iru)",
              "好きです (suki desu)",
            ]}
            translations={["happy", "busy", "listening", "like it"]}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
const FillBlanks2 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);
  const [lastLS] = useContext(LastLSContext);
  const [isAnsed1, setIsAnsed1] = useState(false);
  const [isSubmitted1, setIsSubmitted1] = useState(false);
  const [isAnsed2, setIsAnsed2] = useState(false);
  const [isSubmitted2, setIsSubmitted2] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const incrementAct = () => {
    if (lsScore.AR !== undefined) {
      {
        if (lsScore.AR > -11) {
          setLSScore({ ...lsScore, AR: lsScore.AR - 1 });
        }
      }
    }
  };

  useEffect(() => {
    setIsActive(lastLS.AR < 0); //if AR is negative, isActive is true
  }, [lastLS.AR]);

  return (
    <>
      <div
        onClick={() => incrementAct()}
        className="my-3 w-fit justify-self-center rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Fill in the blank(s):
          </h3>
        </div>
        <div className="flex flex-col px-3 py-2">
          <p className="text-wrap text-gray-900">
            私は
            {!isActive ? (
              `_________`
            ) : (
              <input
                id="fill1"
                type="text"
                className="mx-1 inline-block w-20 rounded-md border border-gray-300 bg-gray-50 p-2 text-center text-xs text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
              />
            )}
            が好きで、週末によく小説を読みます。
          </p>
          <p className="text-wrap italic">
            (Watashi wa ______ ga suki de, shuumatsu ni yoku shousetsu o
            yomimasu.)
          </p>
          <p>I like ______, and I often read novels on weekends.</p>
          {!isActive ? (
            ""
          ) : (
            <div className="flex flex-row">
              <button
                type="button"
                onClick={() => {
                  // check if input is empty
                  if (document.getElementById("fill1").value === "") {
                    alert("Please write your answer first.");
                  } else {
                    setIsSubmitted1(true);
                  }
                  return;
                }}
                className="my-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
              >
                Submit
              </button>
              {isSubmitted1 ? (
                <div className="mx-2 my-1 inline-block content-center rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  Correct Answer: 読書 (dokusho) - reading (books)
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        {!isActive ? (
          <AnsGroup
            isAnsed={isAnsed1}
            setIsAnsed={setIsAnsed1}
            ans={1}
            options={[
              "読書 (dokusho)",
              "面白い (omoshiroi)",
              "実は (Jitsu wa)",
              "平日 (heijitsu)",
            ]}
            translations={[
              "reading (books)",
              "interesting",
              "actually",
              "weekday",
            ]}
          />
        ) : (
          ""
        )}
      </div>
      <div
        onClick={() => incrementAct()}
        className="my-3 w-fit justify-self-center rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Fill in the blank(s):
          </h3>
        </div>
        <div className="flex flex-col px-3 py-2">
          <p className="text-wrap text-gray-900">
            この映画はとても
            {!isActive ? (
              `_________`
            ) : (
              <input
                id="fill2"
                type="text"
                className="mx-1 inline-block w-20 rounded-md border border-gray-300 bg-gray-50 p-2 text-center text-xs text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
              />
            )}
            です。ぜひ見てください！
          </p>
          <p className="text-wrap italic">
            (Kono eiga wa totemo ______ desu. Zehi mite kudasai!)
          </p>
          <p>This movie is very ______. Please watch it!</p>
          {!isActive ? (
            ""
          ) : (
            <div className="flex flex-row">
              <button
                type="button"
                onClick={() => {
                  // check if input is empty
                  if (document.getElementById("fill2").value === "") {
                    alert("Please write your answer first.");
                  } else {
                    setIsSubmitted2(true);
                  }
                  return;
                }}
                className="my-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
              >
                Submit
              </button>
              {isSubmitted2 ? (
                <div className="mx-2 my-1 inline-block content-center rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  Correct Answer: 面白い (omoshiroi) - interesting
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        {!isActive ? (
          <AnsGroup
            isAnsed={isAnsed2}
            setIsAnsed={setIsAnsed2}
            ans={3}
            options={[
              "ミステリー (Misuterii)",
              "がいちばん (Ga ichiban)",
              "面白い (omoshiroi)",
              "好きじゃないです (Suki ja nai desu)",
            ]}
            translations={[
              "Mystery (genre)",
              "The most ~",
              "interesting",
              "Don’t like",
            ]}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const FillBlanks3 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);
  const [lastLS] = useContext(LastLSContext);
  const [isAnsed1, setIsAnsed1] = useState(false);
  const [isSubmitted1, setIsSubmitted1] = useState(false);
  const [isAnsed2, setIsAnsed2] = useState(false);
  const [isSubmitted2, setIsSubmitted2] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const incrementAct = () => {
    if (lsScore.AR !== undefined) {
      {
        if (lsScore.AR > -11) {
          setLSScore({ ...lsScore, AR: lsScore.AR - 1 });
        }
      }
    }
  };

  useEffect(() => {
    setIsActive(lastLS.AR < 0); //if AR is negative, isActive is true
  }, [lastLS.AR]);

  return (
    <div>
      <div
        onClick={() => incrementAct()}
        className="my-3 w-fit justify-self-center rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Fill in the blank(s):
          </h3>
        </div>
        <div className="flex flex-col px-3 py-2">
          <p className="text-wrap text-gray-900">
            明日、天気がいい
            {!isActive ? (
              `_________`
            ) : (
              <input
                id="fill1"
                type="text"
                className="mx-1 inline-block w-20 rounded-md border border-gray-300 bg-gray-50 p-2 text-center text-xs text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
              />
            )}
            分かりません。
          </p>
          <p className="text-wrap italic">
            (Ashita, tenki ga ī ____ wakarimasen.)
          </p>
          <p>I don’t know ____ the weather will be good tomorrow.</p>
          {!isActive ? (
            ""
          ) : (
            <div className="flex flex-row">
              <button
                type="button"
                onClick={() => {
                  // check if input is empty
                  if (document.getElementById("fill1").value === "") {
                    alert("Please write your answer first.");
                  } else {
                    setIsSubmitted1(true);
                  }
                  return;
                }}
                className="my-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
              >
                Submit
              </button>
              {isSubmitted1 ? (
                <div className="mx-2 my-1 inline-block content-center rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  Correct Answer: かどうか (Ka dou ka) - whether or not
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        {!isActive ? (
          <AnsGroup
            isAnsed={isAnsed1}
            setIsAnsed={setIsAnsed1}
            ans={4}
            options={[
              "週末 (Shūmatsu)",
              "今度 (Kondo)",
              "大好き (Daisuki)",
              "かどうか (Ka dou ka)",
            ]}
            translations={[
              "weekend",
              "next time",
              "very like",
              "whether or not",
            ]}
          />
        ) : (
          ""
        )}
      </div>
      <div
        onClick={() => incrementAct()}
        className="my-3 w-fit justify-self-center rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Fill in the blank(s):
          </h3>
        </div>
        <div className="flex flex-col px-3 py-2">
          <p className="text-wrap text-gray-900">
            この本を読んだら、私に貸して
            {!isActive ? (
              `_________`
            ) : (
              <input
                id="fill2"
                type="text"
                className="mx-1 inline-block w-20 rounded-md border border-gray-300 bg-gray-50 p-2 text-center text-xs text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
              />
            )}
            。
          </p>
          <p className="text-wrap italic">
            (Kono-pon o yondara, watashi ni kashite ____.)
          </p>
          <p>After you read this book, lend it to me ____.</p>
          {!isActive ? (
            ""
          ) : (
            <div className="flex flex-row">
              <button
                type="button"
                onClick={() => {
                  // check if input is empty
                  if (document.getElementById("fill2").value === "") {
                    alert("Please write your answer first.");
                  } else {
                    setIsSubmitted2(true);
                  }
                  return;
                }}
                className="my-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
              >
                Submit
              </button>
              {isSubmitted2 ? (
                <div className="mx-2 my-1 inline-block content-center rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  Correct Answer: ください (Kudasai) - please
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        {!isActive ? (
          <AnsGroup
            isAnsed={isAnsed2}
            setIsAnsed={setIsAnsed2}
            ans={4}
            options={[
              "弾く (Hiku)",
              "大好き (Daisuki)",
              "かどうか (Ka dou ka)",
              "ください (Kudasai)",
            ]}
            translations={[
              "to play",
              "very like it",
              "whether or not",
              "please",
            ]}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const FillBlanks4 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);
  const [lastLS] = useContext(LastLSContext);
  const [isAnsed1, setIsAnsed1] = useState(false);
  const [isSubmitted1, setIsSubmitted1] = useState(false);
  const [isAnsed2, setIsAnsed2] = useState(false);
  const [isSubmitted2, setIsSubmitted2] = useState(false);
  const [isAnsed3, setIsAnsed3] = useState(false);
  const [isSubmitted3, setIsSubmitted3] = useState(false);
  const [isAnsed4, setIsAnsed4] = useState(false);
  const [isSubmitted4, setIsSubmitted4] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const incrementAct = () => {
    if (lsScore.AR !== undefined) {
      {
        if (lsScore.AR > -11) {
          setLSScore({ ...lsScore, AR: lsScore.AR - 1 });
        }
      }
    }
  };

  useEffect(() => {
    setIsActive(lastLS.AR < 0); //if AR is negative, isActive is true
  }, [lastLS.AR]);

  return (
    <>
      <div
        onClick={() => incrementAct()}
        className="my-3 w-fit justify-self-center rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Fill in the blank(s):
          </h3>
        </div>
        <div className="flex flex-col px-3 py-2">
          <p className="text-wrap text-gray-900">
            今日は
            {!isActive ? (
              `_________`
            ) : (
              <input
                id="fill1"
                type="text"
                className="mx-1 inline-block w-20 rounded-md border border-gray-300 bg-gray-50 p-2 text-center text-xs text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
              />
            )}
            がとてもいいですね。
          </p>
          <p className="text-wrap italic">
            (Kyou wa _____ ga totemo ii desu ne.)
          </p>
          <p>Today, the weather is very nice.</p>
          {!isActive ? (
            ""
          ) : (
            <div className="flex flex-row">
              <button
                type="button"
                onClick={() => {
                  // check if input is empty
                  if (document.getElementById("fill1").value === "") {
                    alert("Please write your answer first.");
                  } else {
                    setIsSubmitted1(true);
                  }
                  return;
                }}
                className="my-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
              >
                Submit
              </button>
              {isSubmitted1 ? (
                <div className="mx-2 my-1 inline-block content-center rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  Correct Answer: 天気 (tenki) - weather
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        {!isActive ? (
          <AnsGroup
            isAnsed={isAnsed1}
            setIsAnsed={setIsAnsed1}
            ans={3}
            options={[
              "週末 (Shūmatsu)",
              "仕事  (shigoto)",
              "天気 (tenki)",
              "映画 (eiga)",
            ]}
            translations={["weekend", "working", "weather", "movie"]}
          />
        ) : (
          ""
        )}
      </div>
      <div
        onClick={() => incrementAct()}
        className="my-3 w-fit justify-self-center rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Fill in the blank(s):
          </h3>
        </div>
        <div className="flex flex-col px-3 py-2">
          <p className="text-wrap text-gray-900">
            {!isActive ? (
              `_________`
            ) : (
              <input
                id="fill2"
                type="text"
                className="mx-1 inline-block w-20 rounded-md border border-gray-300 bg-gray-50 p-2 text-center text-xs text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
              />
            )}
            には桜がきれいに咲きます。
          </p>
          <p className="text-wrap italic">
            (__ni wa sakura ga kirei ni sakimasu.)
          </p>
          <p>In spring, cherry blossoms bloom beautifully.</p>
          {!isActive ? (
            ""
          ) : (
            <div className="flex flex-row">
              <button
                type="button"
                onClick={() => {
                  // check if input is empty
                  if (document.getElementById("fill2").value === "") {
                    alert("Please write your answer first.");
                  } else {
                    setIsSubmitted2(true);
                  }
                  return;
                }}
                className="my-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
              >
                Submit
              </button>
              {isSubmitted2 ? (
                <div className="mx-2 my-1 inline-block content-center rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  Correct Answer: 春 (haru) - spring
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        {!isActive ? (
          <AnsGroup
            isAnsed={isAnsed2}
            setIsAnsed={setIsAnsed2}
            ans={1}
            options={[
              "春 (haru)",
              "休日 (Kyūjitsu)",
              "今度 (Kondo)",
              "平日 (heijitsu)",
            ]}
            translations={["spring", "holiday", "this time", "weekday"]}
          />
        ) : (
          ""
        )}
      </div>
      <div
        onClick={() => incrementAct()}
        className="my-3 w-fit justify-self-center rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Fill in the blank(s):
          </h3>
        </div>
        <div className="flex flex-col px-3 py-2">
          <p className="text-wrap text-gray-900">
            {!isActive ? (
              `_________`
            ) : (
              <input
                id="fill3"
                type="text"
                className="mx-1 inline-block w-20 rounded-md border border-gray-300 bg-gray-50 p-2 text-center text-xs text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
              />
            )}
            最近どうしていますか？
          </p>
          <p className="text-wrap italic">(___ saikin dou shiteimasu ka?)</p>
          <p>By the way, how have you been recently?</p>
          {!isActive ? (
            ""
          ) : (
            <div className="flex flex-row">
              <button
                type="button"
                onClick={() => {
                  // check if input is empty
                  if (document.getElementById("fill3").value === "") {
                    alert("Please write your answer first.");
                  } else {
                    setIsSubmitted3(true);
                  }
                  return;
                }}
                className="my-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
              >
                Submit
              </button>
              {isSubmitted3 ? (
                <div className="mx-2 my-1 inline-block content-center rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  Correct Answer: ところで, (tokoro de,) - By the way,
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        {!isActive ? (
          <AnsGroup
            isAnsed={isAnsed3}
            setIsAnsed={setIsAnsed3}
            ans={1}
            options={[
              "ところで, (tokoro de,)",
              "今 (Ima)",
              "春 (Haru)",
              "明日は (Ashita wa)",
            ]}
            translations={["By the way,", "Now", "Spring", "tomorrow"]}
          />
        ) : (
          ""
        )}
      </div>
      <div
        onClick={() => incrementAct()}
        className="my-3 w-fit justify-self-center rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Fill in the blank(s):
          </h3>
        </div>
        <div className="flex flex-col px-3 py-2">
          <p className="text-wrap text-gray-900">
            この映画は面白い
            {!isActive ? (
              `_________`
            ) : (
              <input
                id="fill4"
                type="text"
                className="mx-1 inline-block w-20 rounded-md border border-gray-300 bg-gray-50 p-2 text-center text-xs text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
              />
            )}
            ?
          </p>
          <p className="text-wrap italic">(Kono eiga wa omoshiroi _____?)</p>
          <p>This movie is interesting, isn’t it?</p>
          {!isActive ? (
            ""
          ) : (
            <div className="flex flex-row">
              <button
                type="button"
                onClick={() => {
                  // check if input is empty
                  if (document.getElementById("fill4").value === "") {
                    alert("Please write your answer first.");
                  } else {
                    setIsSubmitted4(true);
                  }
                  return;
                }}
                className="my-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
              >
                Submit
              </button>
              {isSubmitted4 ? (
                <div className="mx-2 my-1 inline-block content-center rounded-sm border border-gray-200 bg-lime-100 px-3 py-1.5 text-xs font-medium text-lime-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  Correct Answer: ですね (desu ne) - isn‘t it?
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        {!isActive ? (
          <AnsGroup
            isAnsed={isAnsed4}
            setIsAnsed={setIsAnsed4}
            ans={1}
            options={[
              "ですね (desu ne)",
              "です (desu)",
              "いいです (ii desu)",
              "いいですね (ii desu ne)",
            ]}
            translations={["isn't it?", "is", "is Good", "That's good."]}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export { FillBlanks1, FillBlanks2, FillBlanks3, FillBlanks4 };

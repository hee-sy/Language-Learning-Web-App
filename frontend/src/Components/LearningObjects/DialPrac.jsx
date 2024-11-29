import React, { useState, useContext } from "react";
import { LSContext } from "../../pages/LessonB";

const AnsGroup = ({ isAnsed, setIsAnsed, ans, options, translations }) => {
  return (
    <div className="mx-2 my-4 flex flex-col items-start justify-center xl:grid xl:grid-cols-2">
      <button
        type="button"
        onClick={() => setIsAnsed(true)}
        className="my-1 me-2 h-min rounded-lg border border-gray-200 bg-white px-5 py-2 text-left align-middle text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
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
        className="my-1 me-2 h-min rounded-lg border border-gray-200 bg-white px-5 py-2 text-left align-middle text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
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
    </div>
  );
};

const ConAns = ({
  person1,
  jap1,
  rom1,
  trans1,
  person2,
  hint,
  isAnsed,
  setIsAnsed,
  ans,
  opt,
  transAns,
}) => {
  return (
    <div>
      <h2 className="pt-5 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Complete the following conversation:
      </h2>
      <div className="mt-3 flex items-start gap-2.5">
        <svg
          className="h-10 w-10 text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div className="leading-1.5 flex w-full max-w-[320px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700 xl:max-w-full">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-xs font-semibold text-gray-900 dark:text-white xl:text-sm">
              {person1}
            </span>
          </div>
          <p className="text-wrap py-2.5 text-xs font-normal text-gray-900 dark:text-white xl:text-sm">
            {jap1}
          </p>
          <p className="text-wrap text-xs italic text-gray-500 xl:text-sm">
            ({rom1})
          </p>
          <p className="text-wrap text-xs font-medium text-gray-800 xl:text-sm">
            {trans1}
          </p>
        </div>
      </div>
      <div className="mb-3 mt-3 flex items-start gap-2.5">
        <div className="leading-1.5 flex w-full max-w-[320px] flex-col rounded-s-xl rounded-ee-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700 xl:max-w-full">
          <div className="pace-x-2 flex items-center justify-end rtl:space-x-reverse">
            <span className="text-xs font-semibold text-gray-900 dark:text-white xl:text-sm">
              {person2}
            </span>
          </div>
          <p className="border-b-[1px] border-gray-900 py-1.5 text-xs font-normal text-gray-900 dark:text-white xl:text-sm"></p>
        </div>
        <svg
          className="h-10 w-10 text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      </div>
      <p className="mb-5 text-xs xl:text-sm">{hint}</p>
      <AnsGroup
        isAnsed={isAnsed}
        setIsAnsed={setIsAnsed}
        ans={ans}
        options={opt}
        translations={transAns}
      />
    </div>
  );
};
const AnsCon = ({
  person2,
  jap2,
  rom2,
  trans2,
  person1,
  hint,
  isAnsed,
  setIsAnsed,
  ans,
  opt,
  transAns,
}) => {
  return (
    <div>
      <h2 className="pt-5 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Complete the following conversation:
      </h2>
      <div className="mt-3 flex items-start gap-2.5">
        <svg
          className="h-10 w-10 text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div className="leading-1.5 flex w-full max-w-[320px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700 xl:max-w-full">
          <div className="pace-x-2 flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-xs font-semibold text-gray-900 dark:text-white xl:text-sm">
              {person1}
            </span>
          </div>
          <p className="border-b-[1px] border-gray-900 py-1.5 text-xs font-normal text-gray-900 dark:text-white xl:text-sm"></p>
        </div>
      </div>
      <div className="mb-3 mt-3 flex items-start gap-2.5">
        <div className="leading-1.5 flex w-full max-w-[320px] flex-col rounded-s-xl rounded-ee-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700 xl:max-w-full">
          <div className="flex items-center justify-end rtl:space-x-reverse">
            <span className="text-xs font-semibold text-gray-900 dark:text-white xl:text-sm">
              {person2}
            </span>
          </div>

          <div className="leading-1.5 flex w-full max-w-[320px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700 xl:max-w-full">
            <p className="text-wrap py-2.5 text-xs font-normal text-gray-900 dark:text-white xl:text-sm">
              {jap2}
            </p>
            <p className="text-wrap text-xs italic text-gray-500 xl:text-sm">
              ({rom2})
            </p>
            <p className="text-wrap text-xs font-medium text-gray-800 xl:text-sm">
              {trans2}
            </p>
          </div>
        </div>
        <svg
          className="h-10 w-10 text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      </div>
      <p className="mb-5 text-xs xl:text-sm">{hint}</p>
      <AnsGroup
        isAnsed={isAnsed}
        setIsAnsed={setIsAnsed}
        ans={ans}
        options={opt}
        translations={transAns}
      />
    </div>
  );
};
const ConAnsCon = ({
  person1,
  jap1,
  rom1,
  trans1,
  person2,
  jap2,
  rom2,
  trans2,
  hint,
  isAnsed,
  setIsAnsed,
  ans,
  opt,
  transAns,
}) => {
  return (
    <div>
      <h2 className="pt-5 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Complete the following conversation:
      </h2>
      <div className="mt-3 flex items-start gap-2.5">
        <svg
          className="h-10 w-10 text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div className="leading-1.5 flex w-full max-w-[320px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700 xl:max-w-full">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-xs font-semibold text-gray-900 dark:text-white xl:text-sm">
              {person1}
            </span>
          </div>
          <p className="text-wrap py-2.5 text-xs font-normal text-gray-900 dark:text-white xl:text-sm">
            {jap1}
          </p>
          <p className="text-wrap text-xs italic text-gray-500 xl:text-sm">
            ({rom1})
          </p>
          <p className="text-wrap text-xs font-medium text-gray-800 xl:text-sm">
            {trans1}
          </p>
          <br />
          <p className="border-b-[1px] border-gray-900 py-1.5 text-right text-xs font-normal text-gray-900 dark:text-white xl:text-sm">
            ?
          </p>
        </div>
      </div>
      <div className="mb-3 mt-3 flex items-start gap-2.5">
        <div className="leading-1.5 flex w-full max-w-[320px] flex-col rounded-s-xl rounded-ee-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700 xl:max-w-full">
          <div className="pace-x-2 flex items-center justify-end rtl:space-x-reverse">
            <span className="text-xs font-semibold text-gray-900 dark:text-white xl:text-sm">
              {person2}
            </span>
          </div>
          <p className="text-wrap py-2.5 text-xs font-normal text-gray-900 dark:text-white xl:text-sm">
            {jap2}
          </p>
          <p className="text-wrap text-xs italic text-gray-500 xl:text-sm">
            ({rom2})
          </p>
          <p className="text-wrap text-xs font-medium text-gray-800 xl:text-sm">
            {trans2}
          </p>
        </div>
        <svg
          className="h-10 w-10 text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      </div>
      <p className="mb-5 text-xs xl:text-sm">{hint}</p>
      <AnsGroup
        isAnsed={isAnsed}
        setIsAnsed={setIsAnsed}
        ans={ans}
        options={opt}
        translations={transAns}
      />
    </div>
  );
};

const DialPrac1 = () => {
  const [isAnsed, setIsAnsed] = useState(false);
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementVer = () => {
    if (lsScore.VV !== undefined) {
      if (lsScore.VV < 11) {
        setLSScore({ ...lsScore, VV: lsScore.VV + 1 });
      }
    }
  };

  return (
    <div
      onClick={() => {
        incrementVer();
      }}
    >
      <ConAns
        person1="Aiko"
        jap1="私は読書が好きです。ケンさんは？"
        rom1="Watashi wa dokusho ga suki desu. Ken-san wa?"
        trans1="I like reading. How about you, Ken?"
        person2="Ken"
        hint="Hint: Ken also likes reading but wants to mention another hobby."
        isAnsed={isAnsed}
        setIsAnsed={setIsAnsed}
        ans={1}
        opt={[
          <>
            <br />
            私 も 読書 が 好き です けど、音楽 も 好き です。
            <br />
            <span className="font-normal italic text-gray-500">
              (Watashi mo dokusho ga suki desu kedo, ongaku mo suki desu.)
            </span>
          </>,
          <>
            <br />
            私は 読書 が 好き じゃ ない です けど、音楽 が 大好き です。
            <br />
            <span className="font-normal italic text-gray-500">
              (Watashi wa dokusho ga suki ja nai desu kedo, ongaku ga daisuki
              desu.)
            </span>
          </>,
        ]}
        transAns={[
          "I also like reading, but I also like music.",
          "I don’t like reading, but I really love music.",
        ]}
      />
    </div>
  );
};
const DialPrac2 = () => {
  const [isAnsed, setIsAnsed] = useState(false);
  const [isAnsed2, setIsAnsed2] = useState(false);
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementVer = () => {
    if (lsScore.VV !== undefined) {
      if (lsScore.VV < 11) {
        setLSScore({ ...lsScore, VV: lsScore.VV + 1 });
      }
    }
  };

  return (
    <div
      onClick={() => {
        incrementVer();
      }}
    >
      <ConAns
        person1="Hiro"
        jap1="夏の 果物の 中で 何が いちばん 好き？"
        rom1="Natsu no kudamono no naka de nani ga ichiban suki?"
        trans1="Which summer fruit do you like most?"
        person2="Mika"
        hint="Hint: Mika is trying to express that watermelon is her favorite summer fruit."
        isAnsed={isAnsed}
        setIsAnsed={setIsAnsed}
        ans={2}
        opt={[
          <>
            <br />
            スイカが いちばん 人気が あるよ。
            <br />
            <span className="font-normal italic text-gray-500">
              (Suika ga ichiban ninki ga aru yo.)
            </span>
          </>,
          <>
            <br />
            スイカが いちばん おいしい と思う。
            <br />
            <span className="font-normal italic text-gray-500">
              (Suika ga ichiban oishī to omou)
            </span>
          </>,
        ]}
        transAns={[
          "Watermelon is the most popular.",
          "I think watermelon is the most delicious.",
        ]}
      />
      <ConAns
        person1="Ken"
        jap1="このカバン、ブランド物？"
        rom1="Kono kaban, burando-mono?"
        trans1="Is this bag a brand item?"
        person2="Aya"
        hint="Hint: Aya wants to clarify that the bag is not a brand-name item."
        isAnsed={isAnsed2}
        setIsAnsed={setIsAnsed2}
        ans={2}
        opt={[
          <>
            <br />
            ブランド物ですよ。
            <br />
            <span className="font-normal italic text-gray-500">
              (Burando-monodesu yo.)
            </span>
          </>,
          <>
            <br />
            ブランド物 じゃないです。
            <br />
            <span className="font-normal italic text-gray-500">
              (Burando-mono janaidesu.)
            </span>
          </>,
        ]}
        transAns={["It's a brand item.", "It's not a brand item."]}
      />
    </div>
  );
};
const DialPrac3 = () => {
  const [isAnsed, setIsAnsed] = useState(false);
  const [isAnsed2, setIsAnsed2] = useState(false);
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementVer = () => {
    if (lsScore.VV !== undefined) {
      if (lsScore.VV < 11) {
        setLSScore({ ...lsScore, VV: lsScore.VV + 1 });
      }
    }
  };

  return (
    <div
      onClick={() => {
        incrementVer();
      }}
    >
      <AnsCon
        person2="Taro"
        jap2="確かに 面白い ですよ、前に 見たことが あります。"
        rom2="Tashika ni omoshiroi desu yo, mae ni mita koto ga arimasu."
        trans2="It is indeed interesting, I have watched it before."
        person1="Sakura"
        hint="Hint: Sakura wondered if the movie is interesting."
        isAnsed={isAnsed}
        setIsAnsed={setIsAnsed}
        ans={1}
        opt={[
          <>
            <br />
            この映画が 面白い かどうか 知りたい。
            <br />
            <span className="font-normal italic text-gray-500">
              (Kono eiga ga omoshiroi ka dou ka shiritai.)
            </span>
          </>,
          <>
            <br />
            この映画に 何が あるのか 知りたい。
            <br />
            <span className="font-normal italic text-gray-500">
              (Kono eiga ni nani ga aru no ka shiritai.)
            </span>
          </>,
        ]}
        transAns={[
          "I wonder if this movie is interesting.",
          "I want to know what is in this movie.",
        ]}
      />
      <AnsCon
        person2="Ken"
        jap2="はい、どうぞ。"
        rom2="Hai, douzo."
        trans2="Sure, here you go."
        person1="Hana"
        hint="Hint: Hana asked Ken to hand her the book politely."
        isAnsed={isAnsed2}
        setIsAnsed={setIsAnsed2}
        ans={1}
        opt={[
          <>
            <br />
            本 を ください。
            <br />
            <span className="font-normal italic text-gray-500">
              (Hon o kudasai.)
            </span>
          </>,
          <>
            <br />
            本 を 読みます。
            <br />
            <span className="font-normal italic text-gray-500">
              (Hon o yomimasu.)
            </span>
          </>,
        ]}
        transAns={["Please give me the book.", "I will read the book."]}
      />
    </div>
  );
};
const DialPrac4 = () => {
  const [isAnsed, setIsAnsed] = useState(false);
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementVer = () => {
    if (lsScore.VV !== undefined) {
      if (lsScore.VV < 11) {
        setLSScore({ ...lsScore, VV: lsScore.VV + 1 });
      }
    }
  };

  return (
    <div
      onClick={() => {
        incrementVer();
      }}
    >
      <ConAnsCon
        person1="Taro"
        jap1="この 映画は 面白い ですね。"
        rom1="Kono eiga wa omoshiroi desu ne."
        trans1="This movie is interesting, isn’t it?"
        person2="Sakura"
        jap2="明日は 買い物 に 行く 予定 です。"
        rom2="Ashita wa kaimono ni iku yotei desu."
        trans2="I plan to go shopping tomorrow."
        hint="Hint: Taro suddenly wondered about Sakura’s plans for tomorrow."
        isAnsed={isAnsed}
        setIsAnsed={setIsAnsed}
        ans={2}
        opt={[
          <>
            <br />
            明日は どんな 映画 を 見ますか？
            <br />
            <span className="font-normal italic text-gray-500">
              (Ashita wa donna eiga o mimasu ka?)
            </span>
          </>,
          <>
            <br />
            ところで、明日の 予定は 何ですか？
            <br />
            <span className="font-normal italic text-gray-500">
              (Tokoro de, ashita no yotei wa nan desu ka?)
            </span>
          </>,
        ]}
        transAns={[
          "What kind of movie will you watch tomorrow?",
          "By the way, what are your plans for tomorrow?",
        ]}
      />
    </div>
  );
};

export { DialPrac1, DialPrac2, DialPrac3, DialPrac4 };

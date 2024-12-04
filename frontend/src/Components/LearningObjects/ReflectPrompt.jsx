import { useState, useContext } from "react";
import { LSContext } from "../../pages/LessonB";
import "flowbite";

const ListItem = ({ id, title, content }) => {
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementRef = () => {
    if (lsScore.AR !== undefined) {
      {
        if (lsScore.AR < 11) {
          setLSScore({ ...lsScore, AR: lsScore.AR + 1 });
        }
      }
    }
  };

  return (
    <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
      <div className="flex items-center ps-3">
        <input
          id={`${id}-checkbox`}
          type="checkbox"
          onClick={() => {
            incrementRef();
          }}
          defaultValue=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-lime-600 focus:ring-2 focus:ring-lime-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-lime-600 dark:focus:ring-offset-gray-700"
        />
        <label
          htmlFor={`${id}-checkbox`}
          className="mx-2 w-full py-3 text-sm font-semibold text-gray-900 dark:text-gray-300 xl:text-base"
        >
          {title}:
          <div className="my-1" />
          <div className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 xl:text-sm">
            {content}
          </div>
        </label>
      </div>
    </li>
  );
};

const ReflectPrompt1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lsScore, setLSScore] = useContext(LSContext);

  const decrementRef = (dec) => {
    if (lsScore.AR !== undefined) {
      {
        if (lsScore.AR > -11) {
          setLSScore({ ...lsScore, AR: lsScore.AR - dec });
        }
      }
    }
  };

  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="my-5 block w-full rounded-lg bg-lime-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        type="button"
      >
        Click to view reflection prompts
      </button>
      {/* Main modal */}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${isOpen ? "block" : "hidden"} inset-0 z-0 bg-lime-900/50 transition-all`}
      />
      <div
        className={`${isOpen ? "block" : "hidden"} top-10 z-20 max-h-full w-full max-w-2xl justify-self-center transition-all`}
      >
        {/* Modal content */}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Reflection Prompts
            </h3>
            <button
              onClick={() => {
                decrementRef(2);
                setIsOpen(!isOpen);
              }}
              type="button"
              className="rounded-lg bg-lime-700 px-2 py-1 text-center text-xs font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 xl:text-sm"
            >
              {"Skip >"}
            </button>
          </div>
          {/* Modal body */}
          <ul className="w-full rounded-lg border border-gray-200 bg-white font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <ListItem
              id="sanpo"
              title="散歩 (Sanpo)"
              content={
                <>
                  Do you enjoy taking walks? Think about how you would describe
                  your favorite walking spot in Japanese.
                  <br /> Can you imagine yourself saying ”ここで散歩をします
                  (Koko de sanpo o shimasu)“?
                </>
              }
            />
            <ListItem
              id="kokode"
              title="ここで (Koko de)"
              content={
                <>
                  Reflect on a time when you gave or received directions. How
                  would you tell someone to “wait here” in Japanese?
                </>
              }
            />
            <ListItem
              id="sukidesu"
              title="好きです (Suki desu)"
              content={
                <>
                  What are some things you like? Think of at least one thing and
                  practice saying it using “好きです”. <br />
                  For example: “猫が 好きです” (I like cats).
                </>
              }
            />
            <ListItem
              id="mo"
              title="Aも (A mo)"
              content={
                <>
                  Can you think of a time when you wanted to say “me too” or
                  “that too”? How would you say it in Japanese using “も”?
                </>
              }
            />
          </ul>
        </div>
      </div>
    </>
  );
};
const ReflectPrompt2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lsScore, setLSScore] = useContext(LSContext);

  const decrementRef = (dec) => {
    if (lsScore.AR !== undefined) {
      {
        if (lsScore.AR > -11) {
          setLSScore({ ...lsScore, AR: lsScore.AR - dec });
        }
      }
    }
  };

  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="my-5 block w-full rounded-lg bg-lime-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        type="button"
      >
        Click to view reflection prompts
      </button>
      {/* Main modal */}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${isOpen ? "block" : "hidden"} inset-0 z-10 bg-lime-900/50 transition-all`}
      />
      <div
        className={`${isOpen ? "block" : "hidden"} top-10 z-20 max-h-full w-full max-w-2xl justify-self-center transition-all`}
      >
        {/* Modal content */}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Reflection Prompts
            </h3>
            <button
              onClick={() => {
                decrementRef(2);
                setIsOpen(!isOpen);
              }}
              type="button"
              className="rounded-lg bg-lime-700 px-2 py-1 text-center text-xs font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 xl:text-sm"
            >
              {"Skip >"}
            </button>
          </div>
          {/* Modal body */}
          <ul className="w-full rounded-lg border border-gray-200 bg-white font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <ListItem
              id="dokusho"
              title="読書 (Dokusho)"
              content={
                <>
                  Do you enjoy reading? What types of books or topics interest
                  you? Try to express this in Japanese using 読書 and 本.
                </>
              }
            />
            <ListItem
              id="gaichiban"
              title="がいちばん (Ga ichiban)"
              content={
                <>
                  Think about your favorite things, like foods, hobbies, or
                  movies. Can you use がいちばん to describe which one you like
                  the most?
                </>
              }
            />
            <ListItem
              id="toomoimasu"
              title="と思います (To omoimasu)"
              content={
                <>
                  Practice expressing your opinion. For example, what do you
                  think about a book, movie, or place you visited recently? Use
                  と思います to share your thoughts.
                </>
              }
            />
            <ListItem
              id="jitsuwa"
              title="実は (Jitsu wa)"
              content={
                <>
                  Reflect on something surprising or unexpected about yourself.
                  Use 実は to share it, such as a hobby or preference that
                  people don’t know about.
                </>
              }
            />
            <ListItem
              id="janai"
              title="好き じゃない です (Suki ja nai desu)"
              content={
                <>
                  What are some things you don’t like? Use 好きじゃないです to
                  express this politely, such as food, activities, or genres.
                </>
              }
            />
            <ListItem
              id="summ"
              title="Think about how you compare things in your language"
              content={
                <>
                  <ul>
                    <li>• “I like X the most because...” → Use がいちばん.</li>
                    <li>
                      • “I don’t like Y, but I think Z is interesting.” →
                      Practice combining 好きじゃないです, けど, and と思います.
                    </li>
                  </ul>
                </>
              }
            />
          </ul>
        </div>
      </div>
    </>
  );
};
const ReflectPrompt3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lsScore, setLSScore] = useContext(LSContext);

  const decrementRef = (dec) => {
    if (lsScore.AR !== undefined) {
      {
        if (lsScore.AR > -11) {
          setLSScore({ ...lsScore, AR: lsScore.AR - dec });
        }
      }
    }
  };

  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="my-5 block w-full rounded-lg bg-lime-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        type="button"
      >
        Click to view reflection prompts
      </button>
      {/* Main modal */}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${isOpen ? "block" : "hidden"} inset-0 z-10 bg-lime-900/50 transition-all`}
      />
      <div
        className={`${isOpen ? "block" : "hidden"} top-10 z-20 max-h-full w-full max-w-2xl justify-self-center transition-all`}
      >
        {/* Modal content */}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Reflection Prompts
            </h3>
            <button
              onClick={() => {
                decrementRef(2);
                setIsOpen(!isOpen);
              }}
              type="button"
              className="rounded-lg bg-lime-700 px-2 py-1 text-center text-xs font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 xl:text-sm"
            >
              {"Skip >"}
            </button>
          </div>
          {/* Modal body */}
          <ul className="w-full rounded-lg border border-gray-200 bg-white font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <ListItem
              id="gitaahiku"
              title="ギター (Gitaa) / 弾く (Hiku)"
              content={
                <>
                  Think about how you could introduce yourself to a new friend
                  by sharing your hobbies or interests. How would you say “I
                  play the guitar“ or “I like playing the piano“ in Japanese?
                  <br />
                  Could you use this vocabulary in a conversation at a party or
                  gathering?
                </>
              }
            />
            <ListItem
              id="kondo"
              title="今度 (Kondo)"
              content={
                <>
                  How would you invite a friend to hang out or make plans for
                  the future in Japanese?
                  <br /> For example, “Let’s go to a concert next time“ or “We
                  should grab coffee sometime.“ Can you use 今度 to make plans
                  for the weekend or a holiday?
                </>
              }
            />
            <ListItem
              id="sounandesune"
              title="そうなんですね (Sou nan desu ne)"
              content={
                <>
                  How might you use そうなんですね when someone shares
                  surprising or new information with you? <br />
                  How do you acknowledge someone’s statement politely in
                  Japanese without just saying ”I see”?
                </>
              }
            />
            <ListItem
              id="daisuki"
              title="大好き (Daisuki)"
              content={
                <>
                  If you want to express that you really like or love something,
                  such as a hobby, food, or a season, how would you use 大好き
                  in a sentence? <br />
                  Can you express your strong preferences for things you enjoy
                  in your daily life?
                </>
              }
            />
            <ListItem
              id="kudasai"
              title="ください (Kudasai)"
              content={
                <>
                  Imagine you“re at a restaurant in Japan and you need to ask
                  the waiter for something politely. <br />
                  How would you use ください in your request?
                </>
              }
            />
            <ListItem
              id="kadouka"
              title="かどうか (Ka dou ka)"
              content={
                <>
                  When you”re unsure about something, how would you express it
                  using かどうか? <br /> For instance, asking if someone is
                  coming to an event or whether a certain product is available?
                </>
              }
            />
          </ul>
        </div>
      </div>
    </>
  );
};
const ReflectPrompt4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lsScore, setLSScore] = useContext(LSContext);

  const decrementRef = (dec) => {
    if (lsScore.AR !== undefined) {
      {
        if (lsScore.AR > -11) {
          setLSScore({ ...lsScore, AR: lsScore.AR - dec });
        }
      }
    }
  };

  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="my-5 block w-full rounded-lg bg-lime-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        type="button"
      >
        Click to view reflection prompts
      </button>
      {/* Main modal */}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${isOpen ? "block" : "hidden"} inset-0 z-10 bg-lime-900/50 transition-all`}
      />
      <div
        className={`${isOpen ? "block" : "hidden"} top-10 z-20 max-h-full w-full max-w-2xl justify-self-center transition-all`}
      >
        {/* Modal content */}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Reflection Prompts
            </h3>
            <button
              onClick={() => {
                decrementRef(2);
                setIsOpen(!isOpen);
              }}
              type="button"
              className="rounded-lg bg-lime-700 px-2 py-1 text-center text-xs font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 xl:text-sm"
            >
              {"Skip >"}
            </button>
          </div>
          {/* Modal body */}
          <ul className="w-full rounded-lg border border-gray-200 bg-white font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <ListItem
              id="kyou"
              title="今日 (Kyou)"
              content={
                <>
                  • How would you use “今日“ to make plans with a friend? For
                  example, if you were to ask them what they are doing today.
                  <br /> • When discussing your schedule with someone, how can
                  ”今日” help you indicate what you have planned for the day?
                </>
              }
            />
            <ListItem
              id="ima"
              title="今 (Ima)"
              content={
                <>
                  • How would you use “今“ to describe what you are currently
                  doing? For instance, if you are in the middle of studying,
                  what sentence could you create using “今“? <br /> • In a
                  conversation, how might you use “今“ to explain your current
                  situation, like living in a new city or working at a new job?
                </>
              }
            />
            <ListItem
              id="tenki"
              title="天気 (Tenki)"
              content={
                <>
                  • Think about how you might use ”天気” when talking about the
                  weather with a colleague or a friend. Can you create a
                  sentence asking about the weather in a different season, like
                  winter or summer? <br /> • If you’re discussing the weather
                  with someone, how would you use ”天気” to comment on whether
                  it’s sunny, rainy, or cloudy?
                </>
              }
            />
            <ListItem
              id="haru"
              title="春 (Haru)"
              content={
                <>
                  • How would you use “春“ to talk about your favorite things to
                  do in the spring, such as cherry blossom viewing or spring
                  festivals? <br /> • Can you think of a way to describe how you
                  feel about the season of spring using “春“ in a sentence?
                </>
              }
            />
            <ListItem
              id="kimochigaii"
              title="気持ちがいい (Kimochi ga ii)"
              content={
                <>
                  • How might you use ”気持ちがいい” to describe a nice feeling,
                  such as when enjoying a sunny day or feeling comfortable in a
                  cozy room? <br /> • Imagine you are enjoying a nice meal or
                  taking a walk. How would you describe the sensation using
                  ”気持ちがいい”?
                </>
              }
            />
            <ListItem
              id="tokorode"
              title="ところで (Tokoro de)"
              content={
                <>
                  • Think of a conversation where you want to change the topic.
                  How might you use “ところで“ to smoothly transition to
                  something else, like asking about a friend’s plans or talking
                  about a recent event? <br /> • How could you use “ところで“
                  when you want to ask someone something unrelated to the
                  current topic?
                </>
              }
            />
            <ListItem
              id="desune"
              title="ですね (Desu ne)"
              content={
                <>
                  • When talking about your favorite TV show or a recent movie
                  you watched, how would you use ”ですね” to confirm that the
                  other person shares your opinion? <br /> • How can you use
                  ”ですね” when discussing common observations, such as when
                  talking about the weather or a fun event you both attended?
                </>
              }
            />
          </ul>
        </div>
      </div>
    </>
  );
};
const ListItem_A = ({ id, title, content }) => {
  return (
    <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
      <div className="flex items-center ps-3">
        <input
          id={`${id}-checkbox`}
          type="checkbox"
          defaultValue=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-lime-600 focus:ring-2 focus:ring-lime-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-lime-600 dark:focus:ring-offset-gray-700"
        />
        <label
          htmlFor={`${id}-checkbox`}
          className="mx-2 w-full py-3 text-sm font-semibold text-gray-900 dark:text-gray-300 xl:text-base"
        >
          {title}:
          <div className="my-1" />
          <div className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 xl:text-sm">
            {content}
          </div>
        </label>
      </div>
    </li>
  );
};

const ReflectPrompt1_A = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="my-5 block w-full rounded-lg bg-lime-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        type="button"
      >
        Click to view reflection prompts
      </button>
      {/* Main modal */}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${isOpen ? "block" : "hidden"} inset-0 z-0 bg-lime-900/50 transition-all`}
      />
      <div
        className={`${isOpen ? "block" : "hidden"} top-10 z-20 max-h-full w-full max-w-2xl justify-self-center transition-all`}
      >
        {/* Modal content */}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Reflection Prompts
            </h3>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className="rounded-lg bg-lime-700 px-2 py-1 text-center text-xs font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 xl:text-sm"
            >
              {"Skip >"}
            </button>
          </div>
          {/* Modal body */}
          <ul className="w-full rounded-lg border border-gray-200 bg-white font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <ListItem_A
              id="sanpo"
              title="散歩 (Sanpo)"
              content={
                <>
                  Do you enjoy taking walks? Think about how you would describe
                  your favorite walking spot in Japanese.
                  <br /> Can you imagine yourself saying ”ここで散歩をします
                  (Koko de sanpo o shimasu)“?
                </>
              }
            />
            <ListItem_A
              id="kokode"
              title="ここで (Koko de)"
              content={
                <>
                  Reflect on a time when you gave or received directions. How
                  would you tell someone to “wait here” in Japanese?
                </>
              }
            />
            <ListItem_A
              id="sukidesu"
              title="好きです (Suki desu)"
              content={
                <>
                  What are some things you like? Think of at least one thing and
                  practice saying it using “好きです”. <br />
                  For example: “猫が 好きです” (I like cats).
                </>
              }
            />
            <ListItem_A
              id="mo"
              title="Aも (A mo)"
              content={
                <>
                  Can you think of a time when you wanted to say “me too” or
                  “that too”? How would you say it in Japanese using “も”?
                </>
              }
            />
          </ul>
        </div>
      </div>
    </>
  );
};
const ReflectPrompt2_A = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="my-5 block w-full rounded-lg bg-lime-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        type="button"
      >
        Click to view reflection prompts
      </button>
      {/* Main modal */}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${isOpen ? "block" : "hidden"} inset-0 z-10 bg-lime-900/50 transition-all`}
      />
      <div
        className={`${isOpen ? "block" : "hidden"} top-10 z-20 max-h-full w-full max-w-2xl justify-self-center transition-all`}
      >
        {/* Modal content */}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Reflection Prompts
            </h3>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className="rounded-lg bg-lime-700 px-2 py-1 text-center text-xs font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 xl:text-sm"
            >
              {"Skip >"}
            </button>
          </div>
          {/* Modal body */}
          <ul className="w-full rounded-lg border border-gray-200 bg-white font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <ListItem_A
              id="dokusho"
              title="読書 (Dokusho)"
              content={
                <>
                  Do you enjoy reading? What types of books or topics interest
                  you? Try to express this in Japanese using 読書 and 本.
                </>
              }
            />
            <ListItem_A
              id="gaichiban"
              title="がいちばん (Ga ichiban)"
              content={
                <>
                  Think about your favorite things, like foods, hobbies, or
                  movies. Can you use がいちばん to describe which one you like
                  the most?
                </>
              }
            />
            <ListItem_A
              id="toomoimasu"
              title="と思います (To omoimasu)"
              content={
                <>
                  Practice expressing your opinion. For example, what do you
                  think about a book, movie, or place you visited recently? Use
                  と思います to share your thoughts.
                </>
              }
            />
            <ListItem_A
              id="jitsuwa"
              title="実は (Jitsu wa)"
              content={
                <>
                  Reflect on something surprising or unexpected about yourself.
                  Use 実は to share it, such as a hobby or preference that
                  people don’t know about.
                </>
              }
            />
            <ListItem_A
              id="janai"
              title="好き じゃない です (Suki ja nai desu)"
              content={
                <>
                  What are some things you don’t like? Use 好きじゃないです to
                  express this politely, such as food, activities, or genres.
                </>
              }
            />
            <ListItem_A
              id="summ"
              title="Think about how you compare things in your language"
              content={
                <>
                  <ul>
                    <li>• “I like X the most because...” → Use がいちばん.</li>
                    <li>
                      • “I don’t like Y, but I think Z is interesting.” →
                      Practice combining 好きじゃないです, けど, and と思います.
                    </li>
                  </ul>
                </>
              }
            />
          </ul>
        </div>
      </div>
    </>
  );
};
const ReflectPrompt3_A = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="my-5 block w-full rounded-lg bg-lime-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        type="button"
      >
        Click to view reflection prompts
      </button>
      {/* Main modal */}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${isOpen ? "block" : "hidden"} inset-0 z-10 bg-lime-900/50 transition-all`}
      />
      <div
        className={`${isOpen ? "block" : "hidden"} top-10 z-20 max-h-full w-full max-w-2xl justify-self-center transition-all`}
      >
        {/* Modal content */}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Reflection Prompts
            </h3>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className="rounded-lg bg-lime-700 px-2 py-1 text-center text-xs font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 xl:text-sm"
            >
              {"Skip >"}
            </button>
          </div>
          {/* Modal body */}
          <ul className="w-full rounded-lg border border-gray-200 bg-white font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <ListItem_A
              id="gitaahiku"
              title="ギター (Gitaa) / 弾く (Hiku)"
              content={
                <>
                  Think about how you could introduce yourself to a new friend
                  by sharing your hobbies or interests. How would you say “I
                  play the guitar“ or “I like playing the piano“ in Japanese?
                  <br />
                  Could you use this vocabulary in a conversation at a party or
                  gathering?
                </>
              }
            />
            <ListItem_A
              id="kondo"
              title="今度 (Kondo)"
              content={
                <>
                  How would you invite a friend to hang out or make plans for
                  the future in Japanese?
                  <br /> For example, “Let’s go to a concert next time“ or “We
                  should grab coffee sometime.“ Can you use 今度 to make plans
                  for the weekend or a holiday?
                </>
              }
            />
            <ListItem_A
              id="sounandesune"
              title="そうなんですね (Sou nan desu ne)"
              content={
                <>
                  How might you use そうなんですね when someone shares
                  surprising or new information with you? <br />
                  How do you acknowledge someone’s statement politely in
                  Japanese without just saying ”I see”?
                </>
              }
            />
            <ListItem_A
              id="daisuki"
              title="大好き (Daisuki)"
              content={
                <>
                  If you want to express that you really like or love something,
                  such as a hobby, food, or a season, how would you use 大好き
                  in a sentence? <br />
                  Can you express your strong preferences for things you enjoy
                  in your daily life?
                </>
              }
            />
            <ListItem_A
              id="kudasai"
              title="ください (Kudasai)"
              content={
                <>
                  Imagine you“re at a restaurant in Japan and you need to ask
                  the waiter for something politely. <br />
                  How would you use ください in your request?
                </>
              }
            />
            <ListItem_A
              id="kadouka"
              title="かどうか (Ka dou ka)"
              content={
                <>
                  When you”re unsure about something, how would you express it
                  using かどうか? <br /> For instance, asking if someone is
                  coming to an event or whether a certain product is available?
                </>
              }
            />
          </ul>
        </div>
      </div>
    </>
  );
};
const ReflectPrompt4_A = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="my-5 block w-full rounded-lg bg-lime-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        type="button"
      >
        Click to view reflection prompts
      </button>
      {/* Main modal */}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${isOpen ? "block" : "hidden"} inset-0 z-10 bg-lime-900/50 transition-all`}
      />
      <div
        className={`${isOpen ? "block" : "hidden"} top-10 z-20 max-h-full w-full max-w-2xl justify-self-center transition-all`}
      >
        {/* Modal content */}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Reflection Prompts
            </h3>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className="rounded-lg bg-lime-700 px-2 py-1 text-center text-xs font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 xl:text-sm"
            >
              {"Skip >"}
            </button>
          </div>
          {/* Modal body */}
          <ul className="w-full rounded-lg border border-gray-200 bg-white font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <ListItem_A
              id="kyou"
              title="今日 (Kyou)"
              content={
                <>
                  • How would you use “今日“ to make plans with a friend? For
                  example, if you were to ask them what they are doing today.
                  <br /> • When discussing your schedule with someone, how can
                  ”今日” help you indicate what you have planned for the day?
                </>
              }
            />
            <ListItem_A
              id="ima"
              title="今 (Ima)"
              content={
                <>
                  • How would you use “今“ to describe what you are currently
                  doing? For instance, if you are in the middle of studying,
                  what sentence could you create using “今“? <br /> • In a
                  conversation, how might you use “今“ to explain your current
                  situation, like living in a new city or working at a new job?
                </>
              }
            />
            <ListItem_A
              id="tenki"
              title="天気 (Tenki)"
              content={
                <>
                  • Think about how you might use ”天気” when talking about the
                  weather with a colleague or a friend. Can you create a
                  sentence asking about the weather in a different season, like
                  winter or summer? <br /> • If you’re discussing the weather
                  with someone, how would you use ”天気” to comment on whether
                  it’s sunny, rainy, or cloudy?
                </>
              }
            />
            <ListItem_A
              id="haru"
              title="春 (Haru)"
              content={
                <>
                  • How would you use “春“ to talk about your favorite things to
                  do in the spring, such as cherry blossom viewing or spring
                  festivals? <br /> • Can you think of a way to describe how you
                  feel about the season of spring using “春“ in a sentence?
                </>
              }
            />
            <ListItem_A
              id="kimochigaii"
              title="気持ちがいい (Kimochi ga ii)"
              content={
                <>
                  • How might you use ”気持ちがいい” to describe a nice feeling,
                  such as when enjoying a sunny day or feeling comfortable in a
                  cozy room? <br /> • Imagine you are enjoying a nice meal or
                  taking a walk. How would you describe the sensation using
                  ”気持ちがいい”?
                </>
              }
            />
            <ListItem_A
              id="tokorode"
              title="ところで (Tokoro de)"
              content={
                <>
                  • Think of a conversation where you want to change the topic.
                  How might you use “ところで“ to smoothly transition to
                  something else, like asking about a friend’s plans or talking
                  about a recent event? <br /> • How could you use “ところで“
                  when you want to ask someone something unrelated to the
                  current topic?
                </>
              }
            />
            <ListItem_A
              id="desune"
              title="ですね (Desu ne)"
              content={
                <>
                  • When talking about your favorite TV show or a recent movie
                  you watched, how would you use ”ですね” to confirm that the
                  other person shares your opinion? <br /> • How can you use
                  ”ですね” when discussing common observations, such as when
                  talking about the weather or a fun event you both attended?
                </>
              }
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export {
  ReflectPrompt1,
  ReflectPrompt2,
  ReflectPrompt3,
  ReflectPrompt4,
  ReflectPrompt1_A,
  ReflectPrompt2_A,
  ReflectPrompt3_A,
  ReflectPrompt4_A,
};

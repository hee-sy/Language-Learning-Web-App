import { useState, useContext } from "react";
import { LSContext } from "../../pages/LessonB";

const TransPrac1 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementSen = () => {
    if (lsScore.SI !== undefined) {
      {
        if (lsScore.SI > -11) {
          setLSScore({ ...lsScore, SI: lsScore.SI - 1 });
        }
      }
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Try translate the sentence below on your own:
      </h2>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        こんにちは！ここで 散歩を するのが 好きですか？
      </label>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        (Konnichiwa! Koko de sanpo o suru no ga suki desu ka?)
      </label>
      <textarea
        onClick={() => {
          incrementSen();
        }}
        id="translation"
        rows={3}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
        placeholder="Write your translation here..."
        defaultValue={""}
      />
      <div className={`${isSubmitted ? "block" : "hidden"} bg-lime-100`}>
        <label
          htmlFor="translation"
          className="mt-2 block text-sm font-medium text-lime-600 dark:text-gray-400"
        >
          {'Sample answer: "Hello! Do you like taking walks here?"'}
        </label>
        <label
          htmlFor="translation"
          className="mt-2 block text-sm font-medium text-lime-900 dark:text-white"
        >
          Compare your answer with the sample answer above.
        </label>
      </div>
      <button
        type="button"
        onClick={() => {
          incrementSen();

          // check if textarea is empty
          if (document.getElementById("translation").value === "") {
            alert("Please write your translation first.");
          } else {
            setIsSubmitted(true);
          }
          return;
        }}
        className="mb-2 mt-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
      >
        Submit
      </button>
    </div>
  );
};
const TransPrac2 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementSen = () => {
    if (lsScore.SI !== undefined) {
      {
        if (lsScore.SI > -11) {
          setLSScore({ ...lsScore, SI: lsScore.SI - 1 });
        }
      }
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Try translate the sentence below on your own:
      </h2>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        実は、この 映画 が いちばん 面白い です。
      </label>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        (Jitsu wa, kono eiga ga ichiban omoshiroi desu.))
      </label>
      <textarea
        onClick={() => {
          incrementSen();
        }}
        id="translation"
        rows={3}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
        placeholder="Write your translation here..."
        defaultValue={""}
      />
      <div className={`${isSubmitted ? "block" : "hidden"} bg-lime-100`}>
        <label
          htmlFor="translation"
          className="mt-2 block text-sm font-medium text-lime-600 dark:text-gray-400"
        >
          {'Sample answer: "Actually, this movie is the most interesting."'}
        </label>
        <label
          htmlFor="translation"
          className="mt-2 block text-sm font-medium text-lime-900 dark:text-white"
        >
          Compare your answer with the sample answer above.
        </label>
      </div>
      <button
        type="button"
        onClick={() => {
          incrementSen();

          // check if textarea is empty
          if (document.getElementById("translation").value === "") {
            alert("Please write your translation first.");
          } else {
            setIsSubmitted(true);
          }
          return;
        }}
        className="mb-2 mt-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
      >
        Submit
      </button>
    </div>
  );
};
const TransPrac3 = () => {
  const [isSubmitted1, setIsSubmitted1] = useState(false);
  const [isSubmitted2, setIsSubmitted2] = useState(false);
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementSen = () => {
    if (lsScore.SI !== undefined) {
      {
        if (lsScore.SI > -11) {
          setLSScore({ ...lsScore, SI: lsScore.SI - 1 });
        }
      }
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Try translate the sentences below on your own:
      </h2>
      <label
        htmlFor="translation1"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        ギター を 弾く かどうか、まだ 決めていません。
      </label>
      <label
        htmlFor="translation1"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        (Gitaa o hiku ka dou ka, mada kimeteimasen.)
      </label>
      <label
        htmlFor="translation1"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        Hint: 決めて(kimete) - decide, ません(masen) - Not
      </label>
      <textarea
        onClick={() => {
          incrementSen();
        }}
        id="translation1"
        rows={3}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
        placeholder="Write your translation here..."
        defaultValue={""}
      />
      <div className={`${isSubmitted1 ? "block" : "hidden"} bg-lime-100`}>
        <label
          htmlFor="translation1"
          className="mt-2 block text-sm font-medium text-lime-600 dark:text-gray-400"
        >
          {
            'Sample answer: "I haven\'t decided yet whether or not to play the guitar."'
          }
        </label>
        <label
          htmlFor="translation1"
          className="mt-2 block text-sm font-medium text-lime-900 dark:text-white"
        >
          Compare your answer with the sample answer above.
        </label>
      </div>
      <button
        type="button"
        onClick={() => {
          incrementSen();

          // check if textarea is empty
          if (document.getElementById("translation1").value === "") {
            alert("Please write your translation first.");
          } else {
            setIsSubmitted1(true);
          }
          return;
        }}
        className="mb-2 mt-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
      >
        Submit
      </button>
      <label
        htmlFor="translation2"
        className="my-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        そうなんですね、ギター が 好きなん ですね。
      </label>
      <label
        htmlFor="translation2"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        (Sou nan desu ne, gitaa ga suki nan desu ne.)
      </label>
      <textarea
        onClick={() => {
          incrementSen();
        }}
        id="translation2"
        rows={3}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
        placeholder="Write your translation here..."
        defaultValue={""}
      />
      <div className={`${isSubmitted2 ? "block" : "hidden"} bg-lime-100`}>
        <label
          htmlFor="translation2"
          className="mt-2 block text-sm font-medium text-lime-600 dark:text-gray-400"
        >
          {'Sample answer: "I see, you like the guitar, don\'t you?"'}
        </label>
        <label
          htmlFor="translation2"
          className="mt-2 block text-sm font-medium text-lime-900 dark:text-white"
        >
          Compare your answer with the sample answer above.
        </label>
      </div>
      <button
        type="button"
        onClick={() => {
          incrementSen();

          // check if textarea is empty
          if (document.getElementById("translation2").value === "") {
            alert("Please write your translation first.");
          } else {
            setIsSubmitted2(true);
          }
          return;
        }}
        className="mb-2 mt-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
      >
        Submit
      </button>
    </div>
  );
};

const TransPrac4 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementSen = () => {
    if (lsScore.SI !== undefined) {
      {
        if (lsScore.SI > -11) {
          setLSScore({ ...lsScore, SI: lsScore.SI - 1 });
        }
      }
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Try translate the sentence below on your own:
      </h2>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        今朝、天気が 気持ちがいい ですね。ところで、今日 は 何をする 予定
        ですか？
      </label>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        (Kesa, tenki ga kimochi ga ii desu ne. Tokoro de, kyou wa nani o suru
        yotei desu ka?)
      </label>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        Hint: 予定 (Yotei) means plans
      </label>
      <textarea
        onClick={() => {
          incrementSen();
        }}
        id="translation"
        rows={3}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
        placeholder="Write your translation here..."
        defaultValue={""}
      />
      <div className={`${isSubmitted ? "block" : "hidden"} bg-lime-100`}>
        <label
          htmlFor="translation"
          className="mt-2 block text-sm font-medium text-lime-600 dark:text-gray-400"
        >
          {
            'Sample answer: "This morning, the weather feels nice, doesn’t it? By the way, what are your plans for today?"'
          }
        </label>
        <label
          htmlFor="translation"
          className="mt-2 block text-sm font-medium text-lime-900 dark:text-white"
        >
          Compare your answer with the sample answer above.
        </label>
      </div>
      <button
        type="button"
        onClick={() => {
          incrementSen();

          // check if textarea is empty
          if (document.getElementById("translation").value === "") {
            alert("Please write your translation first.");
          } else {
            setIsSubmitted(true);
          }
          return;
        }}
        className="mb-2 mt-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
      >
        Submit
      </button>
    </div>
  );
};
const TransPrac1_A = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="w-full">
      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Try translate the sentence below on your own:
      </h2>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        こんにちは！ここで 散歩を するのが 好きですか？
      </label>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        (Konnichiwa! Koko de sanpo o suru no ga suki desu ka?)
      </label>
      <textarea
        id="translation"
        rows={3}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
        placeholder="Write your translation here..."
        defaultValue={""}
      />
      <div className={`${isSubmitted ? "block" : "hidden"} bg-lime-100`}>
        <label
          htmlFor="translation"
          className="mt-2 block text-sm font-medium text-lime-600 dark:text-gray-400"
        >
          {'Sample answer: "Hello! Do you like taking walks here?"'}
        </label>
        <label
          htmlFor="translation"
          className="mt-2 block text-sm font-medium text-lime-900 dark:text-white"
        >
          Compare your answer with the sample answer above.
        </label>
      </div>
      <button
        type="button"
        onClick={() => {
          // check if textarea is empty
          if (document.getElementById("translation").value === "") {
            alert("Please write your translation first.");
          } else {
            setIsSubmitted(true);
          }
          return;
        }}
        className="mb-2 mt-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
      >
        Submit
      </button>
    </div>
  );
};
const TransPrac2_A = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="w-full">
      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Try translate the sentence below on your own:
      </h2>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        実は、この 映画 が いちばん 面白い です。
      </label>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        (Jitsu wa, kono eiga ga ichiban omoshiroi desu.))
      </label>
      <textarea
        id="translation"
        rows={3}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
        placeholder="Write your translation here..."
        defaultValue={""}
      />
      <div className={`${isSubmitted ? "block" : "hidden"} bg-lime-100`}>
        <label
          htmlFor="translation"
          className="mt-2 block text-sm font-medium text-lime-600 dark:text-gray-400"
        >
          {'Sample answer: "Actually, this movie is the most interesting."'}
        </label>
        <label
          htmlFor="translation"
          className="mt-2 block text-sm font-medium text-lime-900 dark:text-white"
        >
          Compare your answer with the sample answer above.
        </label>
      </div>
      <button
        type="button"
        onClick={() => {
          // check if textarea is empty
          if (document.getElementById("translation").value === "") {
            alert("Please write your translation first.");
          } else {
            setIsSubmitted(true);
          }
          return;
        }}
        className="mb-2 mt-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
      >
        Submit
      </button>
    </div>
  );
};
const TransPrac3_A = () => {
  const [isSubmitted1, setIsSubmitted1] = useState(false);
  const [isSubmitted2, setIsSubmitted2] = useState(false);

  return (
    <div className="w-full">
      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Try translate the sentences below on your own:
      </h2>
      <label
        htmlFor="translation1"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        ギター を 弾く かどうか、まだ 決めていません。
      </label>
      <label
        htmlFor="translation1"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        (Gitaa o hiku ka dou ka, mada kimeteimasen.)
      </label>
      <label
        htmlFor="translation1"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        Hint: 決めて(kimete) - decide, ません(masen) - Not
      </label>
      <textarea
        id="translation1"
        rows={3}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
        placeholder="Write your translation here..."
        defaultValue={""}
      />
      <div className={`${isSubmitted1 ? "block" : "hidden"} bg-lime-100`}>
        <label
          htmlFor="translation1"
          className="mt-2 block text-sm font-medium text-lime-600 dark:text-gray-400"
        >
          {
            'Sample answer: "I haven\'t decided yet whether or not to play the guitar."'
          }
        </label>
        <label
          htmlFor="translation1"
          className="mt-2 block text-sm font-medium text-lime-900 dark:text-white"
        >
          Compare your answer with the sample answer above.
        </label>
      </div>
      <button
        type="button"
        onClick={() => {
          // check if textarea is empty
          if (document.getElementById("translation1").value === "") {
            alert("Please write your translation first.");
          } else {
            setIsSubmitted1(true);
          }
          return;
        }}
        className="mb-2 mt-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
      >
        Submit
      </button>
      <label
        htmlFor="translation2"
        className="my-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        そうなんですね、ギター が 好きなん ですね。
      </label>
      <label
        htmlFor="translation2"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        (Sou nan desu ne, gitaa ga suki nan desu ne.)
      </label>
      <textarea
        id="translation2"
        rows={3}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
        placeholder="Write your translation here..."
        defaultValue={""}
      />
      <div className={`${isSubmitted2 ? "block" : "hidden"} bg-lime-100`}>
        <label
          htmlFor="translation2"
          className="mt-2 block text-sm font-medium text-lime-600 dark:text-gray-400"
        >
          {'Sample answer: "I see, you like the guitar, don\'t you?"'}
        </label>
        <label
          htmlFor="translation2"
          className="mt-2 block text-sm font-medium text-lime-900 dark:text-white"
        >
          Compare your answer with the sample answer above.
        </label>
      </div>
      <button
        type="button"
        onClick={() => {
          // check if textarea is empty
          if (document.getElementById("translation2").value === "") {
            alert("Please write your translation first.");
          } else {
            setIsSubmitted2(true);
          }
          return;
        }}
        className="mb-2 mt-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
      >
        Submit
      </button>
    </div>
  );
};

const TransPrac4_A = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="w-full">
      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Try translate the sentence below on your own:
      </h2>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        今朝、天気が 気持ちがいい ですね。ところで、今日 は 何をする 予定
        ですか？
      </label>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        (Kesa, tenki ga kimochi ga ii desu ne. Tokoro de, kyou wa nani o suru
        yotei desu ka?)
      </label>
      <label
        htmlFor="translation"
        className="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-400"
      >
        Hint: 予定 (Yotei) means plans
      </label>
      <textarea
        id="translation"
        rows={3}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-lime-500 dark:focus:ring-lime-500"
        placeholder="Write your translation here..."
        defaultValue={""}
      />
      <div className={`${isSubmitted ? "block" : "hidden"} bg-lime-100`}>
        <label
          htmlFor="translation"
          className="mt-2 block text-sm font-medium text-lime-600 dark:text-gray-400"
        >
          {
            'Sample answer: "This morning, the weather feels nice, doesn’t it? By the way, what are your plans for today?"'
          }
        </label>
        <label
          htmlFor="translation"
          className="mt-2 block text-sm font-medium text-lime-900 dark:text-white"
        >
          Compare your answer with the sample answer above.
        </label>
      </div>
      <button
        type="button"
        onClick={() => {
          // check if textarea is empty
          if (document.getElementById("translation").value === "") {
            alert("Please write your translation first.");
          } else {
            setIsSubmitted(true);
          }
          return;
        }}
        className="mb-2 mt-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-sm"
      >
        Submit
      </button>
    </div>
  );
};

export {
  TransPrac1,
  TransPrac2,
  TransPrac3,
  TransPrac4,
  TransPrac1_A,
  TransPrac2_A,
  TransPrac3_A,
  TransPrac4_A,
};

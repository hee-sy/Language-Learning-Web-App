const JapanCharIntro = () => {
  return (
    <div className="w-full pb-20 pt-5 text-left text-sm xl:pt-20 xl:text-base">
      <h1 className="text-wrap text-3xl font-extrabold dark:text-white md:text-5xl">
        Introduction to The Japanese Writing System:
        <br />
        <p className="my-4 text-wrap text-xl font-semibold text-gray-500 dark:text-gray-400 md:text-3xl">
          Let{"'"}s understand how a sentence is structured.
        </p>
      </h1>
      <br />
      <p className="mb-3 text-wrap font-normal text-gray-500 dark:text-gray-400">
        There are three kinds of characters in Japanese:{" "}
        <span className="font-semibold text-gray-900">hiragana</span>,{" "}
        <span className="font-semibold text-gray-900">katakana</span>, and{" "}
        <span className="font-semibold text-gray-900">kanji</span>. 1 All three
        characters can be seen in a single sentence.
      </p>
      <p className="text-center italic text-gray-400">(terebi o mimasu)</p>
      <img
        src="/images/JapCharIntro.png"
        className="max-w-11/12 justify-self-center xl:max-w-96"
        alt="Example"
      />
      <p className="text-center">(I watch television.)</p>
      <br />
      <ul className="max-w-11/12 list-disc text-wrap px-4">
        <li>
          <span className="font-semibold text-amber-500">Hiragana</span> has a
          roundish shape and is used for conjugation endings, function words,
          and native Japanese words not covered by kanji.{" "}
        </li>
        <li>
          <span className="font-semibold text-blue-500">Katakana</span>, which
          has rather straight lines, is normally used for writing words adopted
          from a foreign language and foreign names
        </li>
        <li>
          <span className="font-semibold text-red-500">
            Kanji(Chinese characters)
          </span>{" "}
          are used for nouns and the stems of verbs and adjectives. There are
          much more kanji characters than hiragana and katakana characters, as
          kanji characters are used to represent meanings.
        </li>
        <br />
        <p className="mb-2">Examples of some Kanji characters:</p>
        <img
          src="/images/kanjis.png"
          className="max-w-11/12 justify-self-center xl:max-w-96"
          alt="kanjis"
        />
      </ul>
    </div>
  );
};

export default JapanCharIntro;

import { useContext } from "react";
import { Popover } from "flowbite-react";
import { LSContext } from "../../pages/LessonB";

const Fulltext = () => {
  return (
    <div className="w-full text-left text-sm xl:text-base">
      <h1 className="text-wrap text-3xl font-extrabold dark:text-white md:text-5xl">
        Lesson Overview:
        <br />
        <p className="my-2 text-wrap text-xl font-semibold text-gray-500 dark:text-gray-400 md:text-3xl">
          Let{"'"}s Practice Japanese Conversations!
        </p>
      </h1>
      <br />
      <p className="mb-3 text-wrap font-normal text-gray-500 dark:text-gray-400">
        Welcome to this lesson! Here, you{"'"}ll explore a friendly and casual
        conversation between Aiko and Ken as they chat during a walk in the
        park.
      </p>
      <div id="fulltext" className="flex flex-col divide-y text-xs xl:text-sm">
        <div id="p1" className="py-6">
          <div className="mb-2 flex flex-row">
            <p className="me-3 text-wrap font-bold text-lime-700 dark:text-gray-400">
              Aiko:
            </p>
            <div className="flex flex-col">
              <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
                <span className="font-semibold text-lime-500 underline">
                  こんにちは
                </span>
                ！ あなた
                <span className="font-semibold text-lime-500 underline">
                  も
                </span>{" "}
                <span className="font-semibold text-lime-500 underline">
                  ここで
                </span>
                よく
                <span className="font-semibold text-lime-500 underline">
                  散歩
                </span>
                をしますか？{" "}
              </pre>
              <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
                (
                <span className="font-semibold text-lime-500 underline">
                  Konnichiwa
                </span>
                ! Anata{" "}
                <span className="font-semibold text-lime-500 underline">
                  mo
                </span>{" "}
                <span className="font-semibold text-lime-500 underline">
                  koko de
                </span>{" "}
                yoku{" "}
                <span className="font-semibold text-lime-500 underline">
                  sanpo
                </span>{" "}
                o shimasu ka?)
              </p>
              <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
                Hello! Do you often take walks here too?{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="me-4 text-wrap font-bold text-lime-700 dark:text-gray-400">
              Ken:
            </p>
            <div className="flex flex-col">
              <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
                こんにちは、そうですね。週末に散歩をするのが
                <span className="font-semibold text-lime-500 underline">
                  好きです
                </span>{" "}
                <span className="font-semibold text-lime-500 underline">
                  けど
                </span>
                、
                <span className="font-semibold text-lime-500 underline">
                  平日
                </span>
                は
                <span className="font-semibold text-lime-500 underline">
                  忙し
                </span>
                くてできません。{" "}
              </pre>
              <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
                (Konnichiwa, sou desu ne. Shuumatsu ni sanpo o suru no ga{" "}
                <span className="font-semibold text-lime-500 underline">
                  suki desu
                </span>{" "}
                <span className="font-semibold text-lime-500 underline">
                  kedo
                </span>
                ,{" "}
                <span className="font-semibold text-lime-500 underline">
                  heijitsu
                </span>{" "}
                wa{" "}
                <span className="font-semibold text-lime-500 underline">
                  isogashi
                </span>
                kute dekimasen.)
              </p>
              <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
                Hello, yes. I like taking walks on weekends, but I’m too busy
                during weekdays.{" "}
              </p>
            </div>
          </div>
        </div>
        <div id="p2" className="py-6">
          <div className="mb-2 flex flex-row">
            <p className="me-3 text-wrap font-bold text-lime-700 dark:text-gray-400">
              Aiko:
            </p>
            <div className="flex flex-col">
              <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
                私も！それから、
                <span className="font-semibold text-lime-500 underline">
                  読書
                </span>
                も好きです。ケンさんはどんな
                <span className="font-semibold text-lime-500 underline">
                  本
                </span>
                を読むの
                <span className="font-semibold text-lime-500 underline">
                  がいちばん
                </span>
                好きですか？{" "}
              </pre>
              <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
                (Watashi mo! Sorekara,{" "}
                <span className="font-semibold text-lime-500 underline">
                  dokusho
                </span>{" "}
                mo suki desu. Ken-san wa donna{" "}
                <span className="font-semibold text-lime-500 underline">
                  hon
                </span>{" "}
                o yomu no{" "}
                <span className="font-semibold text-lime-500 underline">
                  ga ichiban
                </span>{" "}
                suki desu ka?)
              </p>
              <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
                Me too! Also, I like reading books. What kind of books do you
                like to read the most?{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="me-4 text-wrap font-bold text-lime-700 dark:text-gray-400">
              Ken:
            </p>
            <div className="flex flex-col">
              <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
                <span className="font-semibold text-lime-500 underline">
                  実は
                </span>
                、読書はあまり好き
                <span className="font-semibold text-lime-500 underline">
                  じゃない
                </span>
                ですけど、
                <span className="font-semibold text-lime-500 underline">
                  ミステリー
                </span>
                は
                <span className="font-semibold text-lime-500 underline">
                  面白い
                </span>{" "}
                <span className="font-semibold text-lime-500 underline">
                  と思います
                </span>
                。{" "}
              </pre>
              <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
                (
                <span className="font-semibold text-lime-500 underline">
                  Jitsu wa
                </span>
                , dokusho wa amari suki{" "}
                <span className="font-semibold text-lime-500 underline">
                  ja nai
                </span>{" "}
                desu kedo,{" "}
                <span className="font-semibold text-lime-500 underline">
                  misuterii
                </span>{" "}
                wa{" "}
                <span className="font-semibold text-lime-500 underline">
                  omoshiroi
                </span>{" "}
                <span className="font-semibold text-lime-500 underline">
                  to omoimasu
                </span>
                .)
              </p>
              <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
                Actually, I don’t really like reading, but I think mysteries are
                interesting.{" "}
              </p>
            </div>
          </div>
        </div>
        <div id="p3" className="py-6">
          <div className="mb-2 flex flex-row">
            <p className="me-3 text-wrap font-bold text-lime-700 dark:text-gray-400">
              Aiko:
            </p>
            <div className="flex flex-col">
              <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
                <span className="font-semibold text-lime-500 underline">
                  そうなんですね
                </span>
                。
                <span className="font-semibold text-lime-500 underline">
                  ギター
                </span>
                を
                <span className="font-semibold text-lime-500 underline">
                  弾く
                </span>
                のが好き
                <span className="font-semibold text-lime-500 underline">
                  かどうか
                </span>{" "}
                <span className="font-semibold text-lime-500 underline">
                  聞
                </span>
                いてもいいですか？{" "}
              </pre>
              <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
                (
                <span className="font-semibold text-lime-500 underline">
                  Sou nan desu ne
                </span>
                .{" "}
                <span className="font-semibold text-lime-500 underline">
                  Gitaa
                </span>{" "}
                o{" "}
                <span className="font-semibold text-lime-500 underline">
                  hiku
                </span>{" "}
                no ga suki{" "}
                <span className="font-semibold text-lime-500 underline">
                  ka dou ka
                </span>{" "}
                <span className="font-semibold text-lime-500 underline">
                  ki
                </span>
                ite mo ii desu ka?)
              </p>
              <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
                I see. May I ask if you like playing the guitar?{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="me-4 text-wrap font-bold text-lime-700 dark:text-gray-400">
              Ken:
            </p>
            <div className="flex flex-col">
              <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
                はい、
                <span className="font-semibold text-lime-500 underline">
                  大好き
                </span>
                です。私のギターも
                <span className="font-semibold text-lime-500 underline">
                  今度
                </span>
                聞いて
                <span className="font-semibold text-lime-500 underline">
                  ください
                </span>
                。{" "}
              </pre>
              <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
                (Hai,{" "}
                <span className="font-semibold text-lime-500 underline">
                  daisuki
                </span>{" "}
                desu. Watashi no gitaa mo{" "}
                <span className="font-semibold text-lime-500 underline">
                  kondo
                </span>{" "}
                kiite{" "}
                <span className="font-semibold text-lime-500 underline">
                  kudasai
                </span>
                .)
              </p>
              <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
                Yes, I love it. Please listen to my guitar sometime.{" "}
              </p>
            </div>
          </div>
        </div>
        <div id="p4" className="py-6">
          <div className="mb-2 flex flex-row">
            <p className="me-3 text-wrap font-bold text-lime-700 dark:text-gray-400">
              Aiko:
            </p>
            <div className="flex flex-col">
              <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
                ぜひ！
                <span className="font-semibold text-lime-500 underline">
                  ところで
                </span>
                、
                <span className="font-semibold text-lime-500 underline">
                  今日
                </span>
                の
                <span className="font-semibold text-lime-500 underline">
                  天気
                </span>
                は気持ちがいい
                <span className="font-semibold text-lime-500 underline">
                  ですね
                </span>
                。{" "}
              </pre>
              <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
                (Zehi!{" "}
                <span className="font-semibold text-lime-500 underline">
                  Tokoro de
                </span>
                ,{" "}
                <span className="font-semibold text-lime-500 underline">
                  kyou
                </span>{" "}
                no{" "}
                <span className="font-semibold text-lime-500 underline">
                  tenki
                </span>{" "}
                wa kimochi ga ii{" "}
                <span className="font-semibold text-lime-500 underline">
                  desu ne
                </span>
                .)
              </p>
              <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
                Sure! By the way, the weather is nice today, isn’t it?{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="me-4 text-wrap font-bold text-lime-700 dark:text-gray-400">
              Ken:
            </p>
            <div className="flex flex-col">
              <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
                はい、とても
                <span className="font-semibold text-lime-500 underline">
                  気持ちがいい
                </span>
                ですね。
                <span className="font-semibold text-lime-500 underline">
                  春
                </span>
                が大好きです。{" "}
              </pre>
              <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
                (Hai, totemo{" "}
                <span className="font-semibold text-lime-500 underline">
                  kimochi ga ii
                </span>{" "}
                desu ne.{" "}
                <span className="font-semibold text-lime-500 underline">
                  Haru
                </span>{" "}
                ga daisuki desu.)
              </p>
              <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
                Yes, it’s very nice. I love spring.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="mb-3 text-wrap font-normal text-gray-500 dark:text-gray-400">
        Take a moment to read through the dialogue above to get a sense of what
        you{"'"}ll be learning. As you go through the lesson, you{"'"}ll break
        down the phrases, practice the vocabulary, and improve your
        conversational skills step by step!
      </p>
      <p className="mb-1 text-wrap text-gray-500 dark:text-gray-400">
        This dialogue will help you:
      </p>
      <ol className="mx-5 mb-3 list-decimal text-wrap text-gray-500 dark:text-gray-400">
        <li>Understand basic greetings and small talk in Japanese.</li>
        <li>
          Learn how to ask and answer questions about hobbies, preferences, and
          opinions.
        </li>
        <li>
          Discover natural ways to express yourself in everyday conversations.
        </li>
      </ol>
    </div>
  );
};

const PopoverContent = ({ title, meaning, usage, eg }) => {
  return (
    <div className="w-fit max-w-xs font-sans text-sm text-gray-700 dark:text-gray-400 md:max-w-md lg:max-w-lg xl:max-w-xl">
      <div className="border-b border-lime-200 bg-lime-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="divide-y px-3 py-2">
        <div className="flex flex-row">
          <div className="w-fit text-sm font-normal text-gray-400">
            Meaning:
          </div>
          <div className="w-fit text-wrap ps-2 text-sm font-normal">
            {meaning}
          </div>
        </div>
        <div className="flex flex-row pt-2">
          <div className="w-fit text-sm font-normal text-gray-400">Usage:</div>
          <div className="w-fit text-wrap ps-2 text-sm font-normal">
            {usage}
          </div>
        </div>
        <div className="flex flex-row pt-2">
          <div className="w-fit text-sm font-normal text-gray-400">
            Example:
          </div>
          <div className="w-fit text-wrap ps-2 text-sm font-normal">{eg}</div>
        </div>
      </div>
    </div>
  );
};

const FulltextP1 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);
  const incrementVer = () => {
    if (lsScore.VV !== undefined) {
      {
        if (lsScore.VV < 11) {
          setLSScore({ ...lsScore, VV: lsScore.VV + 1 });
        }
      }
    }
  };

  const konnichiwa = (
    <PopoverContent
      title="こんにちは (Konnichiwa)"
      meaning="Hello; Good afternoon."
      usage="A common greeting used during the day."
      eg="こんにちはご機嫌いかがですか？(Konnichi wa gokiken ikaga desu ka?) - How are you feeling today?"
    />
  );
  const mo = (
    <PopoverContent
      title={
        <>
          <span className="text-lime-600">A</span> も (
          <span className="text-lime-600">A</span> mo)
        </>
      }
      meaning="A Too, also A."
      usage="Used to indicate that the speaker shares the same experience or feeling."
      eg="私も行きます (Watashi mo ikimasu) - I will go too."
    />
  );
  const kokode = (
    <PopoverContent
      title="ここで (koko de)"
      meaning="Here."
      usage="Indicates the location where an action occurs."
      eg="ここで待ちます (Koko de machimasu) - I will wait here."
    />
  );
  const sanpo = (
    <PopoverContent
      title="散歩 (sanpo)"
      meaning="A walk; strolling."
      usage="Often used with verbs like する (to do) or 行く (to go)."
      eg="散歩をします (Sanpo o shimasu) - to take a walk."
    />
  );
  const sukidesu = (
    <PopoverContent
      title="好きです (suki desu)"
      meaning="I like it."
      usage="Expresses preference or fondness."
      eg={
        <ul>
          <li>犬が好きです (Inu ga suki desu) - I like dogs.</li>
          <li>
            映画は好きですけど、ドラマは好きじゃないです (Eiga wa suki desu
            kedo, dorama wa suki ja nai desu) - I like movies, but I don’t like
            dramas.
          </li>
        </ul>
      }
    />
  );
  const kedo = (
    <PopoverContent
      title="けど (kedo)"
      meaning=": But. (informal/conversational)"
      usage="A conversational particle to contrast two ideas."
      eg="晴れていますけど、寒いです (Harete imasu kedo, samui desu) - It’s sunny, but cold."
    />
  );
  const heijitsu = (
    <PopoverContent
      title="平日 (heijitsu)"
      meaning="Weekdays."
      usage="Refers to non-weekend days."
      eg="平日は学校があります (Heijitsu wa gakkou ga arimasu) - I have school on weekdays."
    />
  );
  const isogashii = (
    <PopoverContent
      title="忙しい (isogashii)"
      meaning="Busy."
      usage="Used to describe someone who has little free time."
      eg="毎日忙しいです (Mainichi isogashii desu) - I’m busy every day."
    />
  );

  return (
    <div className="my-4 text-sm xl:text-base">
      <h1 className="text-wrap text-3xl font-extrabold dark:text-white md:text-5xl">
        Part 1:
      </h1>
      <br />
      <p className="mb-3 text-wrap font-normal text-gray-500 dark:text-gray-400">
        Below is the first part of the conversation,
      </p>
      <div id="p1-detail" className="py-6">
        <div className="mb-2 flex flex-row">
          <p className="me-3 text-wrap font-bold text-lime-700 dark:text-gray-400">
            Aiko:
          </p>
          <div className="flex flex-col">
            <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
              <Popover content={konnichiwa} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  こんにちは
                </span>
              </Popover>
              ！ あなた
              <Popover content={mo} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-blue-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  も
                </span>
              </Popover>{" "}
              <Popover content={kokode} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-lime-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  ここで
                </span>
              </Popover>
              よく
              <Popover content={sanpo} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  散歩
                </span>
              </Popover>
              をしますか？{" "}
            </pre>
            <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
              (
              <span className="font-semibold text-red-500 underline">
                Konnichiwa
              </span>
              ! Anata{" "}
              <span className="font-semibold text-blue-500 underline">mo</span>{" "}
              <span className="font-semibold text-lime-500 underline">
                koko de
              </span>{" "}
              yoku{" "}
              <span className="font-semibold text-red-500 underline">
                sanpo
              </span>{" "}
              o shimasu ka?)
            </p>
            <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
              Hello! Do you often take walks here too?{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <p className="me-4 text-wrap font-bold text-lime-700 dark:text-gray-400">
            Ken:
          </p>
          <div className="flex flex-col">
            <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
              こんにちは、そうですね。週末に散歩をするのが
              <Popover content={sukidesu} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-lime-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  好きです
                </span>
              </Popover>{" "}
              <Popover content={kedo} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-blue-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  けど
                </span>
              </Popover>
              、
              <Popover content={heijitsu} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  平日
                </span>
              </Popover>
              は
              <Popover content={isogashii} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  忙し
                </span>
              </Popover>
              くてできません。{" "}
            </pre>
            <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
              (Konnichiwa, sou desu ne. Shuumatsu ni sanpo o suru no ga{" "}
              <span className="font-semibold text-lime-500 underline">
                suki desu
              </span>{" "}
              <span className="font-semibold text-blue-500 underline">
                kedo
              </span>
              ,{" "}
              <span className="font-semibold text-red-500 underline">
                heijitsu
              </span>{" "}
              wa{" "}
              <span className="font-semibold text-red-500 underline">
                isogashi
              </span>
              kute dekimasen.)
            </p>
            <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
              Hello, yes. I like taking walks on weekends, but I’m too busy
              during weekdays.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FulltextP2 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);
  const incrementVer = () => {
    if (lsScore.VV !== undefined) {
      {
        if (lsScore.VV < 11) {
          setLSScore({ ...lsScore, VV: lsScore.VV + 1 });
        }
      }
    }
  };

  const dokusho = (
    <PopoverContent
      title="読書 (Dokusho)"
      meaning="読Reading (書books)"
      usage="Refers to the act of reading for leisure or study."
      eg="読書が趣味です。(Dokusho ga shumi desu.) - Reading is my hobby."
    />
  );
  const hon = (
    <PopoverContent
      title="本 (Hon)"
      meaning="Book(s)"
      usage="A common noun used for referring to books."
      eg="本を読みます。(Hon o yomimasu.) - I read books."
    />
  );
  const misuterii = (
    <PopoverContent
      title="ミステリー (Misuterii)"
      meaning="Mystery (genre)"
      usage="Used to describe a genre of books or media that focuses on suspense or solving a puzzle."
      eg="ミステリーが好きです。(Misuterii ga suki desu.) - I like mysteries."
    />
  );
  const omoshiroi = (
    <PopoverContent
      title="面白い (Omoshiroi)"
      meaning="Interesting; fun"
      usage="Describes something enjoyable or intriguing."
      eg="この本は面白いです。(Kono hon wa omoshiroi desu.) - This book is interesting."
    />
  );
  const gaichiban = (
    <PopoverContent
      title="がいちばん (Ga ichiban)"
      meaning={
        <>
          • “The most ~“ or “the best ~“
          <br />• Used to indicate a superlative degree, expressing that
          something is the most preferred, liked, or significant in a group or
          category.
        </>
      }
      usage="It compares multiple items and highlights one as being the 'most' or 'best'."
      eg={
        <>
          りんごがいちばん好きです。 (Ringo ga ichiban suki desu.) - I like
          apples the most.
          <br />
          この映画がいちばん面白いです。 (Kono eiga ga ichiban omoshiroi desu.)
          - This movie is the most interesting.
        </>
      }
    />
  );
  const toomoimasu = (
    <PopoverContent
      title="と思います (To omoimasu)"
      meaning="I think (that ...)"
      usage="Indicates personal opinion or belief."
      eg="この映画は面白いと思います。(Kono eiga wa omoshiroi to omoimasu.) - I think this movie is interesting."
    />
  );
  const jitsuwa = (
    <PopoverContent
      title="実は (Jitsu wa)"
      meaning="Actually; to be honest"
      usage="Used to introduce a contrasting or unexpected fact."
      eg="実は、私は猫が好きじゃないです。(Jitsu wa, watashi wa neko ga suki ja nai desu.) - Actually, I don't like cats."
    />
  );
  const janai = (
    <PopoverContent
      title={
        <>
          好き<span className="text-lime-600">じゃない</span>です (Suki{" "}
          <span className="text-lime-600">ja nai</span> desu)
        </>
      }
      meaning="Don't like"
      usage="The negative form of '好きです' to indicate dislike."
      eg="犬が好きじゃないです。(Inu ga suki ja nai desu.) - I don’t like dogs."
    />
  );

  return (
    <div className="my-4 text-sm xl:text-base">
      <h1 className="text-wrap text-3xl font-extrabold dark:text-white md:text-5xl">
        Part 2:
      </h1>
      <br />
      <p className="mb-3 text-wrap font-normal text-gray-500 dark:text-gray-400">
        Below is the second part of the conversation,
      </p>
      <div id="p2-detail" className="py-6">
        <div className="mb-2 flex flex-row">
          <p className="me-3 text-wrap font-bold text-lime-700 dark:text-gray-400">
            Aiko:
          </p>
          <div className="flex flex-col">
            <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
              私も！それから、
              <Popover content={dokusho} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  読書
                </span>
              </Popover>
              も好きです。ケンさんはどんな
              <Popover content={hon} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  本
                </span>
              </Popover>
              を読むの
              <Popover content={gaichiban} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-lime-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  がいちばん
                </span>
              </Popover>
              好きですか？{" "}
            </pre>
            <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
              (Watashi mo! Sorekara,{" "}
              <span className="font-semibold text-red-500 underline">
                dokusho
              </span>{" "}
              mo suki desu. Ken-san wa donna{" "}
              <span className="font-semibold text-red-500 underline">hon</span>{" "}
              o yomu no{" "}
              <span className="font-semibold text-lime-500 underline">
                ga ichiban
              </span>{" "}
              suki desu ka?)
            </p>
            <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
              Me too! Also, I like reading books. What kind of books do you like
              to read the most?{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <p className="me-4 text-wrap font-bold text-lime-700 dark:text-gray-400">
            Ken:
          </p>
          <div className="flex flex-col">
            <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
              <Popover content={jitsuwa} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-blue-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  実は
                </span>
              </Popover>
              、読書はあまり好き
              <Popover content={janai} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-blue-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  じゃない
                </span>
              </Popover>
              ですけど、
              <Popover content={misuterii} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  ミステリー
                </span>
              </Popover>
              は
              <Popover content={omoshiroi} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  面白い
                </span>
              </Popover>{" "}
              <Popover content={toomoimasu} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-lime-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  と思います
                </span>
              </Popover>
              。{" "}
            </pre>
            <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
              (
              <span className="font-semibold text-blue-500 underline">
                Jitsu wa
              </span>
              , dokusho wa amari suki{" "}
              <span className="font-semibold text-blue-500 underline">
                ja nai
              </span>{" "}
              desu kedo,{" "}
              <span className="font-semibold text-red-500 underline">
                misuterii
              </span>{" "}
              wa{" "}
              <span className="font-semibold text-red-500 underline">
                omoshiroi
              </span>{" "}
              <span className="font-semibold text-lime-500 underline">
                to omoimasu
              </span>
              .)
            </p>
            <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
              Actually, I don’t really like reading, but I think mysteries are
              interesting.{" "}
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

const FulltextP3 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);
  const incrementVer = () => {
    if (lsScore.VV !== undefined) {
      {
        if (lsScore.VV < 11) {
          setLSScore({ ...lsScore, VV: lsScore.VV + 1 });
        }
      }
    }
  };

  const gitaa = (
    <PopoverContent
      title="ギター (gitaa)"
      meaning="Guitar."
      usage="Refers to the musical instrument."
      eg="ギターを弾く (Gitaa o hiku) – to play the guitar."
    />
  );
  const hiku = (
    <PopoverContent
      title="弾く (Hiku)"
      meaning="To play (a string instrument, like a guitar or piano)."
      usage="Used for playing instruments such as the guitar, violin, etc."
      eg="ピアノを弾くのが好きです。(Piano o hiku no ga suki desu.) -	I like playing the piano."
    />
  );
  const kondo = (
    <PopoverContent
      title="今度 (Kondo)"
      meaning="Next time; sometime."
      usage="Refers to a future time, often used in the context of inviting someone to do something in the future."
      eg="今度、一緒に映画を見ましょう。(Kondo, issho ni eiga o mimashou.) - Let’s watch a movie together next time."
    />
  );
  const sounandesune = (
    <PopoverContent
      title="そうなんですね (Sou nan desu ne)"
      meaning="I see; I understand."
      usage="Used when acknowledging or expressing understanding of something someone else said."
      eg="そうなんですね。私は知らなかったです。(Sou nan desu ne. Watashi wa shiranakatta desu.) - I see. I didn’t know that."
    />
  );
  const daisuki = (
    <PopoverContent
      title="大好き (Daisuki)"
      meaning="Love (something); to like very much."
      usage="Used to express a strong liking or love for something or someone."
      eg="私は映画が大好きです。(Watashi wa eiga ga daisuki desu.) - I love movies."
    />
  );
  const kudasai = (
    <PopoverContent
      title="ください (kudasai)"
      meaning="'Please' (a polite request)"
      usage="Attached to a verb stem to politely ask someone to do something."
      eg="本をください。(Hon o kudasai.) - Please give me the book."
    />
  );
  const kadouka = (
    <PopoverContent
      title="かどうか (ka dou ka)"
      meaning="Guitar."
      usage={
        <>
          • means {"whether or not"} and is used to express uncertainty or ask
          for confirmation about a yes/no question.
          <br /> • It connects a statement or question to another clause.
        </>
      }
      eg="彼が来るかどうか分かりません。(Kare ga kuru ka dou ka wakarimasen.) - I don’t know whether he will come or not.
"
    />
  );

  return (
    <div className="my-4 text-sm xl:text-base">
      <h1 className="text-wrap text-3xl font-extrabold dark:text-white md:text-5xl">
        Part 3:
      </h1>
      <br />
      <p className="mb-3 text-wrap font-normal text-gray-500 dark:text-gray-400">
        Below is the third part of the conversation,
      </p>
      <div id="p3-detail" className="py-6">
        <div className="mb-2 flex flex-row">
          <p className="me-3 text-wrap font-bold text-lime-700 dark:text-gray-400">
            Aiko:
          </p>
          <div className="flex flex-col">
            <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
              <Popover content={sounandesune} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-lime-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  そうなんですね
                </span>
              </Popover>
              。
              <Popover content={gitaa} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  ギター
                </span>
              </Popover>
              を
              <Popover content={hiku} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  弾く
                </span>
              </Popover>
              のが好き
              <Popover content={kadouka} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-blue-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  かどうか
                </span>
              </Popover>{" "}
              聞いてもいいですか？{" "}
            </pre>
            <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
              (
              <span className="font-semibold text-lime-500 underline">
                Sou nan desu ne
              </span>
              .{" "}
              <span className="font-semibold text-red-500 underline">
                Gitaa
              </span>{" "}
              o{" "}
              <span className="font-semibold text-red-500 underline">hiku</span>{" "}
              no ga suki{" "}
              <span className="font-semibold text-blue-500 underline">
                ka dou ka
              </span>{" "}
              kiite mo ii desu ka?)
            </p>
            <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
              I see. May I ask if you like playing the guitar?{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <p className="me-4 text-wrap font-bold text-lime-700 dark:text-gray-400">
            Ken:
          </p>
          <div className="flex flex-col">
            <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
              はい、
              <Popover content={daisuki} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-lime-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  大好き
                </span>
              </Popover>
              です。私のギターも
              <Popover content={kondo} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  今度
                </span>
              </Popover>
              聞いて
              <Popover content={kudasai} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-blue-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  ください
                </span>
              </Popover>
              。{" "}
            </pre>
            <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
              (Hai,{" "}
              <span className="font-semibold text-lime-500 underline">
                daisuki
              </span>{" "}
              desu. Watashi no gitaa mo{" "}
              <span className="font-semibold text-red-500 underline">
                kondo
              </span>{" "}
              kiite{" "}
              <span className="font-semibold text-blue-500 underline">
                kudasai
              </span>
              .)
            </p>
            <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
              Yes, I love it. Please listen to my guitar sometime.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FulltextP4 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);
  const incrementVer = () => {
    if (lsScore.VV !== undefined) {
      {
        if (lsScore.VV < 11) {
          setLSScore({ ...lsScore, VV: lsScore.VV + 1 });
        }
      }
    }
  };

  const kyou = (
    <>
      <PopoverContent
        title="今日 (Kyou)"
        meaning="Today."
        usage="Refers to the current day."
        eg="今日、何をしますか？ (Kyou, nani o shimasu ka?) - What are you doing today?"
      />
      <PopoverContent
        title="今 (ima)"
        meaning="Now; at this moment."
        usage={
          <>
            Refers to the present time or a current situation. It can be used to
            indicate something happening right now, or to provide context for
            something that is currently relevant.
            <br />
            <img src="/images/ima.png" alt="ima-usages" />
          </>
        }
        eg="今、日本に住んでいます。(Ima, Nihon ni sundeimasu.) - I am living in Japan at the moment."
      />
    </>
  );
  const tenki = (
    <PopoverContent
      title="天気 (Tenki)"
      meaning="Weather."
      usage="Refers to the atmospheric conditions, used commonly in daily conversations."
      eg="天気がいいですね。(Tenki ga ii desu ne.) - The weather is nice, isn’t it?"
    />
  );
  const haru = (
    <PopoverContent
      title="春 (Haru)"
      meaning="Spring (season)."
      usage="Refers to the season of spring."
      eg="春は花がきれいです。(Haru wa hana ga kirei desu.) - The flowers are beautiful in spring."
    />
  );
  const kimochigaii = (
    <PopoverContent
      title="気持ちがいい (Kimochi ga ii)"
      meaning="Feels good."
      usage="This phrase is used to describe something that feels good or is pleasant, typically in reference to weather, environments, or sensations."
      eg="外の空気は気持ちがいいです。(Soto no kuuki wa kimochi ga ii desu.) - The outside air feels nice."
    />
  );
  const tokorode = (
    <PopoverContent
      title="ところで (Tokoro de)"
      meaning="By the way."
      usage="A phrase used to change the subject or introduce a new topic in a conversation."
      eg="ところで、今日は何をしますか？ (Tokoro de, kyou wa nani o shimasu ka?) - By the way, what will you do today?"
    />
  );
  const desune = (
    <PopoverContent
      title="ですね (Desu ne)"
      meaning="Isn’t it? / Don’t you think?"
      usage="A sentence-ending particle used to seek agreement or confirmation from the listener, often used in casual conversations."
      eg="このレストランはおいしいですね。(Kono resutoran wa oishii desu ne.) - This restaurant is delicious, isn’t it?"
    />
  );

  return (
    <div className="my-4 text-sm xl:text-base">
      <h1 className="text-wrap text-3xl font-extrabold dark:text-white md:text-5xl">
        Part 4:
      </h1>
      <br />
      <p className="mb-3 text-wrap font-normal text-gray-500 dark:text-gray-400">
        Below is the last part of the conversation,
      </p>
      <div id="p4-detail" className="py-6">
        <div className="mb-2 flex flex-row">
          <p className="me-3 text-wrap font-bold text-lime-700 dark:text-gray-400">
            Aiko:
          </p>
          <div className="flex flex-col">
            <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
              ぜひ！
              <Popover content={tokorode} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-blue-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  ところで
                </span>
              </Popover>
              、
              <Popover content={kyou} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  今日
                </span>
              </Popover>
              の
              <Popover content={tenki} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  天気
                </span>
              </Popover>
              は気持ちがいい
              <Popover content={desune} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-blue-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  ですね
                </span>
              </Popover>
              。{" "}
            </pre>
            <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
              (Zehi!{" "}
              <span className="font-semibold text-blue-500 underline">
                Tokoro de
              </span>
              ,{" "}
              <span className="font-semibold text-red-500 underline">kyou</span>{" "}
              no{" "}
              <span className="font-semibold text-red-500 underline">
                tenki
              </span>{" "}
              wa kimochi ga ii{" "}
              <span className="font-semibold text-blue-500 underline">
                desu ne
              </span>
              .)
            </p>
            <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
              Sure! By the way, the weather is nice today, isn’t it?{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <p className="me-4 text-wrap font-bold text-lime-700 dark:text-gray-400">
            Ken:
          </p>
          <div className="flex flex-col">
            <pre className="text-wrap font-semibold text-lime-700 dark:text-lime-400">
              はい、とても
              <Popover content={kimochigaii} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-lime-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  気持ちがいい
                </span>
              </Popover>
              ですね。
              <Popover content={haru} placement="bottom">
                <span
                  onClick={incrementVer}
                  className="font-semibold text-red-500 underline transition-all hover:cursor-pointer hover:text-base hover:decoration-2 xl:hover:text-lg"
                >
                  春
                </span>
              </Popover>
              が大好きです。{" "}
            </pre>
            <p className="text-wrap font-normal italic text-gray-500 dark:text-gray-400">
              (Hai, totemo{" "}
              <span className="font-semibold text-lime-500 underline">
                kimochi ga ii
              </span>{" "}
              desu ne.{" "}
              <span className="font-semibold text-red-500 underline">Haru</span>{" "}
              ga daisuki desu.)
            </p>
            <p className="text-wrap font-medium text-gray-700 dark:text-gray-400">
              Yes, it’s very nice. I love spring.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Fulltext, FulltextP1, FulltextP2, FulltextP3, FulltextP4 };

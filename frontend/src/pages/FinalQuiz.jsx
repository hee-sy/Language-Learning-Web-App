import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Jap = ({ children }) => <span className="text-gray-900">{children}</span>;
const Romanji = ({ children }) => (
  <span className="font-normal italic text-gray-500">{children}</span>
);

const FinalQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [curr, setCurr] = useState(1);
  const pages = [{ page: 1 }, { page: 2 }, { page: 3 }];

  const questionsRef = useRef([]);
  const questions1 = [
    {
      num: 1,
      question: (
        <>
          <p>Fill in the blank:</p>
          <p>
            <Jap>______！ここで 散歩を するのが 好きですか？</Jap>
          </p>
          <p>
            <Romanji>
              (______! Koko de sanpo o suru no ga suki desu ka?)
            </Romanji>
          </p>
          <p>______! Do you like taking walks here?</p>
        </>
      ),
      a: "さようなら (Sayōnara)",
      b: "またね (Mata ne)",
      c: "こんにちは (Konnichiwa)",
      d: "ありがとう (Arigatō)",
    },
    {
      num: 2,
      question: "Which of the following means “taking walks”?",
      a: "読書 (Dokusho)",
      b: "散歩 (Sanpo)",
      c: "弾く (Hiku)",
      d: "好きです (suki desu)",
    },
    {
      num: 3,
      question: '"平日 (Heijitsu)" refers to',
      a: "Weekend",
      b: "Weekdays",
      c: "Holidays",
      d: "Special occasions",
    },
    {
      num: 4,
      question: (
        <>
          <p>Fill in the blank:</p>
          <p>
            <Jap>今、私は とても __________ です。</Jap>
          </p>
          <p>
            <Romanji>(Ima, watashi wa totemo __________desu.)</Romanji>
          </p>
          <p>I am very busy right now.</p>
        </>
      ),
      a: "好き(suki)",
      b: "面白い (omoshiroi)",
      c: "嬉しい (ureshii)",
      d: "忙しい (isogashii)",
    },
    {
      num: 5,
      question: (
        <>
          <p>Can you guess the meaning of the following sentence?</p>
          <p>
            <Jap>読書は 知識を 増やすために とても 大切だ と思います。</Jap>
          </p>
          <p>
            <Romanji>
              (Dokusho wa chishiki o fuyasu tame ni totemo taisetsu da to
              omoimasu.)
            </Romanji>
          </p>
        </>
      ),
      a: "Studying is very important for increasing knowledge.",
      b: "I think studying is very important for increasing knowledge.",
      c: "I think reading is very important for increasing knowledge.",
      d: "Reading is very important for increasing knowledge.",
    },
    {
      num: 6,
      question: '"本 (Hon)" means:',
      a: "Book",
      b: "Pen",
      c: "Bag",
      d: "Tree",
    },
    {
      num: 7,
      question: 'What does "ミステリー (Misuterii)" refer to?',
      a: "Adventure",
      b: "Comedy",
      c: "Mystery",
      d: "Drama",
    },
    {
      num: 8,
      question: (
        <>
          <p>Fill in the blank.</p>
          <p>
            <Jap>
              この 映画は ストーリーが 複雑 だけど、とても______と思います。
            </Jap>
          </p>
          <p>
            <Romanji>
              (Kono eiga wa sutōrī ga fukuzatsu da kedo, totemo ______ to
              omoimasu.)
            </Romanji>
          </p>
          <p>
            This movie’s story is complex, but I think it’s very interesting.
          </p>
        </>
      ),
      a: "面白い (Omoshiroi)",
      b: "難しい (Muzukashī)",
      c: "易しい (Yasashī)",
      d: "つまらない (Tsumaranai)",
    },
    {
      num: 9,
      question: (
        <>
          <p>Fill in the blank.</p>
          <p>
            <Jap>私は __________ を 弾くの が 好きです。</Jap>
          </p>
          <p>
            <Romanji>(Watashi wa __________ o hajiku no ga sukidesu.)</Romanji>
          </p>
          <p>I like playing the guitar.</p>
        </>
      ),
      a: "ピアノ (piano)",
      b: "ギター (gitaa)",
      c: "フルート (furuuto)",
      d: "ドラム (doramu)",
    },
    {
      num: 10,
      question: 'What does "弾く (Hiku)" mean?',
      a: "To sing",
      b: "To play (a string instrument)",
      c: "To dance",
      d: "To listen",
    },
  ];
  const questions2 = [
    {
      num: 11,
      question: '"今度 (Kondo)" means:',
      a: "Later",
      b: "Next time",
      c: "Yesterday",
      d: "Last time",
    },
    {
      num: 12,
      question: (
        <>
          <p>Fill in the blank.</p>
          <p>
            <Jap>______、 友達と映画を見ます。</Jap>
          </p>
          <p>
            <Romanji>(____, tomodachi to eiga o mimasu.)</Romanji>
          </p>
          <p>Today, I am watching a movie with a friend.</p>
        </>
      ),
      a: "今回 (konkai)",
      b: "今朝 (kesa)",
      c: "今度 (kondo)",
      d: "今日 (kyou)",
    },
    {
      num: 13,
      question: (
        <>
          <p>Can you guess the meaning of the following sentence?</p>
          <p>
            <Jap>今は 忙しい けど、夜 に なったら 一緒に 話しましょう。</Jap>
          </p>
          <p>
            <Romanji>
              (Ima wa isogashii kedo, yoru ni nattara issho ni hanashimashou.)
            </Romanji>
          </p>
        </>
      ),
      a: "I’m tired now, but let’s talk together tonight.",
      b: "I’m busy now, but let’s talk together tonight.",
      c: "I will be tired, but let’s talk together tonight.",
      d: "I will be busy, but let’s talk together tonight.",
    },
    {
      num: 14,
      question: (
        <>
          <p>Can you guess the meaning of the following sentence?</p>
          <p>
            <Jap>今日の 天気は 良くない から, …</Jap>
          </p>
          <p>
            <Romanji>(Kyō no tenki wa yokunai kara, …)</Romanji>
          </p>
        </>
      ),
      a: "The temperature isn’t good today, so…",
      b: "The sky doesn’t look good today, so…",
      c: "My feeling isn’t good today, so…",
      d: "The weather isn’t good today, so…",
    },
    {
      num: 15,
      question: (
        <>
          <p>Can you guess the meaning of the following sentence?</p>
          <p>
            <Jap>
              春に なると、桜の 花が 咲いて 街が とても 美しく なります。
            </Jap>
          </p>
          <p>
            <Romanji>
              (Haru ni naru to, sakura no hana ga saite machi ga totemo
              utsukushiku narimasu.)
            </Romanji>
          </p>
        </>
      ),
      a: "When the season comes, cherry blossoms bloom, and the town becomes very beautiful.",
      b: "When tomorrow comes, cherry blossoms bloom, and the town becomes very beautiful.",
      c: "When spring comes, cherry blossoms bloom, and the town becomes very beautiful.",
      d: "When the time comes, cherry blossoms bloom, and the town becomes very beautiful.",
    },
    {
      num: 16,
      question: (
        <>
          <p>Can you guess the meaning of the following sentence?</p>
          <p>
            <Jap>ここで 少し 休みましょう。</Jap>
          </p>
          <p>
            <Romanji>(Koko de sukoshi yasumimashou.)</Romanji>
          </p>
        </>
      ),
      a: "Let’s rest there for a while.",
      b: "Let’s rest here for a while.",
      c: "Let’s rest now for a while.",
      d: "Let’s rest inside for a while.",
    },
    {
      num: 17,
      question: (
        <>
          <p>Fill in the blank.</p>
          <p>
            <Jap>私は 日本料理が __________。</Jap>
          </p>
          <p>
            <Romanji>(Watashi wa nihonryōri ga _____.)</Romanji>
          </p>
          <p>I like Japanese food.</p>
        </>
      ),
      a: "嫌いです (kirai desu)",
      b: "上手です (jouzu desu)",
      c: "好きです (suki desu)",
      d: "楽しいです (tanoshii desu)",
    },
    {
      num: 18,
      question: (
        <>
          <p>
            <Jap>A: 日本料理で 何が いちばん 好きですか？</Jap>
          </p>
          <p>
            <Romanji>(Nihon ryōri de nani ga ichiban suki desu ka?)</Romanji>
          </p>
          <p>
            <Jap>B: _______</Jap>
          </p>
          <br />
          <p>Which of the following will most likely be B’s response?</p>
        </>
      ),
      a: "お寿司が いちばん 好きです。(Osushi ga ichiban suki desu.)",
      b: "寿司が 全然 好きじゃない。 (Sushi ga zenzen sukijanai.)",
      c: "寿司が 好きです。 (Sushi ga sukidesu.)",
      d: "あなたが 好きです。 (Anata ga sukidesu.)",
    },
    {
      num: 19,
      question: (
        <>
          <p>
            <Jap>A: 明日の 天気は どう 思いますか？</Jap>
          </p>
          <p>
            <Romanji>(Ashita no tenki wa dō omoimasu ka?)</Romanji>
          </p>
          <p>What do you think about tomorrow’s weather?</p>
          <p>
            <Jap>B: 雨が 降ると 思います。</Jap>
          </p>
          <p>
            <Romanji>(Ame ga furu to omoimasu.)</Romanji>
          </p>
          <br />
          <p>What did B say?</p>
        </>
      ),
      a: "I don’t know if it will rain.",
      b: "I’m sure that it will rain.",
      c: "I think it will rain.",
      d: "They say it will rain.",
    },
    {
      num: 20,
      question: (
        <>
          <p>
            <Jap>A: 昨日、京都に 行きました。とても 楽しかった です！</Jap>
          </p>
          <p>
            <Romanji>
              (Kinō, Kyōto ni ikimashita. Totemo tanoshikatta desu!)
            </Romanji>
          </p>
          <p>Yesterday, I went to Kyoto. It was so fun!</p>
          <p>
            <Jap>B: ______。私も 行きたい です。</Jap>
          </p>
          <p>
            <Romanji>(______. Watashi mo ikitai desu.)</Romanji>
          </p>
          <p>I see. I want to go too.</p>
        </>
      ),
      a: "そう なん ですね  (Sou nan desu ne)",
      b: "それは 正しい (Sore wa tadashī)",
      c: "ところ で (Tokoro de)",
      d: "本当に (Hontoni)",
    },
  ];
  const questions3 = [
    {
      num: 21,
      question: (
        <>
          <p>
            <Jap>B: ジャズが 大好き です！</Jap>
          </p>
          <p>
            <Romanji>(Jazu ga daisuki desu!)</Romanji>
          </p>
          <br />
          <p>What did B say?</p>
        </>
      ),
      a: "I love jazz!",
      b: "I hate jazz!",
      c: "I don’t like jazz!",
      d: "I only like jazz!",
    },
    {
      num: 22,
      question: (
        <>
          <p>
            <Jap>B: はい、風が 涼しくて 気持ちがいい です。</Jap>
          </p>
          <p>
            <Romanji>(Hai, kaze ga suzushikute kimochi ga ii desu.)</Romanji>
          </p>
          <br />
          <p>What did B say?</p>
        </>
      ),
      a: "Yes, the breeze is cool and I like it.",
      b: "Yes, the breeze is cool and feels weird.",
      c: "Yes, the breeze is cool and feels nice.",
      d: "Yes, the breeze is cool and I really love it .",
    },
    {
      num: 23,
      question: (
        <>
          <p>
            <Jap>A: ピアノも 弾けます か？</Jap>
          </p>
          <p>
            <Romanji>(Piano mo hajikemasu ka?)</Romanji>
          </p>
          <br />
          <p>What did A say?</p>
        </>
      ),
      a: "Can you play the piano please?",
      b: "Can you play the piano now?",
      c: "Can you play the piano too?",
      d: "Can you stop playing the piano?",
    },
    {
      num: 24,
      question: (
        <>
          <p>Fill in the blank.</p>
          <p>
            <Jap>行きたい______、時間が ありません。</Jap>
          </p>
          <p>
            <Romanji>(Yukitai ______, jikan ga arimasen.)</Romanji>
          </p>
          <p>I want to go, ____ I don’t have time.</p>
        </>
      ),
      a: "けど (kedo)",
      b: "しかし(shikashi)",
      c: "それで (sore de)",
      d: "それでも(soredemo)",
    },
    {
      num: 25,
      question: (
        <>
          <p>Fill in the blank.</p>
          <p>
            <Jap>A: 最近、元気が ない みたい だけど、大丈夫？</Jap>
          </p>
          <p>
            <Romanji>(Saikin, genki ga nai mitai dakedo, daijoubu?)</Romanji>
          </p>
          <p>You seem a bit down lately. Are you okay?</p>
          <p>
            <Jap>B: 実は、仕事が すごく 忙しくて 疲れて いるんだ。</Jap>
          </p>
          <p>
            <Romanji>
              (Jitsu wa, shigoto ga sugoku isogashikute tsukarete iru n da.)
            </Romanji>
          </p>
          <p>______, I’ve been really busy with work and I’m tired.</p>
        </>
      ),
      a: "Actually",
      b: "After all",
      c: "Your're right",
      d: "Recently",
    },
    {
      num: 26,
      question: (
        <>
          <p>
            <Jap>A: この ペンは 青 ですか？</Jap>
          </p>
          <p>
            <Romanji>(Kono pen wa ao desu ka?)</Romanji>
          </p>
          <p>Is this pen blue?</p>
          <p>
            <Jap>B: __________</Jap>
          </p>
          <p>No, it’s not blue. It’s black.</p>
          <br />
          <p>What did B say?</p>
        </>
      ),
      a: "いいえ、青 じゃない です。黒 です。(Iie, ao ja nai desu. Kuro desu.)",
      b: "いいえ、黒で はなく 青です。(Īe, kurode wanaku aodesu)",
      c: "いいえ、青です。そして 黒です。(Īe, aodesu. Soshite kurodesu)",
      d: "いいえ、青 でも 黒 でも ありません。(Īe, ao demo kuro demo arimasen)",
    },
    {
      num: 27,
      question: (
        <>
          <p>Fill in the blank.</p>
          <p>
            <Jap>少し 待って __________。 </Jap>
          </p>
          <p>
            <Romanji>(Sukoshi matte __________.)</Romanji>
          </p>
          <p>______wait for a moment.</p>
        </>
      ),
      a: "ください (kudasai)",
      b: "が いちばん (ga ichiban)",
      c: "気持ち が いい (kimochi ga ii) ",
      d: "です ね. (desu ne.)",
    },
    {
      num: 28,
      question: (
        <>
          <p>Fill in the blank.</p>
          <p>
            <Jap>彼が パーティーに 来る______、まだ 分からない ので、… </Jap>
          </p>
          <p>
            <Romanji>
              (Kare ga pātii ni kuru______, mada wakaranai node, …)
            </Romanji>
          </p>
          <p>I still don’t know whether he will come to the party or not,</p>
        </>
      ),
      a: "ください (kudasai)",
      b: "けど (kedo)",
      c: "も (mo)",
      d: "かどうか (ka dou ka)",
    },
    {
      num: 29,
      question: (
        <>
          <p>Fill in the blank.</p>
          <p>
            <Jap>ところで、来週 の 予定は どうです か？ </Jap>
          </p>
          <p>
            <Romanji>(Tokorode, raishū no yotei wa dōdesu ka?)</Romanji>
          </p>
          <p>______, how are your plans for next week?</p>
        </>
      ),
      a: "Therefore",
      b: "However",
      c: "Also",
      d: "By the way",
    },
    {
      num: 30,
      question: (
        <>
          <p>Fill in the blank.</p>
          <p>
            <Jap>A: この 公園、すごく 広い______。</Jap>
          </p>
          <p>
            <Romanji>(Kono kouen, sugoku hiroi ______.)</Romanji>
          </p>
          <p>This park is really spacious, isn’t it?</p>
          <p>
            <Jap>B: そう です ね。</Jap>
          </p>
          <p>
            <Romanji>(Sou desu ne.)</Romanji>
          </p>
          <p>That’s right.</p>
        </>
      ),
      a: "かどうか (Ka dou ka)",
      b: "ですね (desu ne)",
      c: "です(desu)",
      d: "けど (kedo)",
    },
  ];

  const [ans, setAns] = useState(() => {
    const arr = [];
    for (let i = 0; i < 30; i++) {
      arr[i] = "";
    }
    return arr;
  }); //initialize ans[] with 44 empty strings

  const CountDownTime = 900;
  const [timeLeft, setTimeLeft] = useState(CountDownTime); // Timer starts at 15mins (900seconds)

  // Timer to increment Seq
  const resetTimer = () => {
    setTimeLeft(CountDownTime); // Reset timer
  };
  // Convert timeLeft into mm:ss format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    // Set up the interval for the countdown
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    // When timer reaches 0, increment seq and reset the timer
    if (timeLeft === 0) {
      // navigate to result page
      navigate(`/${id}/FinalQuiz/results/${ans}`, {
        replace: true,
      });
    }
    // console.log(timeLeft);
  }, [timeLeft]);

  //catch the back button and if pressed, clear the stack
  useEffect(() => {
    window.onpopstate = () => {
      navigate(`/${id}/FinalQuiz`, { replace: true });
    };
  }, [id, navigate]);

  //function to iterate over questions on current page and set the checked state based on ans[]
  const checkOptions = () => {
    questionsRef.current.forEach((ques) => {
      const a = document.getElementById(`option-a-${ques.num.toString()}`);
      const b = document.getElementById(`option-b-${ques.num.toString()}`);
      const c = document.getElementById(`option-c-${ques.num.toString()}`);
      const d = document.getElementById(`option-d-${ques.num.toString()}`);
      if (ans[ques.num - 1] === "a") {
        a.checked = true;
      } else if (ans[ques.num - 1] === "b") {
        b.checked = true;
      } else if (ans[ques.num - 1] === "c") {
        c.checked = true;
      } else if (ans[ques.num - 1] === "d") {
        d.checked = true;
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
      questionsRef.current = questions1;
      break;
    case 2:
      questionsRef.current = questions2;
      break;
    case 3:
      questionsRef.current = questions3;
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
            Final Quiz
          </span>
          <span className="hidden text-xs font-medium text-lime-700 dark:text-white md:block">
            Time left: {formatTime(timeLeft)}
          </span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700 md:w-auto">
          <div
            className="h-2.5 rounded-full bg-lime-600"
            style={{ width: `${curr * 33.33}%` }}
          />
        </div>
        <span className="text-xs font-medium text-lime-700 dark:text-white md:hidden">
          Time left: {formatTime(timeLeft)}
        </span>
      </div>

      <div id="questions" className="mx-5 mt-20 flex flex-col">
        {questionsRef.current.map((ques) => (
          <div
            id={`question${ques.num.toString()}`}
            key={ques.num.toString()}
            className="my-8"
          >
            <div className="flex flex-row items-start">
              <span className="me-2 text-sm font-semibold text-gray-900 dark:text-white">
                {ques.num}
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {ques.question}
              </span>
            </div>
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
                      A) {ques.a}
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
                      B) {ques.b}
                    </label>
                  </div>
                </li>
                <li className="w-full rounded-t-lg border-b border-gray-200 hover:bg-gray-100 has-[:checked]:bg-lime-100 dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id={`option-c-${ques.num.toString()}`}
                      type="radio"
                      required
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-lime-600 focus:outline-none focus:ring-0 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      name={`option-${ques.num.toString()}`}
                      value="c"
                      onClick={(e) => {
                        //store the selected option in ans[]
                        const index = ques.num - 1;
                        const newArr = [...ans];
                        newArr[index] = e.target.value;
                        setAns(newArr);
                      }}
                    />
                    <label
                      htmlFor={`option-c-${ques.num.toString()}`}
                      className="checked: ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      C) {ques.c}
                    </label>
                  </div>
                </li>
                <li className="w-full rounded-t-lg border-b border-gray-200 hover:bg-gray-100 has-[:checked]:bg-lime-100 dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id={`option-d-${ques.num.toString()}`}
                      type="radio"
                      required
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-lime-600 focus:outline-none focus:ring-0 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      name={`option-${ques.num.toString()}`}
                      value="d"
                      onClick={(e) => {
                        //store the selected option in ans[]
                        const index = ques.num - 1;
                        const newArr = [...ans];
                        newArr[index] = e.target.value;
                        setAns(newArr);
                      }}
                    />
                    <label
                      htmlFor={`option-d-${ques.num.toString()}`}
                      className="checked: ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      D) {ques.d}
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
        {curr === 3 && (
          <button
            onClick={() => {
              //check if all questions are answered
              if (ans.includes("")) {
                alert("Please answer all questions.");
                return;
              }
              navigate(`/${id}/FinalQuiz/results/${ans}`, {
                replace: true,
              });
            }}
            className="justify-self-end rounded-lg bg-lime-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
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
                curr === 3 ? setCurr(3) : setCurr(curr + 1);
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

export default FinalQuiz;

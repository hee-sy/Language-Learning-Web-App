import { useContext } from "react";
import { LSContext } from "../../pages/LessonB";
import "flowbite";
import { Accordion } from "flowbite-react";

const BigPicEx1 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementGlob = () => {
    if (lsScore.SG !== undefined) {
      {
        if (lsScore.SG < 11) {
          setLSScore({ ...lsScore, SG: lsScore.SG + 1 });
        }
      }
    }
  };

  return (
    <div
      className="w-full pb-6"
      onClick={() => {
        incrementGlob();
      }}
    >
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Big picture explanations of grammar covering usage across various
        contexts:
      </h2>
      {/* Accordion color */}
      <Accordion collapseAll className="max-w-[936.8px]">
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            ...も (...mo)
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`"also" or "too"`}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  私も 行きます。
                </p>
                <p className="italic text-gray-300">(Watashi mo ikimasu.)</p>
                <p className="font-medium text-gray-400">I will go too.</p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Indicating "even" or "as much as"`}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  彼は 1時間も 待った。
                </p>
                <p className="italic text-gray-300">
                  (Kare wa ichijikan mo matta.)
                </p>
                <p className="font-medium text-gray-400">
                  He waited for as long as an hour.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Indicating "both" or "each"`}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  彼女も 彼も 映画が 好きです。
                </p>
                <p className="italic text-gray-300">
                  (Kanojo mo kare mo eiga ga suki desu.)
                </p>
                <p className="font-medium text-gray-400">
                  Both she and he like movies.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            ...けど (...kedo)
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Contrasting two statements`}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  明日は 雨が 降るけど、出かけます。
                </p>
                <p className="italic text-gray-300">
                  (Ashita wa ame ga furu kedo, dekakemasu.)
                </p>
                <p className="font-medium text-gray-400">
                  It will rain tomorrow, but I will go out.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Introducing a reason or explanation`}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  ごめん、忙しい けど 手伝って あげたい。
                </p>
                <p className="italic text-gray-300">
                  (Gomen, isogashii kedo tetsudatte agetai.)
                </p>
                <p className="font-medium text-gray-400">
                  Sorry, I’m busy, but I want to help.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Softening a statement (polite hesitation)`}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  この レストランは 高い けど、雰囲気が いい です。
                </p>
                <p className="italic text-gray-300">
                  (Kono resutoran wa takai kedo, fun’iki ga ii desu.)
                </p>
                <p className="font-medium text-gray-400">
                  This restaurant is expensive, but the atmosphere is nice.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

// bg-white hover:bg-lime-100 focus:bg-lime-100 active:bg-lime-100
const BigPicEx2 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementGlob = () => {
    if (lsScore.SG !== undefined) {
      {
        if (lsScore.SG < 11) {
          setLSScore({ ...lsScore, SG: lsScore.SG + 1 });
        }
      }
    }
  };

  return (
    <div
      className="w-full pb-6"
      onClick={() => {
        incrementGlob();
      }}
    >
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Big picture explanations of grammar covering usage across various
        contexts:
      </h2>
      {/* Accordian color */}
      <Accordion collapseAll className="max-w-[936.8px]">
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            実は (jitsuwa) - Actually
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Revealing hidden or secret facts:`}</h4>
                <p className="font-medium text-gray-400">
                  • It can be used to disclose something not immediately
                  apparent to the listener.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  • Example: 実は、彼はもう 結婚 して いる んだ。
                </p>
                <p className="italic text-gray-300">
                  (Jitsuwa, kare wa mōu kekkon shite iru nda.)
                </p>
                <p className="font-medium text-gray-400">
                  Actually, he’s already married.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Providing additional information (Context or Background):`}</h4>
                <p className="font-medium text-gray-400">
                  • Adds depth to the situation by giving more information.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  • Example: 実は、前に 同じような 経験 を した こと がある
                </p>
                <p className="italic text-gray-300">
                  (Jitsuwa, mae ni onajiyōna keiken o shita koto ga aru)
                </p>
                <p className="font-medium text-gray-400">
                  Actually, I’ve had a similar experience before.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Softening negative information:`}</h4>
                <p className="font-medium text-gray-400">
                  • Makes potentially awkward or difficult information easier to
                  hear.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  • Example: <br /> A: どう したの？ 顔色が悪い よ。
                </p>
                <p className="italic text-gray-300">
                  (Dō shita no? Kaoirogawarui yo.)
                </p>
                <p className="font-medium text-gray-400">
                  What happened? You look pale.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: 実は、今日は ちょっと 体調が 悪いん だ。
                </p>
                <p className="italic text-gray-300">
                  (Jitsu wa, kyou wa chotto taichou ga waruin da.)
                </p>
                <p className="font-medium text-gray-400">
                  Actually, I’m feeling a bit unwell today.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Correcting or contrasting previous statements:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to correct or clarify something previously stated.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  • Example: <br /> A: 彼は 外国に 行った んだ よね？
                </p>
                <p className="italic text-gray-300">
                  (Kare wa gaikoku ni itta nda yo ne?)
                </p>
                <p className="font-medium text-gray-400">
                  He went abroad, right?
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: 実は、彼は 行かなかった んだ。
                </p>
                <p className="italic text-gray-300">
                  (Jitsu wa, kare wa ikanakatta n da.)
                </p>
                <p className="font-medium text-gray-400">
                  Actually, he didn’t go.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            ...と思います (...to-omoimasu) - I think...
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Expressing Opinions or Thoughts:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to express what the speaker thinks or feels about
                  something.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  この 映画は 面白い と思います。
                </p>
                <p className="italic text-gray-300">
                  (Kono eiga wa omoshiroi to omoimasu.)
                </p>
                <p className="font-medium text-gray-400">
                  I think this movie is interesting.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Making Predictions:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to share a prediction or assumption about something.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  明日は 雨が 降る と思います。
                </p>
                <p className="italic text-gray-300">
                  (Ashita wa ame ga furu to omoimasu.)
                </p>
                <p className="font-medium text-gray-400">
                  I think it will rain tomorrow.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Agreeing or Disagreeing Politely:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to politely agree or disagree with someone else’s
                  statement.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  それは 正しい と思います。
                </p>
                <p className="italic text-gray-300">
                  (Sore wa tadashii to omoimasu.)
                </p>
                <p className="font-medium text-gray-400">
                  I think that is correct.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Expressing Uncertainty or Modesty:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to soften a statement or opinion, making it sound less
                  assertive.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  この 答えは 合っている と思いますが、少し 自信が ないです。
                </p>
                <p className="italic text-gray-300">
                  (Kono kotae wa atteiru to omoimasu ga, sukoshi jishin ga nai
                  desu.)
                </p>
                <p className="font-medium text-gray-400">
                  I think this answer is correct, but I’m not very confident.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
const BigPicEx3 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementGlob = () => {
    if (lsScore.SG !== undefined) {
      {
        if (lsScore.SG < 11) {
          setLSScore({ ...lsScore, SG: lsScore.SG + 1 });
        }
      }
    }
  };

  return (
    <div
      className="w-full pb-6"
      onClick={() => {
        incrementGlob();
      }}
    >
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Big picture explanations of grammar covering usage across various
        contexts:
      </h2>
      {/* Accordion color */}
      <Accordion collapseAll className="max-w-[936.8px]">
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            そうなんですね (Sou nan desu ne) - I see
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <p className="mb-2 text-wrap text-sm font-semibold xl:text-base">{`This expression is used to show that you are listening to someone and understanding or empathizing with what they are saying. It's like saying "I see" or "I understand" in English. It can also express a sense of realization or surprise, depending on the tone.`}</p>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Expressing understanding or empathy:`}</h4>
                <p className="font-medium text-gray-400">
                  • Example: Someone shares a personal experience or
                  information.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  A: 今日、雨が すごく 降っています。
                </p>
                <p className="italic text-gray-300">
                  (Kyou, ame ga sugoku futteimasu.)
                </p>
                <p className="font-medium text-gray-400">
                  It’s raining heavily today.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: そうなんですね。大変 ですね。
                </p>
                <p className="italic text-gray-300">
                  (Sou nan desu ne. Taihen desu ne.)
                </p>
                <p className="font-medium text-gray-400">
                  I see. That’s tough.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Expressing realization or mild surprise:`}</h4>
                <p className="font-medium text-gray-400">
                  • Example: Someone tells you something you didn’t know, and
                  you express mild surprise or realization.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  A: 彼は 日本に 住んでいます。
                </p>
                <p className="italic text-gray-300">
                  (Kare wa Nihon ni sundeimasu.)
                </p>
                <p className="font-medium text-gray-400">He lives in Japan.</p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: そうなんですね！知らなかった です。
                </p>
                <p className="italic text-gray-300">
                  (Sou nan desu ne! Shiranakatta desu.)
                </p>
                <p className="font-medium text-gray-400">
                  I see! I didn’t know that.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            今度 (Kondo) - Next time
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <p className="mb-2 text-wrap text-sm font-semibold xl:text-base">{`This word means "next time," but its usage can vary depending on the situation. It can refer to an upcoming time in the future, or it can be used to talk about a future event or plan.`}</p>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Referring to the next time something happens:`}</h4>
                <p className="font-medium text-gray-400">
                  • Example: When you’re talking about a future action or event,
                  like meeting someone or going somewhere.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  A: 来週、友達 と 映画を 見に 行きます。
                </p>
                <p className="italic text-gray-300">
                  (Raishuu, tomodachi to eiga o mini ikimasu.)
                </p>
                <p className="font-medium text-gray-400">
                  I will go watch a movie with my friend next week.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: 今度、一緒に 行きたいです。{" "}
                </p>
                <p className="italic text-gray-300">
                  (Kondo, issho ni ikitai desu.)
                </p>
                <p className="font-medium text-gray-400">
                  I want to go together next time.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Talking about a planned future event:`}</h4>
                <p className="font-medium text-gray-400">
                  • Example: When referring to a specific future plan that has
                  already been decided.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  A: 今度、東京に 行く 予定 です。
                </p>
                <p className="italic text-gray-300">
                  (Kondo, Toukyou ni iku yotei desu)
                </p>
                <p className="font-medium text-gray-400">
                  I’m planning to go to Tokyo next time.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: いい ですね！楽しんで ください。
                </p>
                <p className="italic text-gray-300">
                  (Ii desu ne! Tanoshinde kudasai.)
                </p>
                <p className="font-medium text-gray-400">
                  That’s great! Have fun!
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Referring to a time in the near future (as in "sometime soon"):`}</h4>
                <p className="font-medium text-gray-400">
                  • Example: When something is happening soon or shortly, even
                  if not yet fixed or decided.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  A: 今度、会いましょう ね。
                </p>
                <p className="italic text-gray-300">(Kondo, aimashou ne.)</p>
                <p className="font-medium text-gray-400">
                  Let’s meet sometime soon.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: はい、楽しみ に しています。{" "}
                </p>
                <p className="italic text-gray-300">
                  (Hai, tanoshimi ni shiteimasu.)
                </p>
                <p className="font-medium text-gray-400">
                  Yes, I’m looking forward to it.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
const BigPicEx4 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementGlob = () => {
    if (lsScore.SG !== undefined) {
      {
        if (lsScore.SG < 11) {
          setLSScore({ ...lsScore, SG: lsScore.SG + 1 });
        }
      }
    }
  };

  return (
    <div
      className="w-full pb-6"
      onClick={() => {
        incrementGlob();
      }}
    >
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Big picture explanations of grammar covering usage across various
        contexts:
      </h2>
      {/* Accordion color */}
      <Accordion collapseAll className="max-w-[936.8px]">
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            気持ちがいい (Kimochi ga ii)
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <p className="mb-2 text-wrap text-sm font-semibold xl:text-base">{`気持ちがいい is versatile and used to describe experiences that feel pleasant or satisfying. It applies to physical sensations, emotional comfort, or even satisfaction derived from an action.`}</p>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Physical sensations:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to describe things like temperature, textures, or
                  environmental conditions.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: この 布は 気持ちがいい です。
                </p>
                <p className="italic text-gray-300">
                  (Kono nuno wa kimochi ga ii desu.)
                </p>
                <p className="font-medium text-gray-400">
                  This fabric feels pleasant.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Emotional comfort:`}</h4>
                <p className="font-medium text-gray-400">
                  • Refers to emotional satisfaction or peace of mind.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: 彼の 声は 気持ちがいい です。
                </p>
                <p className="italic text-gray-300">
                  (Kare no koe wa kimochi ga ii desu.)
                </p>
                <p className="font-medium text-gray-400">
                  His voice feels soothing.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Actions or behavior:`}</h4>
                <p className="font-medium text-gray-400">
                  • Indicates satisfaction from doing something “right” or
                  fulfilling.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: 部屋を 掃除 すると 気持ちがいい です。
                </p>
                <p className="italic text-gray-300">
                  (Heya o souji suru to kimochi ga ii desu.)
                </p>
                <p className="font-medium text-gray-400">
                  It feels good to clean the room.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            ですね (Desu ne)
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <p className="mb-2 text-wrap text-sm font-semibold xl:text-base">{`ですね functions as a conversational softener. It encourages agreement or invites the listener to share the speaker’s feelings or observations. It’s also used to seek confirmation in a polite way.`}</p>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Sharing observations:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used when making casual remarks or comments about shared
                  experiences.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: この 映画は 面白い ですね。
                </p>
                <p className="italic text-gray-300">
                  (Kono eiga wa omoshiroi desu ne.)
                </p>
                <p className="font-medium text-gray-400">
                  This movie is interesting, isn’t it?
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Expressing agreement:`}</h4>
                <p className="font-medium text-gray-400">
                  • Adds politeness and softens the statement while showing
                  alignment with the other person’s opinion.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: 天気が いい ですね。
                </p>
                <p className="italic text-gray-300">(Tenki ga ii desu ne.)</p>
                <p className="font-medium text-gray-400">
                  The weather is nice, isn’t it?
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Seeking confirmation:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to confirm something indirectly or softly.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: 今は 3時 ですね。
                </p>
                <p className="italic text-gray-300">(Ima wa sanji desu ne.)</p>
                <p className="font-medium text-gray-400">
                  It’s 3 o’clock now, isn’t it?
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Expressing empathy:`}</h4>
                <p className="font-medium text-gray-400">
                  • When responding to someone else’s statement, ですね can show
                  you’re empathizing or understanding their point.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: <br />
                  A: 今日 忙しかったん です。
                </p>
                <p className="italic text-gray-300">
                  (Kyou isogashikatta n desu.)
                </p>
                <p className="font-medium text-gray-400">I was busy today.</p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: そう ですね。
                </p>
                <p className="italic text-gray-300">(Sou desu ne.)</p>
                <p className="font-medium text-gray-400">I see.</p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
const BigPicEx1_A = () => {
  return (
    <div className="w-full pb-6">
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Big picture explanations of grammar covering usage across various
        contexts:
      </h2>
      {/* Accordion color */}
      <Accordion collapseAll className="max-w-[936.8px]">
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            ...も (...mo)
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`"also" or "too"`}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  私も 行きます。
                </p>
                <p className="italic text-gray-300">(Watashi mo ikimasu.)</p>
                <p className="font-medium text-gray-400">I will go too.</p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Indicating "even" or "as much as"`}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  彼は 1時間も 待った。
                </p>
                <p className="italic text-gray-300">
                  (Kare wa ichijikan mo matta.)
                </p>
                <p className="font-medium text-gray-400">
                  He waited for as long as an hour.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Indicating "both" or "each"`}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  彼女も 彼も 映画が 好きです。
                </p>
                <p className="italic text-gray-300">
                  (Kanojo mo kare mo eiga ga suki desu.)
                </p>
                <p className="font-medium text-gray-400">
                  Both she and he like movies.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            ...けど (...kedo)
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Contrasting two statements`}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  明日は 雨が 降るけど、出かけます。
                </p>
                <p className="italic text-gray-300">
                  (Ashita wa ame ga furu kedo, dekakemasu.)
                </p>
                <p className="font-medium text-gray-400">
                  It will rain tomorrow, but I will go out.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Introducing a reason or explanation`}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  ごめん、忙しい けど 手伝って あげたい。
                </p>
                <p className="italic text-gray-300">
                  (Gomen, isogashii kedo tetsudatte agetai.)
                </p>
                <p className="font-medium text-gray-400">
                  Sorry, I’m busy, but I want to help.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Softening a statement (polite hesitation)`}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  この レストランは 高い けど、雰囲気が いい です。
                </p>
                <p className="italic text-gray-300">
                  (Kono resutoran wa takai kedo, fun’iki ga ii desu.)
                </p>
                <p className="font-medium text-gray-400">
                  This restaurant is expensive, but the atmosphere is nice.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

// bg-white hover:bg-lime-100 focus:bg-lime-100 active:bg-lime-100
const BigPicEx2_A = () => {
  return (
    <div className="w-full pb-6">
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Big picture explanations of grammar covering usage across various
        contexts:
      </h2>
      {/* Accordian color */}
      <Accordion collapseAll className="max-w-[936.8px]">
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            実は (jitsuwa) - Actually
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Revealing hidden or secret facts:`}</h4>
                <p className="font-medium text-gray-400">
                  • It can be used to disclose something not immediately
                  apparent to the listener.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  • Example: 実は、彼はもう 結婚 して いる んだ。
                </p>
                <p className="italic text-gray-300">
                  (Jitsuwa, kare wa mōu kekkon shite iru nda.)
                </p>
                <p className="font-medium text-gray-400">
                  Actually, he’s already married.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Providing additional information (Context or Background):`}</h4>
                <p className="font-medium text-gray-400">
                  • Adds depth to the situation by giving more information.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  • Example: 実は、前に 同じような 経験 を した こと がある
                </p>
                <p className="italic text-gray-300">
                  (Jitsuwa, mae ni onajiyōna keiken o shita koto ga aru)
                </p>
                <p className="font-medium text-gray-400">
                  Actually, I’ve had a similar experience before.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Softening negative information:`}</h4>
                <p className="font-medium text-gray-400">
                  • Makes potentially awkward or difficult information easier to
                  hear.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  • Example: <br /> A: どう したの？ 顔色が悪い よ。
                </p>
                <p className="italic text-gray-300">
                  (Dō shita no? Kaoirogawarui yo.)
                </p>
                <p className="font-medium text-gray-400">
                  What happened? You look pale.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: 実は、今日は ちょっと 体調が 悪いん だ。
                </p>
                <p className="italic text-gray-300">
                  (Jitsu wa, kyou wa chotto taichou ga waruin da.)
                </p>
                <p className="font-medium text-gray-400">
                  Actually, I’m feeling a bit unwell today.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Correcting or contrasting previous statements:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to correct or clarify something previously stated.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  • Example: <br /> A: 彼は 外国に 行った んだ よね？
                </p>
                <p className="italic text-gray-300">
                  (Kare wa gaikoku ni itta nda yo ne?)
                </p>
                <p className="font-medium text-gray-400">
                  He went abroad, right?
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: 実は、彼は 行かなかった んだ。
                </p>
                <p className="italic text-gray-300">
                  (Jitsu wa, kare wa ikanakatta n da.)
                </p>
                <p className="font-medium text-gray-400">
                  Actually, he didn’t go.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            ...と思います (...to-omoimasu) - I think...
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Expressing Opinions or Thoughts:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to express what the speaker thinks or feels about
                  something.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  この 映画は 面白い と思います。
                </p>
                <p className="italic text-gray-300">
                  (Kono eiga wa omoshiroi to omoimasu.)
                </p>
                <p className="font-medium text-gray-400">
                  I think this movie is interesting.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Making Predictions:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to share a prediction or assumption about something.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  明日は 雨が 降る と思います。
                </p>
                <p className="italic text-gray-300">
                  (Ashita wa ame ga furu to omoimasu.)
                </p>
                <p className="font-medium text-gray-400">
                  I think it will rain tomorrow.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Agreeing or Disagreeing Politely:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to politely agree or disagree with someone else’s
                  statement.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  それは 正しい と思います。
                </p>
                <p className="italic text-gray-300">
                  (Sore wa tadashii to omoimasu.)
                </p>
                <p className="font-medium text-gray-400">
                  I think that is correct.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Expressing Uncertainty or Modesty:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to soften a statement or opinion, making it sound less
                  assertive.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  この 答えは 合っている と思いますが、少し 自信が ないです。
                </p>
                <p className="italic text-gray-300">
                  (Kono kotae wa atteiru to omoimasu ga, sukoshi jishin ga nai
                  desu.)
                </p>
                <p className="font-medium text-gray-400">
                  I think this answer is correct, but I’m not very confident.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
const BigPicEx3_A = () => {
  return (
    <div className="w-full pb-6">
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Big picture explanations of grammar covering usage across various
        contexts:
      </h2>
      {/* Accordion color */}
      <Accordion collapseAll className="max-w-[936.8px]">
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            そうなんですね (Sou nan desu ne) - I see
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <p className="mb-2 text-wrap text-sm font-semibold xl:text-base">{`This expression is used to show that you are listening to someone and understanding or empathizing with what they are saying. It's like saying "I see" or "I understand" in English. It can also express a sense of realization or surprise, depending on the tone.`}</p>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Expressing understanding or empathy:`}</h4>
                <p className="font-medium text-gray-400">
                  • Example: Someone shares a personal experience or
                  information.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  A: 今日、雨が すごく 降っています。
                </p>
                <p className="italic text-gray-300">
                  (Kyou, ame ga sugoku futteimasu.)
                </p>
                <p className="font-medium text-gray-400">
                  It’s raining heavily today.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: そうなんですね。大変 ですね。
                </p>
                <p className="italic text-gray-300">
                  (Sou nan desu ne. Taihen desu ne.)
                </p>
                <p className="font-medium text-gray-400">
                  I see. That’s tough.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Expressing realization or mild surprise:`}</h4>
                <p className="font-medium text-gray-400">
                  • Example: Someone tells you something you didn’t know, and
                  you express mild surprise or realization.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  A: 彼は 日本に 住んでいます。
                </p>
                <p className="italic text-gray-300">
                  (Kare wa Nihon ni sundeimasu.)
                </p>
                <p className="font-medium text-gray-400">He lives in Japan.</p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: そうなんですね！知らなかった です。
                </p>
                <p className="italic text-gray-300">
                  (Sou nan desu ne! Shiranakatta desu.)
                </p>
                <p className="font-medium text-gray-400">
                  I see! I didn’t know that.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            今度 (Kondo) - Next time
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <p className="mb-2 text-wrap text-sm font-semibold xl:text-base">{`This word means "next time," but its usage can vary depending on the situation. It can refer to an upcoming time in the future, or it can be used to talk about a future event or plan.`}</p>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Referring to the next time something happens:`}</h4>
                <p className="font-medium text-gray-400">
                  • Example: When you’re talking about a future action or event,
                  like meeting someone or going somewhere.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  A: 来週、友達 と 映画を 見に 行きます。
                </p>
                <p className="italic text-gray-300">
                  (Raishuu, tomodachi to eiga o mini ikimasu.)
                </p>
                <p className="font-medium text-gray-400">
                  I will go watch a movie with my friend next week.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: 今度、一緒に 行きたいです。{" "}
                </p>
                <p className="italic text-gray-300">
                  (Kondo, issho ni ikitai desu.)
                </p>
                <p className="font-medium text-gray-400">
                  I want to go together next time.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Talking about a planned future event:`}</h4>
                <p className="font-medium text-gray-400">
                  • Example: When referring to a specific future plan that has
                  already been decided.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  A: 今度、東京に 行く 予定 です。
                </p>
                <p className="italic text-gray-300">
                  (Kondo, Toukyou ni iku yotei desu)
                </p>
                <p className="font-medium text-gray-400">
                  I’m planning to go to Tokyo next time.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: いい ですね！楽しんで ください。
                </p>
                <p className="italic text-gray-300">
                  (Ii desu ne! Tanoshinde kudasai.)
                </p>
                <p className="font-medium text-gray-400">
                  That’s great! Have fun!
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Referring to a time in the near future (as in "sometime soon"):`}</h4>
                <p className="font-medium text-gray-400">
                  • Example: When something is happening soon or shortly, even
                  if not yet fixed or decided.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  A: 今度、会いましょう ね。
                </p>
                <p className="italic text-gray-300">(Kondo, aimashou ne.)</p>
                <p className="font-medium text-gray-400">
                  Let’s meet sometime soon.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: はい、楽しみ に しています。{" "}
                </p>
                <p className="italic text-gray-300">
                  (Hai, tanoshimi ni shiteimasu.)
                </p>
                <p className="font-medium text-gray-400">
                  Yes, I’m looking forward to it.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
const BigPicEx4_A = () => {
  return (
    <div className="w-full pb-6">
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Big picture explanations of grammar covering usage across various
        contexts:
      </h2>
      {/* Accordion color */}
      <Accordion collapseAll className="max-w-[936.8px]">
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            気持ちがいい (Kimochi ga ii)
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <p className="mb-2 text-wrap text-sm font-semibold xl:text-base">{`気持ちがいい is versatile and used to describe experiences that feel pleasant or satisfying. It applies to physical sensations, emotional comfort, or even satisfaction derived from an action.`}</p>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Physical sensations:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to describe things like temperature, textures, or
                  environmental conditions.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: この 布は 気持ちがいい です。
                </p>
                <p className="italic text-gray-300">
                  (Kono nuno wa kimochi ga ii desu.)
                </p>
                <p className="font-medium text-gray-400">
                  This fabric feels pleasant.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Emotional comfort:`}</h4>
                <p className="font-medium text-gray-400">
                  • Refers to emotional satisfaction or peace of mind.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: 彼の 声は 気持ちがいい です。
                </p>
                <p className="italic text-gray-300">
                  (Kare no koe wa kimochi ga ii desu.)
                </p>
                <p className="font-medium text-gray-400">
                  His voice feels soothing.
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Actions or behavior:`}</h4>
                <p className="font-medium text-gray-400">
                  • Indicates satisfaction from doing something “right” or
                  fulfilling.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: 部屋を 掃除 すると 気持ちがいい です。
                </p>
                <p className="italic text-gray-300">
                  (Heya o souji suru to kimochi ga ii desu.)
                </p>
                <p className="font-medium text-gray-400">
                  It feels good to clean the room.
                </p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            ですね (Desu ne)
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ol className="list-decimal divide-y px-10 py-5 dark:bg-gray-900">
              <p className="mb-2 text-wrap text-sm font-semibold xl:text-base">{`ですね functions as a conversational softener. It encourages agreement or invites the listener to share the speaker’s feelings or observations. It’s also used to seek confirmation in a polite way.`}</p>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Sharing observations:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used when making casual remarks or comments about shared
                  experiences.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: この 映画は 面白い ですね。
                </p>
                <p className="italic text-gray-300">
                  (Kono eiga wa omoshiroi desu ne.)
                </p>
                <p className="font-medium text-gray-400">
                  This movie is interesting, isn’t it?
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Expressing agreement:`}</h4>
                <p className="font-medium text-gray-400">
                  • Adds politeness and softens the statement while showing
                  alignment with the other person’s opinion.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: 天気が いい ですね。
                </p>
                <p className="italic text-gray-300">(Tenki ga ii desu ne.)</p>
                <p className="font-medium text-gray-400">
                  The weather is nice, isn’t it?
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Seeking confirmation:`}</h4>
                <p className="font-medium text-gray-400">
                  • Used to confirm something indirectly or softly.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: 今は 3時 ですね。
                </p>
                <p className="italic text-gray-300">(Ima wa sanji desu ne.)</p>
                <p className="font-medium text-gray-400">
                  It’s 3 o’clock now, isn’t it?
                </p>
              </li>
              <li className="mb-2">
                <h4 className="mb-2 text-sm font-semibold xl:text-base">{`Expressing empathy:`}</h4>
                <p className="font-medium text-gray-400">
                  • When responding to someone else’s statement, ですね can show
                  you’re empathizing or understanding their point.{" "}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Example: <br />
                  A: 今日 忙しかったん です。
                </p>
                <p className="italic text-gray-300">
                  (Kyou isogashikatta n desu.)
                </p>
                <p className="font-medium text-gray-400">I was busy today.</p>
                <p className="text-gray-500 dark:text-gray-400">
                  B: そう ですね。
                </p>
                <p className="italic text-gray-300">(Sou desu ne.)</p>
                <p className="font-medium text-gray-400">I see.</p>
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export {
  BigPicEx1,
  BigPicEx2,
  BigPicEx3,
  BigPicEx4,
  BigPicEx1_A,
  BigPicEx2_A,
  BigPicEx3_A,
  BigPicEx4_A,
};

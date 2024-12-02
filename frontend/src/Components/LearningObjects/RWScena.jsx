import { useContext } from "react";
import { LSContext } from "../../pages/LessonB";
import { Accordion } from "flowbite-react";

const RWScena1 = () => {
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
    <div className="w-full py-4">
      <h2 className="mb-2 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Examples in real world scenarios:
      </h2>
      {/* Accordian */}
      <Accordion
        onClick={() => incrementSen()}
        collapseAll
        className="max-w-[936.8px]"
      >
        <Accordion.Panel>
          <Accordion.Title>ここで (koko de) - Here</Accordion.Title>
          <Accordion.Content className="p-0">
            <div className="px-10 py-5 dark:bg-gray-900">
              <ol className="list-decimal divide-y">
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    A: どこで 会います か？
                  </p>
                  <p className="italic text-gray-400">(Doko de aimasu ka?)</p>
                  <p className="font-medium text-gray-500">
                    Where shall we meet?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    B: <span className="font-bold text-gray-900">ここで</span>{" "}
                    会いましょう。
                  </p>
                  <p className="italic text-gray-400">
                    (<span className="font-bold text-gray-900">Koko de</span>{" "}
                    aimashou.)
                  </p>
                  <p className="font-medium text-gray-500">Let’s meet here.</p>
                </li>
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    A: チケットは どこで 買えますか？
                  </p>
                  <p className="italic text-gray-400">
                    (Chiketto wa doko de kaemasu ka?)
                  </p>
                  <p className="font-medium text-gray-500">
                    Where can I buy tickets?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    B: <span className="font-bold text-gray-900">ここで</span>{" "}
                    買えます よ。
                  </p>
                  <p className="italic text-gray-400">
                    (<span className="font-bold text-gray-900">Koko de</span>{" "}
                    kaemasu yo.)
                  </p>
                  <p className="font-medium text-gray-500">
                    You can buy them here.
                  </p>
                </li>
              </ol>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>好きです (suki desu) - I like it</Accordion.Title>
          <Accordion.Content className="p-0">
            <div className="px-10 py-5 dark:bg-gray-900">
              <ol className="list-decimal divide-y">
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    A: あなたは 寿司が{" "}
                    <span className="font-bold text-gray-900">好きです</span>{" "}
                    か？
                  </p>
                  <p className="italic text-gray-400">
                    (Anata wa sushi ga{" "}
                    <span className="font-bold text-gray-900">suki desu</span>{" "}
                    ka?)
                  </p>
                  <p className="font-medium text-gray-500">
                    Do you like sushi?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    B: はい、とても{" "}
                    <span className="font-bold text-gray-900">好きです</span>。
                  </p>
                  <p className="italic text-gray-400">
                    (Hai, totemo{" "}
                    <span className="font-bold text-gray-900">suki desu</span>.)
                  </p>
                  <p className="font-medium text-gray-500">
                    Yes, I really like it.
                  </p>
                </li>
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    A: あなたは 音楽が{" "}
                    <span className="font-bold text-gray-900">好きです</span>{" "}
                    か？
                  </p>
                  <p className="italic text-gray-400">
                    (Anata wa ongaku ga{" "}
                    <span className="font-bold text-gray-900">suki desu</span>{" "}
                    ka?)
                  </p>
                  <p className="font-medium text-gray-500">
                    Do you like music?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    B: <span className="font-bold text-gray-900"></span>{" "}
                    はい、音楽が{" "}
                    <span className="font-bold text-gray-900">大好きです</span>
                    。
                  </p>
                  <p className="italic text-gray-400">
                    (<span className="font-bold text-gray-900"></span> Hai,
                    ongaku ga{" "}
                    <span className="font-bold text-gray-900">
                      daisuki desu
                    </span>
                    .)
                  </p>
                  <p className="font-medium text-gray-500">
                    Yes, I love music.
                  </p>
                </li>
              </ol>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
const RWScena2 = () => {
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
    <div className="w-full py-4">
      <h2 className="mb-2 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Examples in real world scenarios:
      </h2>
      {/* Accordian */}
      <Accordion
        onClick={() => incrementSen()}
        collapseAll
        className="max-w-[936.8px]"
      >
        <Accordion.Panel>
          <Accordion.Title>
            が いちばん (Ga ichiban) - The most...
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <div className="px-10 py-5 dark:bg-gray-900">
              <ol className="list-decimal divide-y">
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    A: 日本 料理の 中で 何
                    <span className="font-bold text-gray-900">がいちばん</span>{" "}
                    好き？
                  </p>
                  <p className="italic text-gray-400">
                    (Nihon ryouri no naka de nani{" "}
                    <span className="font-bold text-gray-900">ga ichiban</span>{" "}
                    suki?)
                  </p>
                  <p className="font-medium text-gray-500">
                    What’s your favorite Japanese food?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    B: 寿司{" "}
                    <span className="font-bold text-gray-900">がいちばん</span>{" "}
                    好きです！
                  </p>
                  <p className="italic text-gray-400">
                    (Sushi{" "}
                    <span className="font-bold text-gray-900">ga ichiban</span>{" "}
                    suki desu!)
                  </p>
                  <p className="font-medium text-gray-500">
                    I like sushi the most!
                  </p>
                </li>
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    A: この 公園で どこ{" "}
                    <span className="font-bold text-gray-900">がいちばん</span>{" "}
                    きれい ですか？
                  </p>
                  <p className="italic text-gray-400">
                    (Kono kouen de doko{" "}
                    <span className="font-bold text-gray-900">ga ichiban</span>{" "}
                    kirei desu ka?)
                  </p>
                  <p className="font-medium text-gray-500">
                    Where is the most beautiful spot in this park?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    B: 湖{" "}
                    <span className="font-bold text-gray-900">がいちばん</span>{" "}
                    きれい だ と思います。
                  </p>
                  <p className="italic text-gray-400">
                    (Mizuumi{" "}
                    <span className="font-bold text-gray-900">ga ichiban</span>{" "}
                    kirei da to omoimasu.)
                  </p>
                  <p className="font-medium text-gray-500">
                    I think the lake is the most beautiful.
                  </p>
                </li>
              </ol>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>面白い (Omoshiroi) - interesting</Accordion.Title>
          <Accordion.Content className="p-0">
            <div className="px-10 py-5 dark:bg-gray-900">
              <ol className="list-decimal divide-y">
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    A: 昨日 見た 映画、どう だった？
                  </p>
                  <p className="italic text-gray-400">
                    (Kinou mita eiga, dou datta?)
                  </p>
                  <p className="font-medium text-gray-500">
                    How was the movie you watched yesterday?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    B: とても{" "}
                    <span className="font-bold text-gray-900">面白</span>かった
                    よ！
                  </p>
                  <p className="italic text-gray-400">
                    (Totemo{" "}
                    <span className="font-bold text-gray-900">omoshiro</span>
                    katta yo!)
                  </p>
                  <p className="font-medium text-gray-500">
                    It was really interesting!
                  </p>
                </li>
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    A: この 本 って どんな 感じ？
                  </p>
                  <p className="italic text-gray-400">
                    (Kono hon tte donna kanji?)
                  </p>
                  <p className="font-medium text-gray-500">
                    What’s this book like?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    B: ストーリー が{" "}
                    <span className="font-bold text-gray-900">面白い</span>{" "}
                    と思います。
                  </p>
                  <p className="italic text-gray-400">
                    (Sutoorii ga{" "}
                    <span className="font-bold text-gray-900">omoshiroi</span>{" "}
                    to omoimasu.)
                  </p>
                  <p className="font-medium text-gray-500">
                    I think the story is interesting.
                  </p>
                </li>
              </ol>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
const RWScena3 = () => {
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
    <div className="w-full py-4">
      <h2 className="mb-2 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Examples in real world scenarios:
      </h2>
      {/* Accordian */}
      <Accordion
        onClick={() => incrementSen()}
        collapseAll
        className="max-w-[936.8px]"
      >
        <Accordion.Panel>
          <Accordion.Title>ギター (ぎたー, gitaa) – Guitar</Accordion.Title>
          <Accordion.Content className="p-0">
            <div className="px-10 py-5 dark:bg-gray-900">
              <ol className="list-decimal divide-y">
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Two friends talking about hobbies.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    A: 何か 趣味は ありますか？
                  </p>
                  <p className="italic text-gray-400">
                    (Nani ka shumi wa arimasu ka?)
                  </p>
                  <p className="font-medium text-gray-500">
                    Do you have any hobbies?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    B: はい、
                    <span className="font-bold text-gray-900">ギター</span>を
                    弾くの が好きです。
                  </p>
                  <p className="italic text-gray-400">
                    (Hai, <span className="font-bold text-gray-900">gitaa</span>{" "}
                    o hiku no ga suki desu.)
                  </p>
                  <p className="font-medium text-gray-500">
                    Yes, I like playing the guitar.
                  </p>
                </li>
              </ol>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            弾く (Hiku) – To play (an instrument)
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <div className="px-10 py-5 dark:bg-gray-900">
              <ol className="list-decimal divide-y">
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    A friend asks if the other can play an instrument.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    A: ピアノを{" "}
                    <span className="font-bold text-gray-900">弾け</span>ます
                    か？
                  </p>
                  <p className="italic text-gray-400">
                    (Piano o{" "}
                    <span className="font-bold text-gray-900">hike</span>
                    masu ka?)
                  </p>
                  <p className="font-medium text-gray-500">
                    Can you play the piano?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    B: いいえ、ピアノは{" "}
                    <span className="font-bold text-gray-900">弾け</span>ません
                    が、ギターは{" "}
                    <span className="font-bold text-gray-900">弾け</span>ます。
                  </p>
                  <p className="italic text-gray-400">
                    (Iie, piano wa{" "}
                    <span className="font-bold text-gray-900">hike</span>masen
                    ga, gitaa wa{" "}
                    <span className="font-bold text-gray-900">hike</span>
                    masu.)
                  </p>
                  <p className="font-medium text-gray-500">
                    No, I can’t play the piano, but I can play the guitar.
                  </p>
                </li>
              </ol>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>大好き (Daisuki) – Love (something)</Accordion.Title>
          <Accordion.Content className="p-0">
            <div className="px-10 py-5 dark:bg-gray-900">
              <ol className="list-decimal divide-y">
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Someone is talking about their favorite food.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    A: あなたの 好きな 食べ物は 何ですか？
                  </p>
                  <p className="italic text-gray-400">
                    (Anata no suki na tabemono wa nan desu ka?)
                  </p>
                  <p className="font-medium text-gray-500">
                    What is your favorite food?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    B: 私は 寿司が{" "}
                    <span className="font-bold text-gray-900">大好き</span>{" "}
                    です。
                  </p>
                  <p className="italic text-gray-400">
                    (Watashi wa sushi ga{" "}
                    <span className="font-bold text-gray-900">daisuki</span>{" "}
                    desu.)
                  </p>
                  <p className="font-medium text-gray-500">I love sushi.</p>
                </li>
              </ol>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
const RWScena4 = () => {
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
    <div className="w-full py-4">
      <h2 className="mb-2 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Examples in real world scenarios:
      </h2>
      {/* Accordian */}
      <Accordion
        onClick={() => incrementSen()}
        collapseAll
        className="max-w-[936.8px]"
      >
        <Accordion.Panel>
          <Accordion.Title>ところで (Tokoro de) - By the way</Accordion.Title>
          <Accordion.Content className="p-0">
            <div className="px-10 py-5 dark:bg-gray-900">
              <ol className="list-decimal divide-y">
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    {"<Ordering Food> "}You’re at a restaurant with a friend,
                    and after discussing the menu, you want to change the topic.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    You: この レストランの 料理は おいしそう ですね。
                  </p>
                  <p className="italic text-gray-400">
                    (Kono resutoran no ryouri wa oishisou desu ne.)
                  </p>
                  <p className="font-medium text-gray-500">
                    This restaurant’s food looks delicious, doesn’t it?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    Friend: はい、すごく おいしそう です。
                  </p>
                  <p className="italic text-gray-400">
                    (Hai, sugoku oishisou desu.)
                  </p>
                  <p className="font-medium text-gray-500">
                    Yes, it looks really good.
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    You:{" "}
                    <span className="font-bold text-gray-900">ところで、</span>
                    デザートは何がありますか？
                  </p>
                  <p className="italic text-gray-400">
                    (<span className="font-bold text-gray-900">Tokoro de,</span>{" "}
                    dezaato wa nani ga arimasu ka?)
                  </p>
                  <p className="font-medium text-gray-500">
                    By the way, what desserts do you have?
                  </p>
                </li>
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    {"<Asking for Directions> "}You’re lost in a shopping mall,
                    and after asking for directions, you want to switch the
                    topic.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    You: すみません、駅に 行きたいん ですが、どう 行けば いい
                    ですか？
                  </p>
                  <p className="italic text-gray-400">
                    (Sumimasen, eki ni ikitain desu ga, dou ikeba ii desu ka?)
                  </p>
                  <p className="font-medium text-gray-500">
                    Excuse me, I want to go to the station, how should I get
                    there?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    Stranger: まっすぐ 行って、左に 曲がります。
                  </p>
                  <p className="italic text-gray-400">
                    (Massugu itte, hidari ni magarimasu.)
                  </p>
                  <p className="font-medium text-gray-500">
                    Go straight and turn left.
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    You:{" "}
                    <span className="font-bold text-gray-900">ところで、</span>
                    この 近くに カフェは ありますか？
                  </p>
                  <p className="italic text-gray-400">
                    (<span className="font-bold text-gray-900">Tokoro de,</span>{" "}
                    kono chikaku ni kafe wa arimasu ka?)
                  </p>
                  <p className="font-medium text-gray-500">
                    By the way, is there a café around here?
                  </p>
                </li>
              </ol>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            今 (Ima) - “Now”, indicating the present moment.
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <div className="px-10 py-5 dark:bg-gray-900">
              <ol className="list-decimal divide-y">
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    {"<Shopping> "}You’re shopping for clothes, and you want to
                    know if a product is available.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    You: この シャツは{" "}
                    <span className="font-bold text-gray-900">今</span>
                    、セール中 ですか？
                  </p>
                  <p className="italic text-gray-400">
                    (Kono shatsu wa{" "}
                    <span className="font-bold text-gray-900">ima</span>,
                    seeru-chuu desu ka?)
                  </p>
                  <p className="font-medium text-gray-500">
                    Is this shirt on sale right now?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    Shopkeeper: はい、
                    <span className="font-bold text-gray-900">今</span> なら 20%
                    オフ です。
                  </p>
                  <p className="italic text-gray-400">
                    (Hai, <span className="font-bold text-gray-900">ima</span>{" "}
                    nara 20% off desu.)
                  </p>
                  <p className="font-medium text-gray-500">
                    Yes, it’s 20% off right now.
                  </p>
                </li>
                <li className="py-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    {"<Dining Out> "}You’re at a restaurant with a friend, and
                    you’re trying to decide what to order.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    You: <span className="font-bold text-gray-900">今</span>
                    、何か おすすめ の 料理は あります か？
                  </p>
                  <p className="italic text-gray-400">
                    (<span className="font-bold text-gray-900">Ima</span>,
                    nanika osusume no ryouri wa arimasu ka?)
                  </p>
                  <p className="font-medium text-gray-500">
                    Do you have any recommendations for dishes right now?
                  </p>
                  <br />
                  <p className="text-gray-600 dark:text-gray-400">
                    Waiter: <span className="font-bold text-gray-900">今</span>
                    、季節 限定 の メニュー が とても 人気です。
                  </p>
                  <p className="italic text-gray-400">
                    (<span className="font-bold text-gray-900">Ima</span>,
                    kisetsu gentei no menyuu ga totemo ninki desu.)
                  </p>
                  <p className="font-medium text-gray-500">
                    Our seasonal menu is very popular right now.
                  </p>
                </li>
              </ol>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export { RWScena1, RWScena2, RWScena3, RWScena4 };

import { useContext } from "react";
import { LSContext } from "../../pages/LessonB";
import { Accordion } from "flowbite-react";

const BoldSubHeading = ({ children }) => {
  return (
    <h4 className="mb-2 text-sm font-semibold text-gray-900 xl:text-base">
      {children}
    </h4>
  );
};

const Strong = ({ children }) => {
  return <strong className="font-semibold text-gray-700">{children}</strong>;
};

const Romanji = ({ children }) => {
  return <span className="font-light italic text-gray-400">{children}</span>;
};

const ItalicLime = ({ children }) => {
  return <span className="italic text-lime-600">{children}</span>;
};

const GramPatRecog1 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementInt = () => {
    if (lsScore.SI !== undefined) {
      {
        if (lsScore.SI < 11) {
          setLSScore({ ...lsScore, SI: lsScore.SI + 1 });
        }
      }
    }
  };

  return (
    <div
      className="w-full pb-6"
      onClick={() => {
        incrementInt();
      }}
    >
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Check out these tips for identifying grammar patterns:
      </h2>
      {/* accordion color */}
      <Accordion collapseAll className="max-w-[936.8px]">
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            🤔 Aも (A mo) – ’also,’ ’too,’ or ’even’
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ul className="list-disc divide-y border border-b-0 border-gray-200 px-10 py-5 text-sm font-medium text-gray-400 dark:border-gray-700 dark:bg-gray-900 xl:text-base">
              <li className="mb-4">
                <BoldSubHeading>Usage Tip:</BoldSubHeading>
                <p>
                  <Strong>A も</Strong> is used to show that something is also
                  true for another person, thing, or situation. It typically
                  adds <Strong>{' "too" '}</Strong>
                  or <Strong>{' "also" '}</Strong> to the subject or object.
                </p>
                <p>
                  • Look for situations where <Strong>similarity</Strong> or{" "}
                  <Strong>inclusiveness</Strong> is being expressed.
                </p>
                <p>
                  • Commonly follows <ItalicLime>nouns</ItalicLime> or{" "}
                  <ItalicLime>pronouns</ItalicLime>.
                </p>
              </li>
              <li className="mb-4">
                <BoldSubHeading>Key Signs:</BoldSubHeading>
                <p>
                  • Often paired with <ItalicLime>subjects</ItalicLime> or{" "}
                  <ItalicLime>objects</ItalicLime>.
                </p>
                <p>
                  • Example: “私も“ (<Romanji>Watashi mo</Romanji> – “I too“) or
                  “犬も 好きです“ (<Romanji>Inu mo suki desu</Romanji> – “I also
                  like dogs“).
                </p>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            🤔 けど (kedo) – “but,“ “however,“ or “although“
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ul className="list-disc divide-y border border-b-0 border-gray-200 px-10 py-5 text-sm font-medium text-gray-400 dark:border-gray-700 dark:bg-gray-900 xl:text-base">
              <li className="mb-4">
                <BoldSubHeading>Usage Tip:</BoldSubHeading>
                <p>
                  <Strong>けど (kedo)</Strong> connects two contrasting ideas,
                  showing a <Strong>contradiction</Strong> or{" "}
                  <Strong>softened contrast</Strong> between them. It is used to
                  link two clauses, where the first expresses one idea, and the
                  second introduces a different, often opposite, idea.
                </p>
                <p>
                  • Look for situations where a <Strong>contradiction</Strong>{" "}
                  or <Strong>contrast</Strong> between two statements is being
                  introduced.
                </p>
                <p>
                  • It can soften statements and make them less direct or
                  confrontational.
                </p>
              </li>
              <li className="mb-4">
                <BoldSubHeading>Key Signs:</BoldSubHeading>
                <p>• Used at the end of a clause.</p>
                <p>
                  • Followed by an additional clause that presents a contrast.
                </p>
                <p>
                  • Example: “私は 忙しい けど、行きます“ (
                  <Romanji>Watashi wa isogashii kedo, ikimasu</Romanji>) - I’m
                  busy, but I will go.
                </p>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
const GramPatRecog2 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementInt = () => {
    if (lsScore.SI !== undefined) {
      {
        if (lsScore.SI < 11) {
          setLSScore({ ...lsScore, SI: lsScore.SI + 1 });
        }
      }
    }
  };

  return (
    <div
      className="w-full pb-6"
      onClick={() => {
        incrementInt();
      }}
    >
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Check out these tips for identifying grammar patterns:
      </h2>

      {/* accordion color */}
      <Accordion collapseAll className="max-w-[936.8px]">
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            🤔 がいちばん (Ga ichiban) – the most ...
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ul className="list-disc divide-y border border-b-0 border-gray-200 px-10 py-5 text-sm font-medium text-gray-400 dark:border-gray-700 dark:bg-gray-900 xl:text-base">
              <li className="mb-4">
                This pattern is often used with adjectives, verbs, or nouns to
                emphasize the highest degree.
              </li>
              <li className="mb-4">
                Structure:{" "}
                <Strong>
                  [<ItalicLime>Noun/Topic</ItalicLime>] + が + いちばん + [
                  <ItalicLime>adjective/verb/description</ItalicLime>]
                </Strong>
              </li>
              <li className="mb-4">
                <BoldSubHeading>Examples:</BoldSubHeading>
                <ol className="list-decimal divide-y">
                  <li>
                    <BoldSubHeading>
                      <ItalicLime>Noun</ItalicLime> + がいちばん 好きです (Ga
                      ichiban suki desu)
                    </BoldSubHeading>
                    <p>• Meaning: I like (noun) the most.</p>
                    <p>
                      • Example: <br /> <p>りんご がいちばん 好きです。</p>
                      <p>
                        <Romanji>Ringo ga ichiban suki desu.</Romanji>
                      </p>
                      <p>I like apples the most.</p>
                    </p>
                  </li>
                  <li>
                    <BoldSubHeading>
                      <ItalicLime>Adjective </ItalicLime> + がいちばん (Ga
                      ichiban)
                    </BoldSubHeading>
                    <p>• Meaning: The most (adjective).</p>
                    <p>
                      • Example: <br />{" "}
                      <p>この 映画が いちばん 面白い です。</p>
                      <p>
                        <Romanji>Kono eiga ga ichiban omoshiroi desu.</Romanji>
                      </p>
                      <p>This movie is the most interesting.</p>
                    </p>
                  </li>
                  <li>
                    <BoldSubHeading>
                      <ItalicLime>Verb</ItalicLime> + のがいちばん 好きです (No
                      ga ichiban suki desu)
                    </BoldSubHeading>
                    <p>• Meaning: I like doing (verb) the most.</p>
                    <p>
                      • Example: <br /> <p>寝るの がいちばん 好きです。</p>
                      <p>
                        <Romanji>Neru no ga ichiban suki desu.</Romanji>
                      </p>
                      <p>I like sleeping the most.</p>
                    </p>
                  </li>
                </ol>
                <p className="my-4">
                  By practicing ”がいちばん,” learners can better express
                  preferences and superlatives in everyday conversations.
                </p>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            🤔 面白い (omoshiroi) – “interesting“
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <div className="text-sm font-medium text-gray-400 xl:text-base">
              <ol className="list-decimal divide-y border border-b-0 border-gray-200 px-10 py-5 dark:border-gray-700 dark:bg-gray-900">
                <li className="mb-4">
                  <BoldSubHeading>
                    Recognize it as an “い-adjective“:
                  </BoldSubHeading>
                  <p>
                    • <Strong>”面白い” (omoshiroi)</Strong> is an{" "}
                    <Strong>い-adjective</Strong>, meaning it ends with ”い” and
                    behaves like other adjectives in this category.
                  </p>
                  <p>
                    • Rule: You can modify or conjugate it directly without
                    additional particles.
                  </p>
                  <p>
                    • Example: <br />
                    <p>
                      面白い 映画 (<Romanji>omoshiroi eiga</Romanji>) - an
                      interesting movie
                    </p>
                    <p>
                      面白い 話 (<Romanji>omoshiroi hanashi</Romanji>) -
                      interesting story
                    </p>
                    <p>
                      面白い 人 (<Romanji>omoshiroi hito</Romanji>) -
                      funny/interesting person
                    </p>
                  </p>
                </li>
                <li className="mb-4">
                  <BoldSubHeading>
                    Understand Basic Conjugations:
                  </BoldSubHeading>
                  <Strong>• Present Positive: </Strong>
                  <span>
                    面白 い (<Romanji>omoshiroi</Romanji>) - interesting
                  </span>
                  <br />
                  <Strong>• Present Negative: </Strong>
                  <span>
                    面白 くない (<Romanji>omoshirokunai</Romanji>) - not
                    interesting
                  </span>
                  <br />
                  <Strong>• Past Positive: </Strong>
                  <span>
                    面白 かった (<Romanji>omoshirokatta</Romanji>) - was
                    interesting
                  </span>
                  <br />
                  <Strong>• Past Negative: </Strong>
                  <span>
                    面白 くなかった (<Romanji>omoshirokunakatta</Romanji>) - was
                    not interesting
                  </span>
                  <p className="my-2">
                    Tip: Learn these four basic forms to apply to any
                    い-adjective.
                  </p>
                </li>
                <li className="mb-4">
                  <BoldSubHeading>
                    Modify it to Use with Verbs or Clauses
                  </BoldSubHeading>
                  <p>
                    • Use the adverbial form (drop “い“ and add “く“) to modify
                    verbs or connect ideas.
                  </p>
                  <p>
                    • Example <br /> 面白く 話す (
                    <Romanji>omoshiroku hanasu</Romanji>) - to talk
                    interestingly
                  </p>
                </li>
              </ol>
              <p className="mb-3 px-4">
                By mastering these rules and patterns, learners can confidently
                identify and use <Strong>{`"面白い" (omoshiroi)`}</Strong> in a
                variety of contexts without overwhelming repetition.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
const GramPatRecog3 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementInt = () => {
    if (lsScore.SI !== undefined) {
      {
        if (lsScore.SI < 11) {
          setLSScore({ ...lsScore, SI: lsScore.SI + 1 });
        }
      }
    }
  };

  return (
    <div
      className="w-full pb-6"
      onClick={() => {
        incrementInt();
      }}
    >
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Check out these tips for identifying grammar patterns:
      </h2>
      <Accordion collapseAll className="max-w-[936.8px]">
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            🤔 ギター (ぎたー, gitaa) – Guitar
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ul className="list-disc divide-y px-10 py-5 text-sm font-medium text-gray-500 dark:bg-gray-900 xl:text-base">
              <li className="mb-4">
                <Strong>ギター</Strong> is a <ItalicLime>noun</ItalicLime>, and
                as a noun, it can function as the subject or object in a
                sentence. It can be used with particles like{" "}
                <Strong>を (o)</Strong> when it is the object of a verb or{" "}
                <Strong>が (ga)</Strong> when it is the subject (the guitar
                itself does something).
              </li>
              <li className="mb-4">
                <BoldSubHeading>Examples:</BoldSubHeading>
                <ul className="list-disc divide-y px-16">
                  <li>
                    ギター を 弾きます (<Romanji>Gitaa o hikimasu</Romanji>) –
                    “I play the guitar.“
                    <br />
                    Here, <Strong>を (o)</Strong> marks <Strong>ギター</Strong>{" "}
                    as the object of the verb <Strong>弾く (hiku)</Strong>,
                    which means “to play.“
                  </li>
                  <li>
                    ギター が 好きです。(<Romanji>Gitaa ga suki desu.</Romanji>)
                    - “I like the guitar.“
                    <br />
                    In this sentence:
                    <p>
                      ギター (<Romanji>gitaa</Romanji>) is the subject marked by
                      が (ga).
                    </p>
                    <p>
                      好きです (<Romanji>suki desu</Romanji>) means “like,“
                    </p>
                  </li>
                  <li>
                    <p>
                      ギター が 弾けます (<Romanji>Gitaa ga hikemasu</Romanji>)
                      – “I can play the guitar.“ (Literally, “The guitar can be
                      played.“)
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            🤔 弾く (Hiku) – To Play (an Instrument)
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ul className="list-disc divide-y px-10 py-5 text-sm font-medium text-gray-500 dark:bg-gray-900 xl:text-base">
              <li className="mb-4">
                <Strong>
                  弾く (<Romanji>hiku</Romanji>)
                </Strong>{" "}
                is a verb meaning ”to play” (used for stringed instruments like
                the guitar or piano). It follows regular Japanese verb
                conjugation patterns.
                <ul className="list-disc px-16">
                  <li>
                    <Strong>Basic Form:</Strong> 弾く (<Romanji>hiku</Romanji>)
                    – ”to play”
                  </li>
                  <li>
                    <Strong>Polite Form:</Strong> 弾きます (
                    <Romanji>hikimasu</Romanji>) – ”play (polite)”
                  </li>
                  <li>
                    <Strong>Negative Form:</Strong> 弾かない (
                    <Romanji>hikanai</Romanji>) – ”do not play”
                  </li>
                  <li>
                    <Strong>Past Form:</Strong> 弾いた (
                    <Romanji>hikita</Romanji>) – ”played”
                  </li>
                </ul>
              </li>
              <li className="mb-4">
                <BoldSubHeading>Example:</BoldSubHeading>
                ギター を 弾きます (<Romanji>Gitaa o hikimasu</Romanji>) – ”I
                play the guitar.”
                <br />
                The verb{" "}
                <Strong>
                  弾く (<Romanji>hiku</Romanji>)
                </Strong>{" "}
                is typically used with the object marked by{" "}
                <Strong>を (o)</Strong>.
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            🤔 大好き (Daisuki) – Love (Something)
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ul className="list-disc divide-y px-10 py-5 text-sm font-medium text-gray-500 dark:bg-gray-900 xl:text-base">
              <li className="mb-4">
                <Strong>
                  大好き (<Romanji>daisuki</Romanji>)
                </Strong>{" "}
                is an adjective that expresses a strong liking or love for
                something. It’s often used to describe nouns and typically
                follows the noun it describes without needing a verb like ”to
                be” in casual sentences.
              </li>
              <li className="mb-4">
                <BoldSubHeading>Structure:</BoldSubHeading>
                <Strong>
                  <ItalicLime>Noun</ItalicLime> + が + 大好き
                </Strong>{" "}
                – ”I love [noun]”
              </li>
              <li className="mb-4">
                <BoldSubHeading>Examples:</BoldSubHeading>
                ギター が 大好き です (<Romanji>Gitaa ga daisuki desu</Romanji>)
                – ”I love the guitar.”
                <br />
                <p>
                  Here,{" "}
                  <Strong>
                    が (<Romanji>ga</Romanji>)
                  </Strong>{" "}
                  marks the subject of the sentence, and{" "}
                  <Strong>
                    大好き (<Romanji>daisuki</Romanji>)
                  </Strong>{" "}
                  is used to express a strong liking for the noun,{" "}
                  <Strong>
                    ギター (<Romanji>gitaa</Romanji>)
                  </Strong>
                  .
                </p>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
const GramPatRecog4 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementInt = () => {
    if (lsScore.SI !== undefined) {
      {
        if (lsScore.SI < 11) {
          setLSScore({ ...lsScore, SI: lsScore.SI + 1 });
        }
      }
    }
  };

  return (
    <div
      className="w-full pb-6"
      onClick={() => {
        incrementInt();
      }}
    >
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Check out these tips for identifying grammar patterns:
      </h2>
      {/* accordion color */}
      <Accordion collapseAll className="max-w-[936.8px]">
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            🤔 ところで (Tokoro de) - By the way; incidentally
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ul className="list-disc divide-y px-10 py-5 text-sm font-medium text-gray-500 dark:bg-gray-900 xl:text-base">
              <li className="mb-4">
                Used to introduce a new topic or shift the conversation. It’s
                similar to saying “by the way” in English. It is often used to
                transition between topics.
              </li>
              <li className="mb-4">
                <Strong>Structure:</Strong> ところで + [new topic/question or
                statement]
              </li>
              <li className="mb-4">
                <BoldSubHeading>Examples:</BoldSubHeading>
                ところで、今日は どう でしたか？(
                <Romanji>Tokoro de, kyou wa dou deshita ka?</Romanji>) – “By the
                way, how was today?”
              </li>
              <li className="mb-4">
                <Strong>Note:</Strong> It is typically used at the beginning of
                a sentence to change the subject or introduce a side note.
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-lime-100 hover:text-lime-600">
            🤔 今 (Ima) - Now; at this moment
          </Accordion.Title>
          <Accordion.Content className="p-0">
            <ul className="list-disc divide-y px-10 py-5 text-sm font-medium text-gray-500 dark:bg-gray-900 xl:text-base">
              <p className="mb-4">
                Refers to the present time or a current situation. It can be
                used to indicate something happening right now, or to provide
                context for something that is currently relevant.
              </p>
              <li className="mb-4">
                Used at the{" "}
                <Strong>
                  <span className="underline">beginning of a sentence</span>
                </Strong>{" "}
                to indicate something happening in the present or right now.
                <ul className="list-disc px-16">
                  <li>
                    <Strong>Structure:</Strong> 今 + [
                    <ItalicLime>verb or phrase</ItalicLime> indicating present
                    action or state]
                  </li>
                  <li>
                    今、仕事 を しています。(
                    <Romanji>Ima, shigoto o shiteimasu.</Romanji>) - Right now,
                    I am working.
                  </li>
                  <li>
                    今、学生 です。(<Romanji>Ima, gakusei desu.</Romanji>) - I
                    am a student right now.
                  </li>
                  <li>
                    今、日本に 住んでいます。(
                    <Romanji>Ima, Nihon ni sundeimasu.</Romanji>) - I am living
                    in Japan at the moment.
                  </li>
                </ul>
              </li>
              <li className="mb-4">
                今 can appear at the{" "}
                <Strong>
                  <span className="underline">end of a phrase</span>
                </Strong>{" "}
                for emphasis, especially when the speaker wants to underline the
                present or a specific event happening now.
                <ul className="list-disc px-16">
                  <li>
                    <Strong>Structure:</Strong> [
                    <ItalicLime>subject</ItalicLime>] + 今 + [
                    <ItalicLime>predicate</ItalicLime>]
                  </li>
                  <li>
                    私たちは 今、外に 出かけています。(
                    <Romanji>
                      Watashitachi wa ima, soto ni dekaketeimasu.
                    </Romanji>
                    ) - We are going out right now.
                  </li>
                  <li>
                    彼は 今、働いています。(
                    <Romanji>Kare wa ima, hataraiteimasu.</Romanji>) - He is
                    working now.
                  </li>
                </ul>
              </li>
              <li className="mb-4">
                In this structure, 今 is used at the{" "}
                <Strong>
                  <span className="underline">end of a clause</span>
                </Strong>
                , emphasizing the time of the action.
                <ul className="list-disc px-16">
                  <li>
                    <Strong>Structure:</Strong> [
                    <ItalicLime>Predicate</ItalicLime>] + 今 (Emphasizing that
                    something is happening now in the context of an action or
                    verb)
                  </li>
                  <li>
                    勉強 を している 今、音楽は 聞けません。(
                    <Romanji>
                      Benkyou o shiteiru ima, ongaku wa kikemasen.
                    </Romanji>
                    ) - I cannot listen to music while studying now.
                  </li>
                </ul>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export { GramPatRecog1, GramPatRecog2, GramPatRecog3, GramPatRecog4 };

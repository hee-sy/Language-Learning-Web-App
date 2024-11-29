import { useState, useContext } from "react";
import { LSContext } from "../../pages/LessonB";

const MnemonicsP1 = () => {
  const [opens, setOpens] = useState([false, false, false, false]);
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementVisInt = () => {
    if (lsScore.VV !== undefined && lsScore.SI !== undefined) {
      {
        if (lsScore.VV > -11 && lsScore.SI < 11) {
          setLSScore({ ...lsScore, VV: lsScore.VV - 1, SI: lsScore.SI + 1 });
        } else if (lsScore.VV > -11) {
          setLSScore({ ...lsScore, VV: lsScore.VV - 1 });
        } else if (lsScore.SI < 11) {
          setLSScore({ ...lsScore, SI: lsScore.SI + 1 });
        }
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center self-center justify-self-center py-4 md:flex-row">
      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Check out these Kanji{"'"}s in picture:
      </h2>
      {/* buttons */}
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 0) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          歩
        </button>
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 1) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          好
        </button>
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 2) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          日
        </button>
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 3) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          忙
        </button>
      </div>
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={0}
        imgPath={"/images/mnemonics/po.png"}
        readAs={"po"}
        meaning={"To walk, to step, progress."}
      />
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={1}
        imgPath={"/images/mnemonics/suki.png"}
        readAs={"suki"}
        meaning={"To like, to be fond of, favorite."}
      />
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={2}
        imgPath={"/images/mnemonics/jitsu.png"}
        readAs={"nichi, jitsu"}
        meaning={"Sun, day, Japan (as in 日本, Nihon)."}
      />
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={3}
        imgPath={"/images/mnemonics/isogashii.jpg"}
        readAs={"(忙 しい) isoga shii"}
        meaning={"Busy, occupied."}
      />
    </div>
  );
};
const MnemonicsP2 = () => {
  const [opens, setOpens] = useState([false, false, false, false]);
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementVisInt = () => {
    if (lsScore.VV !== undefined && lsScore.SI !== undefined) {
      {
        if (lsScore.VV > -11 && lsScore.SI < 11) {
          setLSScore({ ...lsScore, VV: lsScore.VV - 1, SI: lsScore.SI + 1 });
        } else if (lsScore.VV > -11) {
          setLSScore({ ...lsScore, VV: lsScore.VV - 1 });
        } else if (lsScore.SI < 11) {
          setLSScore({ ...lsScore, SI: lsScore.SI + 1 });
        }
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center self-center justify-self-center py-4 md:flex-row">
      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Check out these Kanji{"'"}s in picture:
      </h2>
      {/* buttons */}
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 0) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          書
        </button>
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 1) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          本
        </button>
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 2) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          白
        </button>
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 3) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          思
        </button>
      </div>
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={0}
        imgPath={"/images/mnemonics/kaku_sho.png"}
        readAs={"kaku; sho"}
        meaning={"To write; book"}
      />
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={1}
        imgPath={"/images/mnemonics/hon.png"}
        readAs={"hon"}
        meaning={"Book(s)"}
      />
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={2}
        imgPath={"/images/mnemonics/shiro.png"}
        readAs={"shiro; haku"}
        meaning={"White"}
      />
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={3}
        imgPath={"/images/mnemonics/omou.png"}
        readAs={"omo; shi"}
        meaning={"To think (verb)"}
      />
    </div>
  );
};
const MnemonicsP3 = () => {
  const [opens, setOpens] = useState([false, false, false]);
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementVisInt = () => {
    if (lsScore.VV !== undefined && lsScore.SI !== undefined) {
      {
        if (lsScore.VV > -11 && lsScore.SI < 11) {
          setLSScore({ ...lsScore, VV: lsScore.VV - 1, SI: lsScore.SI + 1 });
        } else if (lsScore.VV > -11) {
          setLSScore({ ...lsScore, VV: lsScore.VV - 1 });
        } else if (lsScore.SI < 11) {
          setLSScore({ ...lsScore, SI: lsScore.SI + 1 });
        }
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center self-center justify-self-center py-4 md:flex-row">
      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Check out these Kanji{"'"}s in picture:
      </h2>
      {/* buttons */}
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 0) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          弾
        </button>
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 1) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          大
        </button>
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 2) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          聞
        </button>
      </div>
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={0}
        imgPath={"/images/mnemonics/hiku.png"}
        readAs={"弾く (hiku)"}
        meaning={"To bounce."}
      />
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={1}
        imgPath={"/images/mnemonics/dai.png"}
        readAs={"Ookii; Dai"}
        meaning={"Big, large."}
      />
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={2}
        imgPath={"/images/mnemonics/kiku.jpg"}
        readAs={"kiku; bun"}
        meaning={
          <>
            To listen, to hear.
            <br />
            For example, 新聞 (Shin bun) - Newspaper
          </>
        }
      />
    </div>
  );
};
const MnemonicsP4 = () => {
  const [opens, setOpens] = useState([false, false, false, false]);
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementVisInt = () => {
    if (lsScore.VV !== undefined && lsScore.SI !== undefined) {
      {
        if (lsScore.VV > -11 && lsScore.SI < 11) {
          setLSScore({ ...lsScore, VV: lsScore.VV - 1, SI: lsScore.SI + 1 });
        } else if (lsScore.VV > -11) {
          setLSScore({ ...lsScore, VV: lsScore.VV - 1 });
        } else if (lsScore.SI < 11) {
          setLSScore({ ...lsScore, SI: lsScore.SI + 1 });
        }
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center self-center justify-self-center py-4 md:flex-row">
      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Check out these Kanji{"'"}s in picture:
      </h2>
      {/* buttons */}
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 0) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          今
        </button>
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 1) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          天
        </button>
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 2) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          気
        </button>
        <button
          type="button"
          onClick={() => {
            setOpens(
              opens.map((open, index) => {
                if (index === 3) {
                  return true;
                }
                return open;
              }),
            );

            // TODO: increment Vis & Intuitive
            incrementVisInt();
          }}
          className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-lime-700 focus:z-10 focus:text-lime-700 focus:ring-2 focus:ring-lime-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-lime-500"
        >
          春
        </button>
      </div>
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={0}
        imgPath={"/images/mnemonics/kon.png"}
        readAs={"ima; kon"}
        meaning={
          <>
            Now; this ...
            <br />
            今日 (Kyou) - Today
            <br />
            今朝 (Kesa) - This morning
            <br />
            今年 (Kotoshi) - This year
          </>
        }
      />
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={1}
        imgPath={"/images/mnemonics/ten.png"}
        readAs={"ten; amatsu"}
        meaning={
          <>
            sky, heavens, imperial.
            <br />
            天気 (Tenki) - weather
            <br />
            天使 (Tenshi) - angel
            <br />
            天才 (Tensai) - genius
          </>
        }
      />
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={2}
        imgPath={"/images/mnemonics/ki.png"}
        readAs={"ki"}
        meaning={
          <>
            Spirit, mind, air, atmosphere.
            <br />
            電気 (Denki) - electricity
            <br />
            気分 (Kibun) - feeling; mood.
            <br />
            空気 (Kuuki) - air; atmosphere
          </>
        }
      />
      <MnemonicsModal
        ops={opens}
        setOps={setOpens}
        i={3}
        imgPath={"/images/mnemonics/haru.png"}
        readAs={"haru"}
        meaning={"Spring."}
      />
    </div>
  );
};

const MnemonicsModal = ({ ops, setOps, i, imgPath, readAs, meaning }) => {
  return (
    <div
      onClick={() => {
        setOps(
          ops.map((open, index) => {
            if (index === i) {
              return false;
            }
            return open;
          }),
        );
      }}
      className={`fixed inset-0 z-10 flex items-center justify-center bg-black/20 transition-colors ${ops[i] ? "visible" : "invisible"}`}
    >
      {/* content */}
      <div className="z-20 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <img
          className="h-full w-full rounded-t-lg object-cover"
          src={imgPath}
          alt="po"
        />
        <div className="divide-y divide-gray-200 p-2 dark:divide-gray-700">
          <div className="flex flex-row px-5 py-2">
            <h3 className="w-1/4 text-gray-400">Read as:</h3>
            <p className="w-3/4 ps-2 font-normal italic text-gray-700 dark:text-gray-400">
              {readAs}
            </p>
          </div>
          <div className="flex flex-row px-5 py-2">
            <h3 className="w-1/4 text-gray-400">Meaning:</h3>
            <p className="w-3/4 ps-2 font-normal text-gray-700 dark:text-gray-400">
              {meaning}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MnemonicsP1, MnemonicsP2, MnemonicsP3, MnemonicsP4 };

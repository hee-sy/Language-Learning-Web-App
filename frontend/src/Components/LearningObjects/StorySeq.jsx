import { useState, useContext } from "react";
import { LSContext } from "../../pages/LessonB";

const StorySeq11 = () => {
  const [widgets, setWidgets] = useState([]); //widgets
  const [index, setIndex] = useState(""); //order of widgets
  const [isDragOver, setIsDragOver] = useState(false);
  const [isDropped, setIsDropped] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isCorrect, setIsCorrect] = useState(null);
  const numofindices = 5;
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementSeq = () => {
    if (lsScore.SG !== undefined) {
      {
        if (lsScore.SG > -11) {
          setLSScore({ ...lsScore, SG: lsScore.SG - 1 });
        }
      }
    }
  };

  const handleOnDrag = (e, widget, index) => {
    e.dataTransfer.setData("widgetJap", widget.jap);
    e.dataTransfer.setData("widgetRom", widget.rom);
    e.dataTransfer.setData("index", index);
    incrementSeq();
  };

  const updateIsDropped = (index) => {
    const nextIndices = isDropped.map((val, i) => {
      //new array
      if (i == index) {
        // set isDropped to true
        // console.log("index", index);
        return true;
      } else {
        // The rest haven't changed
        return val;
      }
    });
    setIsDropped(nextIndices);
    // console.log("isDropped", nextIndices);
  };

  const handleOnDrop = (e) => {
    setIsDragOver(false);
    if (index.length < numofindices) {
      const i = e.dataTransfer.getData("index");
      //console.log("index", i);
      setIndex(() => {
        let str = index;
        str += i.toString();
        return str;
      });
      updateIsDropped(i); //update widget dropped status

      const widget = {
        jap: e.dataTransfer.getData("widgetJap"),
        rom: e.dataTransfer.getData("widgetRom"),
      };
      setWidgets((widgets) => {
        const newWidgets = [...widgets];
        newWidgets.push(widget);
        return newWidgets;
      });
    }
  };

  const handleClear = () => {
    setWidgets([]);
    setIndex("");
    setIsDropped([false, false, false, false, false]);
    setIsCorrect(null);
  };

  const handleSubmit = () => {
    if (index.length < numofindices) {
      alert("Please use all the phrases.");
      return;
    }
    if (index == "01234") {
      setIsCorrect(true);
    } else if (index != "01234") {
      setIsCorrect(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  return (
    <div className="flex w-11/12 flex-col items-center justify-center py-10">
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Sequence the phrases to make a sentence <br />- by dragging them into
        the following box:
      </h2>
      <div className="flex flex-col items-end xl:flex-row">
        <div
          id="ans-box"
          className={`${isDragOver ? "bg-lime-100" : "bg-white"} page max-w-screen flex h-min min-h-20 w-fit min-w-52 flex-row flex-wrap gap-x-3 gap-y-1 rounded-3xl border-4 border-dotted border-lime-700 px-3 py-10 xl:min-w-80 xl:px-10 xl:py-3`}
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {widgets.map((widget, index) => (
            <div
              key={index}
              className="dropped-widget h-min text-sm font-medium text-gray-800 xl:text-base"
            >
              <p>
                {widget.jap}
                {index == 2 ? "," : ""}
                {index == 4 ? "。" : ""}
              </p>
              <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
                {widget.rom}
                {index == 2 ? "," : ""}
                {index == 4 ? "。" : ""}
              </p>
            </div>
          ))}
        </div>
        <div>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-lime-700 hover:cursor-pointer xl:text-sm"
            onClick={() => handleSubmit()}
            title="Check correct answer."
          >
            Submit
          </button>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-red-600 hover:cursor-pointer xl:text-sm"
            onClick={() => handleClear()}
            title="Clear your answer."
          >
            Clear
          </button>
        </div>
      </div>
      <p className="mb-3 px-3 xl:me-32">
        {'"I want to watch a movie, but I’m busy."'}
      </p>
      <div className="widgets flex flex-wrap">
        <div
          className={`widget ${isDropped[4] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) => handleOnDrag(e, { jap: "です", rom: "desu " }, 4)}
        >
          <p>です</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            desu
          </p>
        </div>
        <div
          className={`widget ${isDropped[1] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "見たいです", rom: "mitai desu" }, 1)
          }
        >
          <p>見たいです</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            mitai desu
          </p>
        </div>
        <div
          className={`widget ${isDropped[3] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "忙しい", rom: "isogashii " }, 3)
          }
        >
          <p>忙しい</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            isogashii
          </p>
        </div>
        <div
          className={`widget ${isDropped[0] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "映画を", rom: "eiga o" }, 0)
          }
        >
          <p>映画を</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            eiga o
          </p>
        </div>
        <div
          className={`widget ${isDropped[2] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) => handleOnDrag(e, { jap: "けど", rom: "kedo" }, 2)}
        >
          <p>けど</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            kedo
          </p>
        </div>
      </div>
      <p
        className={`${isCorrect ? "block" : "hidden"} bg-lime-100 p-2 text-sm font-medium text-lime-700 xl:text-base`}
      >
        Your answer is correct!
      </p>
      <div
        className={`${isCorrect == false ? "block" : "hidden"} bg-red-100 p-2 text-sm font-medium text-red-700 xl:text-base`}
      >
        <p>The correct answer is:</p>
        <p>映画を 見たいです けど、忙しいです。</p>
        <p className="text-xs font-normal italic xl:text-sm">
          Eiga o mitai desu kedo, isogashii desu.
        </p>
      </div>
    </div>
  );
};
const StorySeq12 = () => {
  const [widgets, setWidgets] = useState([]); //widgets
  const [index, setIndex] = useState(""); //order of widgets
  const [isDragOver, setIsDragOver] = useState(false);
  const [isDropped, setIsDropped] = useState([false, false, false, false]);
  const [isCorrect, setIsCorrect] = useState(null);
  const numofindices = 4;
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementSeq = () => {
    if (lsScore.SG !== undefined) {
      {
        if (lsScore.SG > -11) {
          setLSScore({ ...lsScore, SG: lsScore.SG - 1 });
        }
      }
    }
  };

  const handleOnDrag = (e, widget, index) => {
    e.dataTransfer.setData("widgetJap", widget.jap);
    e.dataTransfer.setData("widgetRom", widget.rom);
    e.dataTransfer.setData("index", index);
    incrementSeq();
  };

  const updateIsDropped = (index) => {
    const nextIndices = isDropped.map((val, i) => {
      //new array
      if (i == index) {
        // set isDropped to true
        // console.log("index", index);
        return true;
      } else {
        // The rest haven't changed
        return val;
      }
    });
    setIsDropped(nextIndices);
    // console.log("isDropped", nextIndices);
  };

  const handleOnDrop = (e) => {
    setIsDragOver(false);
    if (index.length < numofindices) {
      const i = e.dataTransfer.getData("index");
      //console.log("index", i);
      setIndex(() => {
        let str = index;
        str += i.toString();
        return str;
      });
      updateIsDropped(i); //update widget dropped status

      const widget = {
        jap: e.dataTransfer.getData("widgetJap"),
        rom: e.dataTransfer.getData("widgetRom"),
      };
      setWidgets((widgets) => {
        const newWidgets = [...widgets];
        newWidgets.push(widget);
        return newWidgets;
      });
    }
  };

  const handleClear = () => {
    setWidgets([]);
    setIndex("");
    setIsDropped([false, false, false, false]);
    setIsCorrect(null);
  };

  const handleSubmit = () => {
    if (index.length < numofindices) {
      alert("Please use all the phrases.");
      return;
    }
    if (index == "0123") {
      setIsCorrect(true);
    } else if (index != "0123") {
      setIsCorrect(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  return (
    <div className="flex w-11/12 flex-col items-center justify-center py-10">
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Sequence the phrases to make a sentence <br />- by dragging them into
        the following box:
      </h2>
      <div className="flex flex-col items-end xl:flex-row">
        <div
          id="ans-box"
          className={`${isDragOver ? "bg-lime-100" : "bg-white"} page max-w-screen flex h-min min-h-20 w-fit min-w-52 flex-row flex-wrap gap-x-3 gap-y-1 rounded-3xl border-4 border-dotted border-lime-700 px-3 py-10 xl:min-w-80 xl:px-10 xl:py-3`}
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {widgets.map((widget, index) => (
            <div
              key={index}
              className="dropped-widget h-min text-sm font-medium text-gray-800 xl:text-base"
            >
              <p>
                {widget.jap}
                {index == 1 ? "," : ""}
                {index == 3 ? "。" : ""}
              </p>
              <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
                {widget.rom}
                {index == 1 ? "," : ""}
                {index == 3 ? "。" : ""}
              </p>
            </div>
          ))}
        </div>
        <div>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-lime-700 hover:cursor-pointer xl:text-sm"
            onClick={() => handleSubmit()}
            title="Check correct answer."
          >
            Submit
          </button>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-red-600 hover:cursor-pointer xl:text-sm"
            onClick={() => handleClear()}
            title="Clear your answer."
          >
            Clear
          </button>
        </div>
      </div>
      <p className="mb-3 px-3 xl:me-32">
        {'"I’m busy, but I will meet a friend."'}
      </p>
      <div className="widgets flex flex-wrap">
        <div
          className={`widget ${isDropped[2] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "友達 に", rom: "tomodachi ni" }, 2)
          }
        >
          <p>友達 に</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            tomodachi ni
          </p>
        </div>
        <div
          className={`widget ${isDropped[0] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "忙しい です", rom: "Isogashii desu" }, 0)
          }
        >
          <p>忙しい です</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            isogashii desu
          </p>
        </div>
        <div
          className={`widget ${isDropped[3] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "会います", rom: "aimasu" }, 3)
          }
        >
          <p>会います</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            aimasu
          </p>
        </div>
        <div
          className={`widget ${isDropped[1] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) => handleOnDrag(e, { jap: "けど", rom: "kedo" }, 1)}
        >
          <p>けど</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            kedo
          </p>
        </div>
      </div>
      <p
        className={`${isCorrect ? "block" : "hidden"} bg-lime-100 p-2 text-sm font-medium text-lime-700 xl:text-base`}
      >
        Your answer is correct!
      </p>
      <div
        className={`${isCorrect == false ? "block" : "hidden"} bg-red-100 p-2 text-sm font-medium text-red-700 xl:text-base`}
      >
        <p>The correct answer is:</p>
        <p>忙しいです けど、友達に 会います。</p>
        <p className="text-xs font-normal italic xl:text-sm">
          Isogashii desu kedo, tomodachi ni aimasu.
        </p>
      </div>
    </div>
  );
};
const StorySeq21 = () => {
  const [widgets, setWidgets] = useState([]); //widgets
  const [index, setIndex] = useState(""); //order of widgets
  const [isDragOver, setIsDragOver] = useState(false);
  const [isDropped, setIsDropped] = useState([false, false, false]);
  const [isCorrect, setIsCorrect] = useState(null);
  const numofindices = 3;
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementSeq = () => {
    if (lsScore.SG !== undefined) {
      {
        if (lsScore.SG > -11) {
          setLSScore({ ...lsScore, SG: lsScore.SG - 1 });
        }
      }
    }
  };

  const handleOnDrag = (e, widget, index) => {
    e.dataTransfer.setData("widgetJap", widget.jap);
    e.dataTransfer.setData("widgetRom", widget.rom);
    e.dataTransfer.setData("index", index);
    incrementSeq();
  };

  const updateIsDropped = (index) => {
    const nextIndices = isDropped.map((val, i) => {
      //new array
      if (i == index) {
        // set isDropped to true
        // console.log("index", index);
        return true;
      } else {
        // The rest haven't changed
        return val;
      }
    });
    setIsDropped(nextIndices);
    // console.log("isDropped", nextIndices);
  };

  const handleOnDrop = (e) => {
    setIsDragOver(false);
    if (index.length < numofindices) {
      const i = e.dataTransfer.getData("index");
      //console.log("index", i);
      setIndex(() => {
        let str = index;
        str += i.toString();
        return str;
      });
      updateIsDropped(i); //update widget dropped status

      const widget = {
        jap: e.dataTransfer.getData("widgetJap"),
        rom: e.dataTransfer.getData("widgetRom"),
      };
      setWidgets((widgets) => {
        const newWidgets = [...widgets];
        newWidgets.push(widget);
        return newWidgets;
      });
    }
  };

  const handleClear = () => {
    setWidgets([]);
    setIndex("");
    setIsDropped([false, false, false, false, false]);
    setIsCorrect(null);
  };

  const handleSubmit = () => {
    if (index.length < numofindices) {
      alert("Please use all the phrases.");
      return;
    }
    if (index == "012") {
      setIsCorrect(true);
    } else if (index != "012") {
      setIsCorrect(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  return (
    <div className="flex w-11/12 flex-col items-center justify-center py-10">
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Sequence the phrases to make a sentence <br />- by dragging them into
        the following box:
      </h2>
      <div className="flex flex-col items-end xl:flex-row">
        <div
          id="ans-box"
          className={`${isDragOver ? "bg-lime-100" : "bg-white"} page max-w-screen flex h-min min-h-20 w-fit min-w-52 flex-row flex-wrap gap-x-3 gap-y-1 rounded-3xl border-4 border-dotted border-lime-700 px-3 py-10 xl:min-w-80 xl:px-10 xl:py-3`}
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {widgets.map((widget, index) => (
            <div
              key={index}
              className="dropped-widget h-min text-sm font-medium text-gray-800 xl:text-base"
            >
              <p>
                {widget.jap}
                {index == 0 ? "!" : ""}
                {index == 1 ? "," : ""}
                {index == 2 ? "。" : ""}
              </p>
              <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
                {widget.rom}
                {index == 0 ? "!" : ""}
                {index == 1 ? "," : ""}
                {index == 2 ? "。" : ""}
              </p>
            </div>
          ))}
        </div>
        <div>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-lime-700 hover:cursor-pointer xl:text-sm"
            onClick={() => handleSubmit()}
            title="Check correct answer."
          >
            Submit
          </button>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-red-600 hover:cursor-pointer xl:text-sm"
            onClick={() => handleClear()}
            title="Clear your answer."
          >
            Clear
          </button>
        </div>
      </div>
      <p className="mb-3 px-3 xl:me-32">
        {'"This is delicious! Actually, I made it."'}
      </p>
      <div className="widgets flex flex-wrap">
        <div
          className={`widget ${isDropped[0] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(
              e,
              { jap: "これ、おいしいね", rom: "kore, oishī ne" },
              0,
            )
          }
        >
          <p>これ、おいしいね</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            kore, oishī ne
          </p>
        </div>
        <div
          className={`widget ${isDropped[2] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "会います", rom: "aimasu" }, 2)
          }
        >
          <p>私が 作った んだよ</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            watashi ga tsukutta nda yo
          </p>
        </div>
        <div
          className={`widget ${isDropped[1] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "実は", rom: "jitsuwa" }, 1)
          }
        >
          <p>実は</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            jitsuwa
          </p>
        </div>
      </div>
      <p
        className={`${isCorrect ? "block" : "hidden"} bg-lime-100 p-2 text-sm font-medium text-lime-700 xl:text-base`}
      >
        Your answer is correct!
      </p>
      <div
        className={`${isCorrect == false ? "block" : "hidden"} bg-red-100 p-2 text-sm font-medium text-red-700 xl:text-base`}
      >
        <p>The correct answer is:</p>
        <p>これ、おいしいね！実は、私が 作った んだよ。</p>
        <p className="text-xs font-normal italic xl:text-sm">
          Kore, oishī ne! Jitsuwa, watashi ga tsukutta nda yo.
        </p>
      </div>
    </div>
  );
};
const StorySeq22 = () => {
  const [widgets, setWidgets] = useState([]); //widgets
  const [index, setIndex] = useState(""); //order of widgets
  const [isDragOver, setIsDragOver] = useState(false);
  const [isDropped, setIsDropped] = useState([false, false, false]);
  const [isCorrect, setIsCorrect] = useState(null);
  const numofindices = 3;
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementSeq = () => {
    if (lsScore.SG !== undefined) {
      {
        if (lsScore.SG > -11) {
          setLSScore({ ...lsScore, SG: lsScore.SG - 1 });
        }
      }
    }
  };

  const handleOnDrag = (e, widget, index) => {
    e.dataTransfer.setData("widgetJap", widget.jap);
    e.dataTransfer.setData("widgetRom", widget.rom);
    e.dataTransfer.setData("index", index);
    incrementSeq();
  };

  const updateIsDropped = (index) => {
    const nextIndices = isDropped.map((val, i) => {
      //new array
      if (i == index) {
        // set isDropped to true
        // console.log("index", index);
        return true;
      } else {
        // The rest haven't changed
        return val;
      }
    });
    setIsDropped(nextIndices);
    // console.log("isDropped", nextIndices);
  };

  const handleOnDrop = (e) => {
    setIsDragOver(false);
    if (index.length < numofindices) {
      const i = e.dataTransfer.getData("index");
      //console.log("index", i);
      setIndex(() => {
        let str = index;
        str += i.toString();
        return str;
      });
      updateIsDropped(i); //update widget dropped status

      const widget = {
        jap: e.dataTransfer.getData("widgetJap"),
        rom: e.dataTransfer.getData("widgetRom"),
      };
      setWidgets((widgets) => {
        const newWidgets = [...widgets];
        newWidgets.push(widget);
        return newWidgets;
      });
    }
  };

  const handleClear = () => {
    setWidgets([]);
    setIndex("");
    setIsDropped([false, false, false, false, false]);
    setIsCorrect(null);
  };

  const handleSubmit = () => {
    if (index.length < numofindices) {
      alert("Please use all the phrases.");
      return;
    }
    if (index == "012") {
      setIsCorrect(true);
    } else if (index != "012") {
      setIsCorrect(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  return (
    <div className="flex w-11/12 flex-col items-center justify-center py-10">
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Sequence the phrases to make a sentence <br />- by dragging them into
        the following box:
      </h2>
      <div className="flex flex-col items-end xl:flex-row">
        <div
          id="ans-box"
          className={`${isDragOver ? "bg-lime-100" : "bg-white"} page max-w-screen flex h-min min-h-20 w-fit min-w-52 flex-row flex-wrap gap-x-3 gap-y-1 rounded-3xl border-4 border-dotted border-lime-700 px-3 py-10 xl:min-w-80 xl:px-10 xl:py-3`}
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {widgets.map((widget, index) => (
            <div
              key={index}
              className="dropped-widget h-min text-sm font-medium text-gray-800 xl:text-base"
            >
              <p>
                {widget.jap}
                {index == 0 ? "!" : ""}
                {index == 2 ? "。" : ""}
              </p>
              <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
                {widget.rom}
                {index == 0 ? "!" : ""}
                {index == 2 ? "。" : ""}
              </p>
            </div>
          ))}
        </div>
        <div>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-lime-700 hover:cursor-pointer xl:text-sm"
            onClick={() => handleSubmit()}
            title="Check correct answer."
          >
            Submit
          </button>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-red-600 hover:cursor-pointer xl:text-sm"
            onClick={() => handleClear()}
            title="Clear your answer."
          >
            Clear
          </button>
        </div>
      </div>
      <p className="mb-3 px-3 xl:me-32">
        {
          '"This movie is interesting! I think the next movie will be interesting too."'
        }
      </p>
      <div className="widgets flex flex-wrap">
        <div
          className={`widget ${isDropped[2] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "と思います", rom: "to omoimasu" }, 2)
          }
        >
          <p>と思います</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            to omoimasu
          </p>
        </div>
        <div
          className={`widget ${isDropped[0] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(
              e,
              { jap: "この映画、面白いね", rom: "kono eiga, omoshiroi ne" },
              0,
            )
          }
        >
          <p>この映画、面白いね</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            kono eiga, omoshiroi ne
          </p>
        </div>
        <div
          className={`widget ${isDropped[1] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(
              e,
              { jap: "次の 映画も 面白い", rom: "tsugi no eiga mo omoshiroi" },
              1,
            )
          }
        >
          <p>次の 映画も 面白い</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            tsugi no eiga mo omoshiroi
          </p>
        </div>
      </div>
      <p
        className={`${isCorrect ? "block" : "hidden"} bg-lime-100 p-2 text-sm font-medium text-lime-700 xl:text-base`}
      >
        Your answer is correct!
      </p>
      <div
        className={`${isCorrect == false ? "block" : "hidden"} bg-red-100 p-2 text-sm font-medium text-red-700 xl:text-base`}
      >
        <p>The correct answer is:</p>
        <p>この映画、面白いね！次の映画も面白いと思います。</p>
        <p className="text-xs font-normal italic xl:text-sm">
          Kono eiga, omoshiroi ne! Tsugi no eiga mo omoshiroi to omoimasu.
        </p>
      </div>
    </div>
  );
};
const StorySeq31 = () => {
  const [widgets, setWidgets] = useState([]); //widgets
  const [index, setIndex] = useState(""); //order of widgets
  const [isDragOver, setIsDragOver] = useState(false);
  const [isDropped, setIsDropped] = useState([false, false, false]);
  const [isCorrect, setIsCorrect] = useState(null);
  const numofindices = 3;
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementSeq = () => {
    if (lsScore.SG !== undefined) {
      {
        if (lsScore.SG > -11) {
          setLSScore({ ...lsScore, SG: lsScore.SG - 1 });
        }
      }
    }
  };

  const handleOnDrag = (e, widget, index) => {
    e.dataTransfer.setData("widgetJap", widget.jap);
    e.dataTransfer.setData("widgetRom", widget.rom);
    e.dataTransfer.setData("index", index);
    incrementSeq();
  };

  const updateIsDropped = (index) => {
    const nextIndices = isDropped.map((val, i) => {
      //new array
      if (i == index) {
        // set isDropped to true
        // console.log("index", index);
        return true;
      } else {
        // The rest haven't changed
        return val;
      }
    });
    setIsDropped(nextIndices);
    // console.log("isDropped", nextIndices);
  };

  const handleOnDrop = (e) => {
    setIsDragOver(false);
    if (index.length < numofindices) {
      const i = e.dataTransfer.getData("index");
      //console.log("index", i);
      setIndex(() => {
        let str = index;
        str += i.toString();
        return str;
      });
      updateIsDropped(i); //update widget dropped status

      const widget = {
        jap: e.dataTransfer.getData("widgetJap"),
        rom: e.dataTransfer.getData("widgetRom"),
      };
      setWidgets((widgets) => {
        const newWidgets = [...widgets];
        newWidgets.push(widget);
        return newWidgets;
      });
    }
  };

  const handleClear = () => {
    setWidgets([]);
    setIndex("");
    setIsDropped([false, false, false]);
    setIsCorrect(null);
  };

  const handleSubmit = () => {
    if (index.length < numofindices) {
      alert("Please use all the phrases.");
      return;
    }
    if (index == "012") {
      setIsCorrect(true);
    } else if (index != "012") {
      setIsCorrect(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  return (
    <div className="flex w-11/12 flex-col items-center justify-center py-10">
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Sequence the phrases to make a sentence <br />- by dragging them into
        the following box:
      </h2>
      <div className="flex flex-col items-end xl:flex-row">
        <div
          id="ans-box"
          className={`${isDragOver ? "bg-lime-100" : "bg-white"} page max-w-screen flex h-min min-h-20 w-fit min-w-52 flex-row flex-wrap items-center justify-items-center gap-x-3 gap-y-1 rounded-3xl border-4 border-dotted border-lime-700 px-3 py-10 xl:min-w-80 xl:px-10 xl:py-3`}
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {widgets.map((widget, index) => (
            <div
              key={index}
              className={`dropped-widget h-min ${index == 0 ? "basis-full" : ""} text-sm font-medium text-gray-800 xl:text-base`}
            >
              <p>
                {widget.jap}
                {index == 0 ? "。" : ""}
                {index == 1 ? "，" : ""}
                {index == 2 ? "。" : ""}
              </p>
              <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
                {widget.rom}
                {index == 0 ? "." : ""}
                {index == 1 ? "，" : ""}
                {index == 2 ? "." : ""}
              </p>
            </div>
          ))}
        </div>
        <div>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-lime-700 hover:cursor-pointer xl:text-sm"
            onClick={() => handleSubmit()}
            title="Check correct answer."
          >
            Submit
          </button>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-red-600 hover:cursor-pointer xl:text-sm"
            onClick={() => handleClear()}
            title="Clear your answer."
          >
            Clear
          </button>
        </div>
      </div>
      <p className="mb-3 px-3 xl:me-32">
        {'"Yesterday, my friend said they went to a new café."'}
        <br />
        {'"I see, I want to go together next time."'}
      </p>
      <div className="widgets flex flex-wrap">
        <div
          className={`widget ${isDropped[2] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(
              e,
              {
                jap: "今度一緒に行きたいです",
                rom: "kondo issho ni ikitai desu",
              },
              2,
            )
          }
        >
          <p>今度一緒に行きたいです</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            kondo issho ni ikitai desu
          </p>
        </div>
        <div
          className={`widget ${isDropped[0] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(
              e,
              {
                jap: "昨日、友達が 新しい カフェに 行ったと 言って いました",
                rom: "kinou, tomodachi ga atarashii kafe ni itta to itte imashita",
              },
              0,
            )
          }
        >
          <p>昨日、友達が新しいカフェに行ったと言っていました</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            kinou, tomodachi ga atarashii kafe ni itta to itte imashita
          </p>
        </div>
        <div
          className={`widget ${isDropped[1] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(
              e,
              { jap: "そうなんですね", rom: "sou nan desu ne" },
              1,
            )
          }
        >
          <p>そうなんですね</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            sou nan desu ne
          </p>
        </div>
      </div>
      <p
        className={`${isCorrect ? "block" : "hidden"} bg-lime-100 p-2 text-sm font-medium text-lime-700 xl:text-base`}
      >
        Your answer is correct!
      </p>
      <div
        className={`${isCorrect == false ? "block" : "hidden"} bg-red-100 p-2 text-sm font-medium text-red-700 xl:text-base`}
      >
        <p>The correct answer is:</p>
        <p>
          昨日、友達が新しいカフェに行ったと言っていました。 <br />
          そうなんですね、今度一緒に行きたいです。
        </p>
        <p className="text-xs font-normal italic xl:text-sm">
          Kinou, tomodachi ga atarashii kafe ni itta to itte imashita. <br />
          Sou nan desu ne, kondo issho ni ikitai desu.
        </p>
      </div>
    </div>
  );
};
const StorySeq32 = () => {
  const [widgets, setWidgets] = useState([]); //widgets
  const [index, setIndex] = useState(""); //order of widgets
  const [isDragOver, setIsDragOver] = useState(false);
  const [isDropped, setIsDropped] = useState([false, false, false]);
  const [isCorrect, setIsCorrect] = useState(null);
  const numofindices = 3;
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementSeq = () => {
    if (lsScore.SG !== undefined) {
      {
        if (lsScore.SG > -11) {
          setLSScore({ ...lsScore, SG: lsScore.SG - 1 });
        }
      }
    }
  };

  const handleOnDrag = (e, widget, index) => {
    e.dataTransfer.setData("widgetJap", widget.jap);
    e.dataTransfer.setData("widgetRom", widget.rom);
    e.dataTransfer.setData("index", index);
    incrementSeq();
  };

  const updateIsDropped = (index) => {
    const nextIndices = isDropped.map((val, i) => {
      //new array
      if (i == index) {
        // set isDropped to true
        // console.log("index", index);
        return true;
      } else {
        // The rest haven't changed
        return val;
      }
    });
    setIsDropped(nextIndices);
    // console.log("isDropped", nextIndices);
  };

  const handleOnDrop = (e) => {
    setIsDragOver(false);
    if (index.length < numofindices) {
      const i = e.dataTransfer.getData("index");
      //console.log("index", i);
      setIndex(() => {
        let str = index;
        str += i.toString();
        return str;
      });
      updateIsDropped(i); //update widget dropped status

      const widget = {
        jap: e.dataTransfer.getData("widgetJap"),
        rom: e.dataTransfer.getData("widgetRom"),
      };
      setWidgets((widgets) => {
        const newWidgets = [...widgets];
        newWidgets.push(widget);
        return newWidgets;
      });
    }
  };

  const handleClear = () => {
    setWidgets([]);
    setIndex("");
    setIsDropped([false, false, false]);
    setIsCorrect(null);
  };

  const handleSubmit = () => {
    if (index.length < numofindices) {
      alert("Please use all the phrases.");
      return;
    }
    if (index == "012") {
      setIsCorrect(true);
    } else if (index != "012") {
      setIsCorrect(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  return (
    <div className="flex w-11/12 flex-col items-center justify-center py-10">
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Sequence the phrases to make a sentence <br />- by dragging them into
        the following box:
      </h2>
      <div className="flex flex-col items-end xl:flex-row">
        <div
          id="ans-box"
          className={`${isDragOver ? "bg-lime-100" : "bg-white"} page max-w-screen flex h-min min-h-20 w-fit min-w-52 flex-row flex-wrap gap-x-3 gap-y-1 rounded-3xl border-4 border-dotted border-lime-700 px-3 py-10 xl:min-w-80 xl:px-10 xl:py-3`}
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {widgets.map((widget, index) => (
            <div
              key={index}
              className={`${index == 0 ? "basis-full" : ""} dropped-widget h-min text-sm font-medium text-gray-800 xl:text-base`}
            >
              <p>
                {widget.jap}
                {index == 0 ? "。" : ""}
                {index == 1 ? "," : ""}
                {index == 2 ? "。" : ""}
              </p>
              <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
                {widget.rom}
                {index == 0 ? "." : ""}
                {index == 1 ? "," : ""}
                {index == 2 ? "." : ""}
              </p>
            </div>
          ))}
        </div>
        <div>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-lime-700 hover:cursor-pointer xl:text-sm"
            onClick={() => handleSubmit()}
            title="Check correct answer."
          >
            Submit
          </button>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-red-600 hover:cursor-pointer xl:text-sm"
            onClick={() => handleClear()}
            title="Clear your answer."
          >
            Clear
          </button>
        </div>
      </div>
      <p className="mb-3 px-3 xl:me-32">
        {'"Today, my friend went to the park."'}
        <br />
        {'"I see, I want to go next time too."'}
      </p>
      <div className="widgets flex flex-wrap">
        <div
          className={`widget ${isDropped[0] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(
              e,
              {
                jap: "今日は 友達が 公園に 行きました",
                rom: "kyou wa tomodachi ga kouen ni ikimashita",
              },
              0,
            )
          }
        >
          <p>今日は 友達が 公園に 行きました</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            kyou wa tomodachi ga kouen ni ikimashita
          </p>
        </div>
        <div
          className={`widget ${isDropped[1] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(
              e,
              { jap: "そうなんですね", rom: "sou nan desu ne" },
              1,
            )
          }
        >
          <p>そうなんですね</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            sou nan desu ne
          </p>
        </div>
        <div
          className={`widget ${isDropped[2] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(
              e,
              {
                jap: "今度私も行きたいです",
                rom: "kondo watashi mo ikitai desu",
              },
              2,
            )
          }
        >
          <p>今度 私も 行きたい です</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            kondo watashi mo ikitai desu
          </p>
        </div>
      </div>
      <p
        className={`${isCorrect ? "block" : "hidden"} bg-lime-100 p-2 text-sm font-medium text-lime-700 xl:text-base`}
      >
        Your answer is correct!
      </p>
      <div
        className={`${isCorrect == false ? "block" : "hidden"} bg-red-100 p-2 text-sm font-medium text-red-700 xl:text-base`}
      >
        <p>The correct answer is:</p>
        <p>今日は友達が公園に行きました。 </p>
        <p className="text-xs font-normal italic xl:text-sm">
          Kyou wa tomodachi ga kouen ni ikimashita.
        </p>
        <p>そうなんですね、今度私も行きたいです。 </p>
        <p className="text-xs font-normal italic xl:text-sm">
          Sou nan desu ne, kondo watashi mo ikitai desu.
        </p>
      </div>
    </div>
  );
};

const StorySeq41 = () => {
  const [widgets, setWidgets] = useState([]); //widgets
  const [index, setIndex] = useState(""); //order of widgets
  const [isDragOver, setIsDragOver] = useState(false);
  const [isDropped, setIsDropped] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isCorrect, setIsCorrect] = useState(null);
  const numofindices = 5;
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementSeq = () => {
    if (lsScore.SG !== undefined) {
      {
        if (lsScore.SG > -11) {
          setLSScore({ ...lsScore, SG: lsScore.SG - 1 });
        }
      }
    }
  };

  const handleOnDrag = (e, widget, index) => {
    e.dataTransfer.setData("widgetJap", widget.jap);
    e.dataTransfer.setData("widgetRom", widget.rom);
    e.dataTransfer.setData("index", index);
    incrementSeq();
  };

  const updateIsDropped = (index) => {
    const nextIndices = isDropped.map((val, i) => {
      //new array
      if (i == index) {
        // set isDropped to true
        // console.log("index", index);
        return true;
      } else {
        // The rest haven't changed
        return val;
      }
    });
    setIsDropped(nextIndices);
    // console.log("isDropped", nextIndices);
  };

  const handleOnDrop = (e) => {
    setIsDragOver(false);
    if (index.length < numofindices) {
      const i = e.dataTransfer.getData("index");
      //console.log("index", i);
      setIndex(() => {
        let str = index;
        str += i.toString();
        return str;
      });
      updateIsDropped(i); //update widget dropped status

      const widget = {
        jap: e.dataTransfer.getData("widgetJap"),
        rom: e.dataTransfer.getData("widgetRom"),
      };
      setWidgets((widgets) => {
        const newWidgets = [...widgets];
        newWidgets.push(widget);
        return newWidgets;
      });
    }
  };

  const handleClear = () => {
    setWidgets([]);
    setIndex("");
    setIsDropped([false, false, false, false, false]);
    setIsCorrect(null);
  };

  const handleSubmit = () => {
    if (index.length < numofindices) {
      alert("Please use all the phrases.");
      return;
    }
    if (index == "01234") {
      setIsCorrect(true);
    } else if (index != "01234") {
      setIsCorrect(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  return (
    <div className="flex w-11/12 flex-col items-center justify-center py-10">
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Sequence the phrases to make a sentence <br />- by dragging them into
        the following box:
      </h2>
      <div className="flex flex-col items-end xl:flex-row">
        <div
          id="ans-box"
          className={`${isDragOver ? "bg-lime-100" : "bg-white"} page max-w-screen flex h-min min-h-20 w-fit min-w-52 flex-row flex-wrap gap-x-3 gap-y-1 rounded-3xl border-4 border-dotted border-lime-700 px-3 py-10 xl:min-w-80 xl:px-10 xl:py-3`}
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {widgets.map((widget, index) => {
            if (index < 3) {
              return (
                <div
                  key={index}
                  className={`${index == 2 ? "basis-full" : ""} dropped-widget h-min text-sm font-medium text-gray-800 xl:text-base`}
                >
                  <p>
                    {index == 0 && (
                      <span className="font-bold text-gray-900">A: </span>
                    )}
                    {widget.jap}
                    {index == 2 ? "?" : ""}
                  </p>
                  <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
                    {widget.rom}
                    {index == 2 ? "?" : ""}
                  </p>
                </div>
              );
            } else if (index >= 3 && index < numofindices) {
              return (
                <div
                  key={index}
                  className={`dropped-widget h-min text-sm font-medium text-gray-800 xl:text-base`}
                >
                  <p>
                    {index == 3 && (
                      <span className="font-bold text-gray-900">B: </span>
                    )}
                    {widget.jap}
                    {index == 4 ? "。" : ""}
                  </p>
                  <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
                    {widget.rom}
                    {index == 4 ? "。" : ""}
                  </p>
                </div>
              );
            }
          })}
        </div>
        <div>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-lime-700 hover:cursor-pointer xl:text-sm"
            onClick={() => handleSubmit()}
            title="Check correct answer."
          >
            Submit
          </button>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-red-600 hover:cursor-pointer xl:text-sm"
            onClick={() => handleClear()}
            title="Clear your answer."
          >
            Clear
          </button>
        </div>
      </div>
      <p className="mb-3 px-3 xl:me-32">
        {'"A: Today’s weather is nice, isn’t it?"'}
        <br />
        {'"B: Yes, it feels very pleasant."'}
      </p>
      <div className="widgets flex flex-wrap">
        <div
          className={`widget ${isDropped[3] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "はい、とても ", rom: "hai, totemo " }, 3)
          }
        >
          <p>はい、とても </p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            hai, totemo
          </p>
        </div>
        <div
          className={`widget ${isDropped[1] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "天気は いい", rom: "tenki wa ii" }, 1)
          }
        >
          <p>天気は いい</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            tenki wa ii
          </p>
        </div>
        <div
          className={`widget ${isDropped[0] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "今日の", rom: "kyou no " }, 0)
          }
        >
          <p>今日の</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            kyou no
          </p>
        </div>
        <div
          className={`widget ${isDropped[2] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "ですね", rom: "desu ne" }, 2)
          }
        >
          <p>ですね</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            desu ne
          </p>
        </div>
        <div
          className={`widget ${isDropped[4] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(
              e,
              { jap: "気持ちがいい です", rom: "kimochi ga ii desu" },
              4,
            )
          }
        >
          <p>気持ちがいい です</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            kimochi ga ii desu
          </p>
        </div>
      </div>
      <p
        className={`${isCorrect ? "block" : "hidden"} bg-lime-100 p-2 text-sm font-medium text-lime-700 xl:text-base`}
      >
        Your answer is correct!
      </p>
      <div
        className={`${isCorrect == false ? "block" : "hidden"} bg-red-100 p-2 text-sm font-medium text-red-700 xl:text-base`}
      >
        <p>The correct answer is:</p>
        <p>A: 今日の 天気は いい ですね？</p>
        <p className="text-xs font-normal italic xl:text-sm">
          (Kyou no tenki wa ii desu ne?)
        </p>
        <p>B: はい、とても 気持ちがいいです。</p>
        <p className="text-xs font-normal italic xl:text-sm">
          (Hai, totemo kimochi ga ii desu.)
        </p>
      </div>
    </div>
  );
};
const StorySeq42 = () => {
  const [widgets, setWidgets] = useState([]); //widgets
  const [index, setIndex] = useState(""); //order of widgets
  const [isDragOver, setIsDragOver] = useState(false);
  const [isDropped, setIsDropped] = useState([false, false, false]);
  const [isCorrect, setIsCorrect] = useState(null);
  const numofindices = 3;
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementSeq = () => {
    if (lsScore.SG !== undefined) {
      {
        if (lsScore.SG > -11) {
          setLSScore({ ...lsScore, SG: lsScore.SG - 1 });
        }
      }
    }
  };

  const handleOnDrag = (e, widget, index) => {
    e.dataTransfer.setData("widgetJap", widget.jap);
    e.dataTransfer.setData("widgetRom", widget.rom);
    e.dataTransfer.setData("index", index);
    incrementSeq();
  };

  const updateIsDropped = (index) => {
    const nextIndices = isDropped.map((val, i) => {
      //new array
      if (i == index) {
        // set isDropped to true
        // console.log("index", index);
        return true;
      } else {
        // The rest haven't changed
        return val;
      }
    });
    setIsDropped(nextIndices);
    // console.log("isDropped", nextIndices);
  };

  const handleOnDrop = (e) => {
    setIsDragOver(false);
    if (index.length < numofindices) {
      const i = e.dataTransfer.getData("index");
      //console.log("index", i);
      setIndex(() => {
        let str = index;
        str += i.toString();
        return str;
      });
      updateIsDropped(i); //update widget dropped status

      const widget = {
        jap: e.dataTransfer.getData("widgetJap"),
        rom: e.dataTransfer.getData("widgetRom"),
      };
      setWidgets((widgets) => {
        const newWidgets = [...widgets];
        newWidgets.push(widget);
        return newWidgets;
      });
    }
  };

  const handleClear = () => {
    setWidgets([]);
    setIndex("");
    setIsDropped([false, false, false]);
    setIsCorrect(null);
  };

  const handleSubmit = () => {
    if (index.length < numofindices) {
      alert("Please use all the phrases.");
      return;
    }
    if (index == "012") {
      setIsCorrect(true);
    } else if (index != "012") {
      setIsCorrect(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  return (
    <div className="flex w-11/12 flex-col items-center justify-center py-10">
      <h2 className="mb-3 mt-6 text-base font-semibold text-gray-700 dark:text-gray-300 max-md:mb-3 md:me-4 md:text-base">
        Sequence the phrases to make a sentence <br />- by dragging them into
        the following box:
      </h2>
      <div className="flex flex-col items-end xl:flex-row">
        <div
          id="ans-box"
          className={`${isDragOver ? "bg-lime-100" : "bg-white"} page max-w-screen flex h-min min-h-20 w-fit min-w-52 flex-row flex-wrap gap-x-3 gap-y-1 rounded-3xl border-4 border-dotted border-lime-700 px-3 py-10 xl:min-w-80 xl:px-10 xl:py-3`}
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {widgets.map((widget, index) => {
            if (index < 2) {
              return (
                <div
                  key={index}
                  className={`${index == 1 ? "basis-full" : ""} dropped-widget h-min text-sm font-medium text-gray-800 xl:text-base`}
                >
                  <p>
                    {index == 0 && (
                      <span className="font-bold text-gray-900">A: </span>
                    )}
                    {widget.jap}
                    {index == 1 ? "。" : ""}
                  </p>
                  <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
                    {widget.rom}
                    {index == 1 ? "." : ""}
                  </p>
                </div>
              );
            } else if (index >= 2 && index < numofindices) {
              return (
                <div
                  key={index}
                  className={`dropped-widget h-min text-sm font-medium text-gray-800 xl:text-base`}
                >
                  <p>
                    {index == 2 && (
                      <span className="font-bold text-gray-900">B: </span>
                    )}
                    {widget.jap}
                    {index == 2 ? "。" : ""}
                  </p>
                  <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
                    {widget.rom}
                    {index == 2 ? "." : ""}
                  </p>
                </div>
              );
            }
          })}
        </div>
        <div>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-lime-700 hover:cursor-pointer xl:text-sm"
            onClick={() => handleSubmit()}
            title="Check correct answer."
          >
            Submit
          </button>
          <button
            className="h-fit w-fit p-2 text-xs font-medium text-red-600 hover:cursor-pointer xl:text-sm"
            onClick={() => handleClear()}
            title="Clear your answer."
          >
            Clear
          </button>
        </div>
      </div>
      <p className="mb-3 px-3 xl:me-32">
        {'"A: This bath feels nice, doesn’t it?"'}
        <br />
        {'"B: I want to stay in forever."'}
      </p>
      <div className="widgets flex flex-wrap">
        <div
          className={`widget ${isDropped[1] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(
              e,
              { jap: "気持ちがいい ですね", rom: "kimochi ga ii desu ne" },
              1,
            )
          }
        >
          <p>気持ちがいい ですね</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            kimochi ga ii desu ne
          </p>
        </div>
        <div
          className={`widget ${isDropped[2] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(
              e,
              {
                jap: "ずっと 入って いたいです",
                rom: "zutto haitte itai desu",
              },
              2,
            )
          }
        >
          <p>ずっと 入って いたいです</p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            zutto haitte itai desu{" "}
          </p>
        </div>
        <div
          className={`widget ${isDropped[0] ? "hidden" : "block"} mb-2 me-2 w-fit rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-lime-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 xl:text-base`}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { jap: "この お風呂は ", rom: "kono ofuro wa" }, 0)
          }
        >
          <p>この お風呂は </p>
          <p className="text-xs font-normal italic text-gray-400 xl:text-sm">
            kono ofuro wa
          </p>
        </div>
      </div>
      <p
        className={`${isCorrect ? "block" : "hidden"} bg-lime-100 p-2 text-sm font-medium text-lime-700 xl:text-base`}
      >
        Your answer is correct!
      </p>
      <div
        className={`${isCorrect == false ? "block" : "hidden"} bg-red-100 p-2 text-sm font-medium text-red-700 xl:text-base`}
      >
        <p>The correct answer is:</p>
        <p>A: このお風呂は 気持ちがいいですね。</p>
        <p className="text-xs font-normal italic xl:text-sm">
          (Kono ofuro wa kimochi ga ii desu ne.)
        </p>
        <p>B: ずっと入っていたいです。</p>
        <p className="text-xs font-normal italic xl:text-sm">
          (Zutto haitte itai desu.)
        </p>
      </div>
    </div>
  );
};

export {
  StorySeq11,
  StorySeq12,
  StorySeq21,
  StorySeq22,
  StorySeq31,
  StorySeq32,
  StorySeq41,
  StorySeq42,
};

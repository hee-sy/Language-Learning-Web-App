import axios from "axios";
import { useContext } from "react";
import { LSContext } from "../../pages/LessonB";

const EOLSum = ({ id, part }) => {
  const [lsScore, setLSScore] = useContext(LSContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const vocab = e.target[0].value;
    const express = e.target[1].value;
    const grammar = e.target[2].value;
    const data = {
      vocab: vocab,
      express: express,
      grammar: grammar,
    };
    axios
      .post(
        `http://localhost:5555/user/update-eol-summaries/${part}/${id}`,
        data,
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Your summary notes are saved! 🙂");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    <form
      className="w-full"
      onSubmit={handleSubmit}
      onClick={() => {
        incrementRef();
      }}
    >
      <h3 className="pb-2 pt-5 font-semibold text-gray-900 dark:text-white">
        Try summarize what you‘ve learnt:
      </h3>
      <div className="mb-4 w-full rounded-lg border-2 border-lime-700 bg-lime-100 text-sm dark:border-lime-600 dark:bg-lime-700 xl:text-base">
        <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
          <label htmlFor="vocab">I have learnt these vocabularies:</label>
          <textarea
            id="vocab"
            rows={4}
            className="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            placeholder="e.g. - Konnichiwa means..., like..."
            required=""
            defaultValue={""}
          />
        </div>
        <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
          <label htmlFor="express">and these expressions:</label>
          <textarea
            id="express"
            rows={4}
            className="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            placeholder="e.g. - suki desu means..., for example..."
            required=""
            defaultValue={""}
          />
        </div>
        <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
          <label htmlFor="grammar">
            and also these grammmar patterns/rules:
          </label>
          <textarea
            id="grammar"
            rows={4}
            className="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            placeholder="e.g. - kedo means..., for example..."
            required=""
            defaultValue={""}
          />
        </div>
        <div className="flex items-center justify-between border-t px-3 py-2 dark:border-gray-600">
          <button
            type="submit"
            className="inline-flex items-center rounded-lg bg-lime-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-lime-800 focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default EOLSum;

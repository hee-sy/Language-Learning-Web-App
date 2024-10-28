import { useParams } from "react-router-dom";
import { Svg } from "../Components/Logo";

function IoLSQ_Result() {
  let { ans } = useParams();
  console.log(ans);
  ans = ans.split(","); //convert string to array

  const [AR_res, SI_res, VV_res, SG_res] = calcResult(ans);
  console.log(AR_res);
  console.log(SI_res);
  console.log(VV_res);
  console.log(SG_res);

  return (
    <div>
      <div className="mx-5 flex flex-row justify-self-center">
        <Svg w="9rem" h="9rem" />
        <h1 className="mx-2 mb-10 mt-16 text-sm font-medium text-lime-700 md:text-3xl">
          Your learning style based on the test is :
        </h1>
      </div>
      <div
        id="AR-bars"
        className="group mx-2 my-3 flex flex-row justify-center md:mx-10"
      >
        <div id="bar11" className="w-1/2 flex-auto border-r-2 border-lime-800">
          <div className="flex justify-end">
            <span className="me-2 text-base font-medium text-lime-700 group-hover:text-lg dark:text-white md:text-3xl md:group-hover:text-4xl">
              Active
            </span>
          </div>
          <div className="relative flex h-6 w-full flex-row-reverse bg-gray-200 dark:bg-gray-700 md:h-10">
            <div
              className={
                "h-6 justify-self-end bg-lime-600 group-hover:scale-y-90 md:h-10"
              }
              style={{
                width: `${AR_res.ab == "a" ? (AR_res.num / 11) * 100 : 0}%`,
              }}
            />
            <span
              className={`${AR_res.ab == "a" ? "block" : "hidden"} mx-2 text-nowrap text-xs font-semibold leading-6 text-lime-700 group-hover:text-red-500 dark:text-white md:text-sm md:leading-6`}
            >
              {`${AR_res.num}/11 (${AR_res.cat})`}
            </span>
          </div>
        </div>
        <div id="bar12" className="w-1/2 flex-auto border-l-2 border-lime-800">
          <div className="flex justify-start">
            <span className="ms-2 text-base font-medium text-lime-700 group-hover:text-lg dark:text-white md:text-3xl md:group-hover:text-4xl">
              Reflective
            </span>
          </div>
          <div className="flex h-6 w-full flex-row bg-gray-200 dark:bg-gray-700 md:h-10">
            <div
              className="h-6 justify-self-end bg-lime-600 group-hover:scale-y-90 md:h-10"
              style={{
                width: `${AR_res.ab == "b" ? (AR_res.num / 11) * 100 : 0}%`,
              }}
            />
            <span
              className={`${AR_res.ab == "b" ? "block" : "hidden"} mx-2 text-nowrap text-xs font-semibold leading-6 text-lime-700 group-hover:text-red-500 dark:text-white md:text-lg md:text-sm md:leading-10`}
            >
              {`${AR_res.num}/11 (${AR_res.cat})`}
            </span>
          </div>
        </div>
      </div>
      <div
        id="SI-bars"
        className="group mx-2 my-3 flex flex-row justify-center md:mx-10"
      >
        <div id="bar11" className="w-1/2 flex-auto border-r-2 border-lime-800">
          <div className="flex justify-end">
            <span className="me-2 text-base font-medium text-lime-700 group-hover:text-lg dark:text-white md:text-3xl md:group-hover:text-4xl">
              Sensing
            </span>
          </div>
          <div className="relative flex h-6 w-full flex-row-reverse bg-gray-200 dark:bg-gray-700 md:h-10">
            <div
              className={
                "h-6 justify-self-end bg-lime-600 group-hover:scale-y-90 md:h-10"
              }
              style={{
                width: `${SI_res.ab == "a" ? (SI_res.num / 11) * 100 : 0}%`,
              }}
            />
            <span
              className={`${SI_res.ab == "a" ? "block" : "hidden"} mx-2 text-nowrap text-xs font-semibold leading-6 text-lime-700 group-hover:text-red-500 dark:text-white md:text-sm md:leading-6`}
            >
              {`${SI_res.num}/11 (${SI_res.cat})`}
            </span>
          </div>
        </div>
        <div id="bar12" className="w-1/2 flex-auto border-l-2 border-lime-800">
          <div className="flex justify-start">
            <span className="ms-2 text-base font-medium text-lime-700 group-hover:text-lg dark:text-white md:text-3xl md:group-hover:text-4xl">
              Intuitive
            </span>
          </div>
          <div className="flex h-6 w-full flex-row bg-gray-200 dark:bg-gray-700 md:h-10">
            <div
              className="h-6 justify-self-end bg-lime-600 group-hover:scale-y-90 md:h-10"
              style={{
                width: `${SI_res.ab == "b" ? (SI_res.num / 11) * 100 : 0}%`,
              }}
            />
            <span
              className={`${SI_res.ab == "b" ? "block" : "hidden"} mx-2 text-nowrap text-xs font-semibold leading-6 text-lime-700 group-hover:text-red-500 dark:text-white md:text-lg md:text-sm md:leading-10`}
            >
              {`${SI_res.num}/11 (${SI_res.cat})`}
            </span>
          </div>
        </div>
      </div>
      <div
        id="VV-bars"
        className="group mx-2 my-3 flex flex-row justify-center md:mx-10"
      >
        <div id="bar11" className="w-1/2 flex-auto border-r-2 border-lime-800">
          <div className="flex justify-end">
            <span className="me-2 text-base font-medium text-lime-700 group-hover:text-lg dark:text-white md:text-3xl md:group-hover:text-4xl">
              Visual
            </span>
          </div>
          <div className="relative flex h-6 w-full flex-row-reverse bg-gray-200 dark:bg-gray-700 md:h-10">
            <div
              className={
                "h-6 justify-self-end bg-lime-600 group-hover:scale-y-90 md:h-10"
              }
              style={{
                width: `${VV_res.ab == "a" ? (VV_res.num / 11) * 100 : 0}%`,
              }}
            />
            <span
              className={`${VV_res.ab == "a" ? "block" : "hidden"} mx-2 text-nowrap text-xs font-semibold leading-6 text-lime-700 group-hover:text-red-500 dark:text-white md:text-sm md:leading-6`}
            >
              {`${VV_res.num}/11 (${VV_res.cat})`}
            </span>
          </div>
        </div>
        <div id="bar12" className="w-1/2 flex-auto border-l-2 border-lime-800">
          <div className="flex justify-start">
            <span className="ms-2 text-base font-medium text-lime-700 group-hover:text-lg dark:text-white md:text-3xl md:group-hover:text-4xl">
              Verbal
            </span>
          </div>
          <div className="flex h-6 w-full flex-row bg-gray-200 dark:bg-gray-700 md:h-10">
            <div
              className="h-6 justify-self-end bg-lime-600 group-hover:scale-y-90 md:h-10"
              style={{
                width: `${VV_res.ab == "b" ? (VV_res.num / 11) * 100 : 0}%`,
              }}
            />
            <span
              className={`${VV_res.ab == "b" ? "block" : "hidden"} mx-2 text-nowrap text-xs font-semibold leading-6 text-lime-700 group-hover:text-red-500 dark:text-white md:text-lg md:text-sm md:leading-10`}
            >
              {`${VV_res.num}/11 (${VV_res.cat})`}
            </span>
          </div>
        </div>
      </div>
      <div
        id="SG-bars"
        className="group mx-2 my-3 flex flex-row justify-center md:mx-10"
      >
        <div id="bar11" className="w-1/2 flex-auto border-r-2 border-lime-800">
          <div className="flex justify-end">
            <span className="me-2 text-base font-medium text-lime-700 group-hover:text-lg dark:text-white md:text-3xl md:group-hover:text-4xl">
              Sequential
            </span>
          </div>
          <div className="relative flex h-6 w-full flex-row-reverse bg-gray-200 dark:bg-gray-700 md:h-10">
            <div
              className={
                "h-6 justify-self-end bg-lime-600 group-hover:scale-y-90 md:h-10"
              }
              style={{
                width: `${SG_res.ab == "a" ? (SG_res.num / 11) * 100 : 0}%`,
              }}
            />
            <span
              className={`${SG_res.ab == "a" ? "block" : "hidden"} mx-2 text-nowrap text-xs font-semibold leading-6 text-lime-700 group-hover:text-red-500 dark:text-white md:text-sm md:leading-6`}
            >
              {`${SG_res.num}/11 (${SG_res.cat})`}
            </span>
          </div>
        </div>
        <div id="bar12" className="w-1/2 flex-auto border-l-2 border-lime-800">
          <div className="flex justify-start">
            <span className="ms-2 text-base font-medium text-lime-700 group-hover:text-lg dark:text-white md:text-3xl md:group-hover:text-4xl">
              Global
            </span>
          </div>
          <div className="flex h-6 w-full flex-row bg-gray-200 dark:bg-gray-700 md:h-10">
            <div
              className="h-6 justify-self-end bg-lime-600 group-hover:scale-y-90 md:h-10"
              style={{
                width: `${SG_res.ab == "b" ? (SG_res.num / 11) * 100 : 0}%`,
              }}
            />
            <span
              className={`${SG_res.ab == "b" ? "block" : "hidden"} mx-2 text-nowrap text-xs font-semibold leading-6 text-lime-700 group-hover:text-red-500 dark:text-white md:text-lg md:text-sm md:leading-10`}
            >
              {`${SG_res.num}/11 (${SG_res.cat})`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function calcResult(ans) {
  const AR_ques = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41];
  const SI_ques = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42];
  const VV_ques = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43];
  const SG_ques = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44];

  //Step1: add nums of a & b for each dimension
  const AR_ans = AR_ques.map((ques_num) => ans[ques_num - 1]); //extract
  const SI_ans = SI_ques.map((ques_num) => ans[ques_num - 1]);
  const VV_ans = VV_ques.map((ques_num) => ans[ques_num - 1]);
  const SG_ans = SG_ques.map((ques_num) => ans[ques_num - 1]);

  //count
  const AR_ans_count = {
    a: AR_ans.filter((x) => x == "a").length,
    b: AR_ans.filter((x) => x == "b").length,
  };
  const SI_ans_count = {
    a: SI_ans.filter((x) => x == "a").length,
    b: SI_ans.filter((x) => x == "b").length,
  };
  const VV_ans_count = {
    a: VV_ans.filter((x) => x == "a").length,
    b: VV_ans.filter((x) => x == "b").length,
  };
  const SG_ans_count = {
    a: SG_ans.filter((x) => x == "a").length,
    b: SG_ans.filter((x) => x == "b").length,
  };

  //Step2: subtract
  const AR_res = {
    //absolute of a - b
    num: Math.abs(AR_ans_count.a - AR_ans_count.b),
    ab: AR_ans_count.a > AR_ans_count.b ? "a" : "b",
  };
  const SI_res = {
    num: Math.abs(SI_ans_count.a - SI_ans_count.b),
    ab: SI_ans_count.a > SI_ans_count.b ? "a" : "b",
  };
  const VV_res = {
    num: Math.abs(VV_ans_count.a - VV_ans_count.b),
    ab: VV_ans_count.a > VV_ans_count.b ? "a" : "b",
  };
  const SG_res = {
    num: Math.abs(SG_ans_count.a - SG_ans_count.b),
    ab: SG_ans_count.a > SG_ans_count.b ? "a" : "b",
  };

  //Step3: categorize
  AR_res["cat"] =
    AR_res.num <= 3 ? "low" : AR_res.num <= 7 ? "moderate" : "high";
  AR_res["dim"] = AR_res.ab == "a" ? "Active" : "Reflective";
  SI_res["cat"] =
    SI_res.num <= 3 ? "low" : SI_res.num <= 7 ? "moderate" : "high";
  SI_res["dim"] = SI_res.ab == "a" ? "Sensing" : "Intuitive";
  VV_res["cat"] =
    VV_res.num <= 3 ? "low" : VV_res.num <= 7 ? "moderate" : "high";
  VV_res["dim"] = VV_res.ab == "a" ? "Visual" : "Verbal";
  SG_res["cat"] =
    SG_res.num <= 3 ? "low" : SG_res.num <= 7 ? "moderate" : "high";
  SG_res["dim"] = SG_res.ab == "a" ? "Sequential" : "Global";

  // console.log(`AR_res: ${JSON.stringify(AR_res, null, 4)}`);
  // console.log(`SI_res: ${JSON.stringify(SI_res, null, 4)}`);
  // console.log(`VV_res: ${JSON.stringify(VV_res, null, 4)}`);
  // console.log(`SG_res: ${JSON.stringify(SG_res, null, 4)}`);

  return [AR_res, SI_res, VV_res, SG_res];
}

export default IoLSQ_Result;

//sample ans to put in url so dont have to redo:
//a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a
//a,b,a,a,b,a,a,b,a,a,a,b,a,a,a,b,a,a,a,a,b,a,a,a,b,a,a,a,a,b,a,a,a,a,b,a,a,a,a,a,b,a,a,a
//a,a,a,b,b,a,a,a,b,a,a,a,a,b,a,a,b,a,a,b,b,a,a,a,a,a,a,b,a,a,a,a,a,a,a,a,a,a,a,a,b,a,a,a
//a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a
//b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b

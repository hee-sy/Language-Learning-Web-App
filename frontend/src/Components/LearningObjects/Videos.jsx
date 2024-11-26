import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { LSContext } from "../../pages/LessonB";

const VideosP1 = () => {
  const [lsScore, setLSScore] = useContext(LSContext);

  const incrementVis = () => {
    if (lsScore.VV !== undefined) {
      {
        if (lsScore.VV < 11) {
          setLSScore({ ...lsScore, VV: lsScore.VV + 1 });
        }
      }
    }
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div
        className="mx-3 my-5 w-64 overflow-hidden rounded-3xl border-[6px] border-lime-500/100 drop-shadow-2xl"
        onClick={() => incrementVis()}
      >
        <ReactPlayer
          width="342"
          height="608"
          url="/videos/kedo.mp4"
          controls={true}
          loop={true}
        />
      </div>
    </div>
  );
};

export { VideosP1 };

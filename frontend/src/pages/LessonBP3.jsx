import { useContext, useEffect } from "react";
import { LSContext, LastLSContext } from "./LessonB";
import { MnemonicsP3 } from "../Components/LearningObjects/Mnemonics";
import { FulltextP3 } from "../Components/LearningObjects/Fulltext";
import { TransPrac3 } from "../Components/LearningObjects/TransPrac";
import { FillBlanks3 } from "../Components/LearningObjects/FillBlanks";
import { ReflectPrompt3 } from "../Components/LearningObjects/ReflectPrompt";
import { VideosP3 } from "../Components/LearningObjects/Videos";
import { BigPicEx3 } from "../Components/LearningObjects/BigPicEx";
import { RWScena3 } from "../Components/LearningObjects/RWScena";
import { GramPatRecog3 } from "../Components/LearningObjects/GramPatRecog";
import { DialPrac3 } from "../Components/LearningObjects/DialPrac";
import { StorySeq31, StorySeq32 } from "../Components/LearningObjects/StorySeq";
import { EOLSum } from "../Components/LearningObjects/EOLSum";

const LessonBP3 = ({ id }) => {
  const [lsScore] = useContext(LSContext);
  const [lastLS, setLastLS] = useContext(LastLSContext);

  useEffect(() => {
    document.title = "LessonB - Part 3";
    console.log("LBP3 - mounted");

    //update lastLS to the current lsScore
    setLastLS(lsScore);

    return () => {
      console.log("LBP3 - unmounted");
      //update lastLS to the current lsScore
      setLastLS(lsScore);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center divide-y pb-20 pt-5 xl:pt-20">
      {/* Learn */}
      <FulltextP3 />
      <MnemonicsP3 />
      {lastLS.SG > 0 ? <BigPicEx3 /> : ""}
      {lastLS.VV < 0 ? <VideosP3 /> : ""}
      {lastLS.SI > 0 ? <GramPatRecog3 /> : ""}
      {lastLS.SI < 0 ? <RWScena3 /> : ""}
      {/* Practice */}
      <FillBlanks3 />
      {lastLS.VV > 0 ? <DialPrac3 /> : ""}
      {lastLS.SG < 0 ? (
        <>
          <StorySeq31 />
          <StorySeq32 />
        </>
      ) : (
        ""
      )}
      <TransPrac3 />
      <ReflectPrompt3 />
      {lastLS.AR > 0 ? <EOLSum id={id} lesson="LessonB" part={3} /> : ""}
    </div>
  );
};

export default LessonBP3;

{
  /* 
  Level 1's LOs: 
  <FulltextP1 />
  <MnemonicsP1 />
  ***
  <FillBlanks1 />
  <TransPrac1 />
  <ReflectPrompt1 />
  

  Level 2's LOs:
  <VideosP1 />
  <BigPicEx1 />
  <RWScena1 />
  <GramPatRecog1 />
  ***
  <DialPrac1 />
  <StorySeq11 />
  <StorySeq12 />
  <EOLSum id={id} part={1} />
  */
}

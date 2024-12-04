import { useContext, useEffect } from "react";
import { LSContext, LastLSContext } from "./LessonB";
import { MnemonicsP4 } from "../Components/LearningObjects/Mnemonics";
import { FulltextP4 } from "../Components/LearningObjects/Fulltext";
import { TransPrac4 } from "../Components/LearningObjects/TransPrac";
import { FillBlanks4 } from "../Components/LearningObjects/FillBlanks";
import { ReflectPrompt4 } from "../Components/LearningObjects/ReflectPrompt";
import { VideosP4 } from "../Components/LearningObjects/Videos";
import { BigPicEx4 } from "../Components/LearningObjects/BigPicEx";
import { RWScena4 } from "../Components/LearningObjects/RWScena";
import { GramPatRecog4 } from "../Components/LearningObjects/GramPatRecog";
import { DialPrac4 } from "../Components/LearningObjects/DialPrac";
import { StorySeq41, StorySeq42 } from "../Components/LearningObjects/StorySeq";
import { EOLSum } from "../Components/LearningObjects/EOLSum";

const LessonBP4 = ({ id }) => {
  const [lsScore] = useContext(LSContext);
  const [lastLS, setLastLS] = useContext(LastLSContext);

  useEffect(() => {
    document.title = "LessonB - Part 4";
    console.log("LBP4 - mounted");

    //update lastLS to the current lsScore
    setLastLS(lsScore);

    return () => {
      console.log("LBP4 - unmounted");
      //update lastLS to the current lsScore
      setLastLS(lsScore);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center divide-y pb-20 pt-5 xl:pt-20">
      {/* Learn */}
      <FulltextP4 />
      <MnemonicsP4 />
      {lastLS.SG > 0 ? <BigPicEx4 /> : ""}
      {lastLS.VV < 0 ? <VideosP4 /> : ""}
      {lastLS.SI > 0 ? <GramPatRecog4 /> : ""}
      {lastLS.SI < 0 ? <RWScena4 /> : ""}
      {/* Practice */}
      <FillBlanks4 />
      {lastLS.VV > 0 ? <DialPrac4 /> : ""}
      {lastLS.SG < 0 ? (
        <>
          <StorySeq41 />
          <StorySeq42 />
        </>
      ) : (
        ""
      )}
      <TransPrac4 />
      <ReflectPrompt4 />
      {lastLS.AR > 0 ? <EOLSum id={id} lesson="LessonB" part={4} /> : ""}
    </div>
  );
};

export default LessonBP4;

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

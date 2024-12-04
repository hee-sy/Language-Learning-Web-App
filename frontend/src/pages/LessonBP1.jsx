import { useContext, useEffect } from "react";
import { LSContext, LastLSContext } from "./LessonB";
import { MnemonicsP1 } from "../Components/LearningObjects/Mnemonics";
import { FulltextP1 } from "../Components/LearningObjects/Fulltext";
import { TransPrac1 } from "../Components/LearningObjects/TransPrac";
import { FillBlanks1 } from "../Components/LearningObjects/FillBlanks";
import { ReflectPrompt1 } from "../Components/LearningObjects/ReflectPrompt";
import { VideosP1 } from "../Components/LearningObjects/Videos";
import { BigPicEx1 } from "../Components/LearningObjects/BigPicEx";
import { RWScena1 } from "../Components/LearningObjects/RWScena";
import { GramPatRecog1 } from "../Components/LearningObjects/GramPatRecog";
import { DialPrac1 } from "../Components/LearningObjects/DialPrac";
import { StorySeq11, StorySeq12 } from "../Components/LearningObjects/StorySeq";
import { EOLSum } from "../Components/LearningObjects/EOLSum";

const LessonBP1 = ({ id }) => {
  const [lsScore] = useContext(LSContext);
  const [lastLS, setLastLS] = useContext(LastLSContext);

  useEffect(() => {
    document.title = "LessonB - Part 1";
    console.log("LBP1 - mounted");

    //update lastLS to the current lsScore
    setLastLS(lsScore);

    return () => {
      console.log("LBP1 - unmounted");
      //update lastLS to the current lsScore
      setLastLS(lsScore);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center divide-y pb-20 pt-5 xl:pt-20">
      {/* Learn */}
      <FulltextP1 />
      <MnemonicsP1 />
      {lastLS.SG > 0 ? <BigPicEx1 /> : ""}
      {lastLS.VV < 0 ? <VideosP1 /> : ""}
      {lastLS.SI > 0 ? <GramPatRecog1 /> : ""}
      {lastLS.SI < 0 ? <RWScena1 /> : ""}
      {/* Practice */}
      <FillBlanks1 />
      {lastLS.VV > 0 ? <DialPrac1 /> : ""}
      {lastLS.SG < 0 ? (
        <>
          <StorySeq11 />
          <StorySeq12 />
        </>
      ) : (
        ""
      )}
      <TransPrac1 />
      <ReflectPrompt1 />
      {lastLS.AR > 0 ? <EOLSum id={id} lesson="LessonB" part={1} /> : ""}
    </div>
  );
};

export default LessonBP1;

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

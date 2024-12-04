import { useContext, useEffect } from "react";
import { LSContext, LastLSContext } from "./LessonB";
import { MnemonicsP2 } from "../Components/LearningObjects/Mnemonics";
import { FulltextP2 } from "../Components/LearningObjects/Fulltext";
import { TransPrac2 } from "../Components/LearningObjects/TransPrac";
import { FillBlanks2 } from "../Components/LearningObjects/FillBlanks";
import { ReflectPrompt2 } from "../Components/LearningObjects/ReflectPrompt";
import { VideosP2 } from "../Components/LearningObjects/Videos";
import { BigPicEx2 } from "../Components/LearningObjects/BigPicEx";
import { RWScena2 } from "../Components/LearningObjects/RWScena";
import { GramPatRecog2 } from "../Components/LearningObjects/GramPatRecog";
import { DialPrac2 } from "../Components/LearningObjects/DialPrac";
import { StorySeq21, StorySeq22 } from "../Components/LearningObjects/StorySeq";
import { EOLSum } from "../Components/LearningObjects/EOLSum";

const LessonBP2 = ({ id }) => {
  const [lsScore] = useContext(LSContext);
  const [lastLS, setLastLS] = useContext(LastLSContext);

  useEffect(() => {
    document.title = "LessonB - Part 2";
    console.log("LBP2 - mounted");

    //update lastLS to the current lsScore
    setLastLS(lsScore);

    return () => {
      console.log("LBP2 - unmounted");
      //update lastLS to the current lsScore
      setLastLS(lsScore);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center divide-y pb-20 pt-5 xl:pt-20">
      {/* Learn */}
      <FulltextP2 />
      <MnemonicsP2 />
      {lastLS.SG > 0 ? <BigPicEx2 /> : ""}
      {lastLS.VV < 0 ? <VideosP2 /> : ""}
      {lastLS.SI > 0 ? <GramPatRecog2 /> : ""}
      {lastLS.SI < 0 ? <RWScena2 /> : ""}
      {/* Practice */}
      <FillBlanks2 />
      {lastLS.VV > 0 ? <DialPrac2 /> : ""}
      {lastLS.SG < 0 ? (
        <>
          <StorySeq21 />
          <StorySeq22 />
        </>
      ) : (
        ""
      )}
      <TransPrac2 />
      <ReflectPrompt2 />
      {lastLS.AR > 0 ? <EOLSum id={id} lesson="LessonB" part={2} /> : ""}
    </div>
  );
};

export default LessonBP2;

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

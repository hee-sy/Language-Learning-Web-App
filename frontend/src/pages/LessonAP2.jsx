import { useEffect } from "react";
import { MnemonicsP2_A } from "../Components/LearningObjects/Mnemonics";
import { FulltextP2_A } from "../Components/LearningObjects/Fulltext";
import { TransPrac2_A } from "../Components/LearningObjects/TransPrac";
import { FillBlanks2_A } from "../Components/LearningObjects/FillBlanks";
import { ReflectPrompt2_A } from "../Components/LearningObjects/ReflectPrompt";
import { BigPicEx2_A } from "../Components/LearningObjects/BigPicEx";
import { GramPatRecog2_A } from "../Components/LearningObjects/GramPatRecog";
import { DialPrac2_A } from "../Components/LearningObjects/DialPrac";
import { EOLSum_A } from "../Components/LearningObjects/EOLSum";

const LessonAP2 = ({ id }) => {
  useEffect(() => {
    document.title = "LessonA - Part 2";
    console.log("LAP2 - mounted");

    return () => {
      console.log("LAP2 - unmounted");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center divide-y pb-20 pt-5 xl:pt-20">
      {/* Learn */}
      <FulltextP2_A />
      <MnemonicsP2_A />
      <BigPicEx2_A />
      <GramPatRecog2_A />
      {/* Practice */}
      <FillBlanks2_A />
      <DialPrac2_A />
      <TransPrac2_A />
      <ReflectPrompt2_A />
      <EOLSum_A id={id} lesson="LessonA" part={2} />
    </div>
  );
};

export default LessonAP2;

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

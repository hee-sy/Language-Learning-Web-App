import { useEffect } from "react";
import { MnemonicsP4_A } from "../Components/LearningObjects/Mnemonics";
import { FulltextP4_A } from "../Components/LearningObjects/Fulltext";
import { TransPrac4_A } from "../Components/LearningObjects/TransPrac";
import { FillBlanks4_A } from "../Components/LearningObjects/FillBlanks";
import { ReflectPrompt4_A } from "../Components/LearningObjects/ReflectPrompt";
import { BigPicEx4_A } from "../Components/LearningObjects/BigPicEx";
import { GramPatRecog4_A } from "../Components/LearningObjects/GramPatRecog";
import { DialPrac4_A } from "../Components/LearningObjects/DialPrac";
import { EOLSum_A } from "../Components/LearningObjects/EOLSum";

const LessonAP4 = ({ id }) => {
  useEffect(() => {
    document.title = "LessonA - Part 4";
    console.log("LAP4 - mounted");

    return () => {
      console.log("LAP4 - unmounted");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center divide-y pb-20 pt-5 xl:pt-20">
      {/* Learn */}
      <FulltextP4_A />
      <MnemonicsP4_A />
      <BigPicEx4_A />
      <GramPatRecog4_A />
      {/* Practice */}
      <FillBlanks4_A />
      <DialPrac4_A />
      <TransPrac4_A />
      <ReflectPrompt4_A />
      <EOLSum_A id={id} lesson="LessonA" part={4} />
    </div>
  );
};

export default LessonAP4;

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

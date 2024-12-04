import { useEffect } from "react";
import { MnemonicsP3_A } from "../Components/LearningObjects/Mnemonics";
import { FulltextP3_A } from "../Components/LearningObjects/Fulltext";
import { TransPrac3_A } from "../Components/LearningObjects/TransPrac";
import { FillBlanks3_A } from "../Components/LearningObjects/FillBlanks";
import { ReflectPrompt3_A } from "../Components/LearningObjects/ReflectPrompt";
import { BigPicEx3_A } from "../Components/LearningObjects/BigPicEx";
import { GramPatRecog3_A } from "../Components/LearningObjects/GramPatRecog";
import { DialPrac3_A } from "../Components/LearningObjects/DialPrac";
import { EOLSum_A } from "../Components/LearningObjects/EOLSum";

const LessonAP3 = ({ id }) => {
  useEffect(() => {
    document.title = "LessonA - Part 3";
    console.log("LAP3 - mounted");

    return () => {
      console.log("LAP3 - unmounted");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center divide-y pb-20 pt-5 xl:pt-20">
      {/* Learn */}
      <FulltextP3_A />
      <MnemonicsP3_A />
      <BigPicEx3_A />
      <GramPatRecog3_A />
      {/* Practice */}
      <FillBlanks3_A />
      <DialPrac3_A />
      <TransPrac3_A />
      <ReflectPrompt3_A />
      <EOLSum_A id={id} lesson="LessonA" part={3} />
    </div>
  );
};

export default LessonAP3;

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

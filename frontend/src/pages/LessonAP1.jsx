import { useEffect } from "react";
import { MnemonicsP1_A } from "../Components/LearningObjects/Mnemonics";
import { FulltextP1_A } from "../Components/LearningObjects/Fulltext";
import { TransPrac1_A } from "../Components/LearningObjects/TransPrac";
import { FillBlanks1_A } from "../Components/LearningObjects/FillBlanks";
import { ReflectPrompt1_A } from "../Components/LearningObjects/ReflectPrompt";
import { BigPicEx1_A } from "../Components/LearningObjects/BigPicEx";
import { GramPatRecog1_A } from "../Components/LearningObjects/GramPatRecog";
import { DialPrac1_A } from "../Components/LearningObjects/DialPrac";
import { EOLSum_A } from "../Components/LearningObjects/EOLSum";

const LessonAP1 = ({ id }) => {
  useEffect(() => {
    document.title = "LessonA - Part 1";
    console.log("LAP1 - mounted");

    return () => {
      console.log("LAP1 - unmounted");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center divide-y pb-20 pt-5 xl:pt-20">
      {/* Learn */}
      <FulltextP1_A />
      <MnemonicsP1_A />
      <BigPicEx1_A />
      <GramPatRecog1_A />
      {/* Practice */}
      <FillBlanks1_A />
      <DialPrac1_A />
      <TransPrac1_A />
      <ReflectPrompt1_A />
      <EOLSum_A id={id} lesson="LessonA" part={1} />
    </div>
  );
};

export default LessonAP1;

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

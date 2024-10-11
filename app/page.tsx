"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import {Header} from "../components/ui/header";

export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Road",
    },
    {
      text: "to",
    },
    {
      text: "sustainable",
    },
    {
      text: "Energy",
      className: "text-green-500 dark:text-blue-500",
    },
    {
      text: "and",
      
    },
    ,
    {
      text: "Transparency",
      className: "text-green-500 dark:text-blue-500",
    }
  ];
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="flex flex-col items-center justify-center h-[20rem]  ">
        
        <TypewriterEffectSmooth words={words} />
        
      </div>
    </div>
  );
}

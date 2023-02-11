import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        src={/*urlFor(skill?.image).width(100).height(100).url()*/ skill?.image}
        className="rounded-full  object-cover w-[10vw] h-[auto] xl:w-[5vw] xl:h-[5vw] filter group-hover:grayscale
        transition duration-300 ease-in-out "
      />
      <div className="absolute opacity-0 group-hover:opacity-80  transition duration-300 ease-in-out group-hover:bg-white w-[10vw] h-[10vw]  md:w-28 md:h-28 xl:w-[5vw] xl:h-[5vw] rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-1xl md:text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

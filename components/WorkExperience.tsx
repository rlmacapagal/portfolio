import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ExperienceCard2 from "./ExperienceCard2";
import { useState } from "react";

type Props = {};

function WorkExperience({}: Props) {
  const [card, setCard] = useState(1);
  const experienceArray = [1, 2];
  const handleNext = () => {
    if (card < experienceArray.length) {
      setCard((current) => {
        console.log(current + 1);
        return current + 1;
      });
    }
  };

  const handlePrev = () => {
    if (card > 1) {
      setCard((current) => {
        console.log(current - 1);
        return current - 1;
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center 
      md:text-left  max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-2">
        Experience
      </h3>

      <div className=" flex space-x-5 p-2 snap-x snap-mandatory overflow-auto mt-0 pt-10 ">
        {card == 1 ? <ExperienceCard /> : <ExperienceCard2 />}
      </div>
      <div className="flex flex-row mt-0">
        <ArrowBackIosNewIcon
          onClick={handlePrev}
          style={{ marginRight: "30vw" }}
        />

        <ArrowForwardIosIcon onClick={handleNext} />
      </div>
    </motion.div>
  );
}

export default WorkExperience;

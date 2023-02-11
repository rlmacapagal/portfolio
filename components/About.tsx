import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-column relative h-screen text-center  
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        src="/me.jpg"
        alt="profile_pic"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full 
        object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[300px] flex-wrap"
      ></motion.img>
      <div className="space-y-15 px-0 md:px-10 flex-wrap">
        <h4 className="text-3xl font-semibold mt-10">
          &quot;Software is at the forefront of technology&quot; - myself
        </h4>
        <p className="text-base mt-5">
          Being a former mechanical engineer, I was always fascinated with
          innovations and technology. Then, I&quot;ve come to realized that much
          of technological advancements in our time comes from the tech
          industry. Plus, I get to hone both logical and creative by building
          awesome applications.
        </p>
      </div>
    </div>
  );
}

export default About;

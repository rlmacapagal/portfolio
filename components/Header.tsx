import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "@/typings";

type Props = {
  social: Social[];
};

function Header({ social }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {social.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <Link href="#hero">
          <img src="/logo.png" alt="logo" className=" w-20" />
        </Link>
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{ opacity: 0, x: 500, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer  pt-3"
        >
          <p className="uppercase inline-flex text-sm text-gray-400 ">
            Get in Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;

"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 sm:mt-16"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Über mich</SectionHeading>
      <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
        <div className="text-center md:text-left flex-1 md:max-w-[65%]">
          <p className="mb-3">
            After graduating with a degree in{" "}
            <span className="font-medium">Accounting</span>, I decided to pursue
            my passion for programming. I enrolled in a coding bootcamp and
            learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite part of programming</span> is
            the problem-solving aspect. I{" "}
            <span className="underline">love</span> the feeling of finally
            figuring out a solution to a problem. My core stack is{" "}
            <span className="font-medium">
              React, Next.js, Node.js, and MongoDB
            </span>
            . I am also familiar with TypeScript and Prisma. I am always looking
            to learn new technologies. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a
            software developer.
          </p>

          <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing
            video games, watching movies, and playing with my dog. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I am
            currently learning about{" "}
            <span className="font-medium">history and philosophy</span>. I'm
            also learning how to play the guitar.
          </p>
        </div>
        <div className="relative mx-auto md:mx-0 md:w-[330px] md:h-[330px] w-[255px] h-[255px] md:ml-24 opacity-90">
          <img
            src="/website_pic.jpg"
            alt="Kevin Krazius"
            className="rounded-full object-cover h-full w-full shadow-xl border-4 border-gray-500 border-opacity-50"
            style={{ objectPosition: "center 5%" }}
          />
        </div>
      </div>
    </motion.section>
  );
}

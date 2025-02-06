"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 mt-4 sm:mt-10 max-w-[70rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* Div that stretches all the way, flex center following div, contains image and emoji */}
      <div className="flex flex-col sm:flex-row items-center justify-center">
        {/* Image on top on small screens, side by side on larger screens */}
        <div className="">
          <div className="mx-2 sm:mx-5 relative w-32 sm:w-64">
            {/* Foto von Christian */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src="/stock-photo-guy.jpg"
                alt="Christian Schwarz portrait foto"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="sm:h-60 sm:w-60 w-32 h-32 rounded-full object-cover border-[0.35rem] border-white"
              />
            </motion.div>
          </div>
        </div>

        {/* Text follows here */}
        <motion.h1
          className="mb-10 mt-4 sm:mt-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
          <span className="font-bold">full-stack developer</span> with{" "}
          <span className="font-bold">8 years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.h1>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      ></motion.div>
    </section>
  );
}

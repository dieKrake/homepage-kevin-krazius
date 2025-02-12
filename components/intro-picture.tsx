"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function IntroPicture() {
  return (
    <motion.div
      className="relative overflow-hidden mt-4  sm:h-[400px] opacity-90"
      initial={{ y: "-50%", x: 0, opacity: 0 }}
      animate={{ y: "0%", x: 0, opacity: 1 }}
    >
      <Image
        className="object-cover object-top"
        src="/antiquitäten-stock.jpg"
        alt="bild von antiquitäten"
        width="2000"
        height="200"
        priority={false}
      />
      <div className="absolute inset-0 mb-[3rem] sm:mb-[5rem] flex items-center justify-center">
        <h1 className="text-white text-5xl sm:text-7xl ">Antik Schwarz</h1>
      </div>
    </motion.div>
  );
}

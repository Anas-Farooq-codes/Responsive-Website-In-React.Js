"use client";
import React from "react";
import { motion } from "framer-motion";
import { baseText } from "@/utils/utils";

interface ScrollingTextProps {
  direction?: "left" | "right";
}

function Scrolling_Text({ direction }: ScrollingTextProps) {
  // animation direction
  const animDirection =
    direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"];

  const repeatCount = 10;
  const textFilled = Array(repeatCount).fill(baseText).flat();

  return (
    <div className="overflow-hidden text-nowrap to-white">
      <motion.div
        className=" inline-block text-5xl md:text-8xl font-extrabold"
        animate={{ x: animDirection }}
        transition={{ duration: 250, repeat: Infinity, ease: "linear" }}
      >
        {textFilled.map((text, index) => {
          return (
            <span
              key={index}
              className={`scrolling-text px-4 pr-12 inline-block align-middle ${
                text.outline || ""
              } `}
            >
              {text.text}
              <span className="pl-10">&ndash;</span>
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Scrolling_Text;
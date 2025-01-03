import { act, useEffect, useState } from "react";
import classes from "./TextLoop.module.scss";

interface TextLoopProps {
  textArr: string[];
}

const TextLoop = ({ textArr = [] }: TextLoopProps) => {
  return (
    <div className={classes["text-container"]}>
      <div className={classes["animated-text"]}>
        {textArr.map((text, index) => (
          <span
            key={index}
            className={classes["text"]}
            style={{ transform: `translateY(${index * 65}px)` }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};
export default TextLoop;

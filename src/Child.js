import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color}) {
  return <div onClick={()=>onChangeColor(getRandomColor())} className="child" style={{ backgroundColor: color }} />;
}

export default Child;

import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childCol, setChildColor] = useState("#FFF");

  const handleColorChange =()=>{
    setColor(getRandomColor());
    handleChildColorChange(getRandomColor());
  };

  const handleChildColorChange =(col)=>{
    setChildColor(col);
  };

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor ={handleColorChange} color={childCol} />
      <Child onChangeColor ={handleColorChange} color={childCol}/>
    </div>
  );
}

export default Parent;

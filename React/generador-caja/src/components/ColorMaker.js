import React, { useState } from "react";

const ColorMaker = (props) => {
  const isColor = (strColor) => {
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
  };
  const [color, setColor] = useState([]);
  const [inputColor, setInputColor] = useState("");
  const handleInput = (e) => {
    setInputColor(e.target.value);
  };
  const drawColors = color.map((index) => (
    <div className="colorBox" style={{ backgroundColor: index }}></div>
  ));
  const handleAdd = (e) => {
    e.preventDefault();
    if (isColor(inputColor)) {
      setColor([...color, inputColor]);
      
    }
  };

  return (
    <div>
        <h2>Add your favorite colors!</h2>
        <p>only names of valid html colors</p>
      <form>
        <label>
          Color
          <input type="text" name="name" onChange={handleInput} />
        </label>

        <button onClick={handleAdd}>Add</button>
      </form>
      {drawColors}
    </div>
  );
};

export default ColorMaker;

import React, { useEffect, useState } from "react";

function Colorful({ name }) {
  const [color, setColor] = useState("white"); // Default color

  console.log(name);

  document.body.style.backgroundColor = color;

  useEffect(() => {
    document.body.style.backgroundColor = color;
    console.log("useEffect called!");
  });

  console.log(color);

  return (
    /* Apply the state 'color' to the background of this container */
    <div>
      <h1>Background Color Change</h1>
      <div className='but'>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default React.memo(Colorful);

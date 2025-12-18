import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./../style.css";
import Colorful from "./components/Colorful";

function Main() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Value of Count: {count}</h1>
        <button
          style={{
            backgroundColor: "green",
            paddingTop: "10px",
            paddingBottom: "37px",
            margin: "10px",
            textAlign: "center",
            height: "40px",
            width: "100px",
          }}
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
      </div>
      <Colorful name={count} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// Use JSX syntax <Main /> instead of Main()
root.render(<Main />);

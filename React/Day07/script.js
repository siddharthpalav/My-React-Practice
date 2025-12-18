import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

function Counter() {
  let count = 0;

  function incrementnumber() {
    count = count + 1;
    console.log("incre count: ", count);
    document.querySelector("h1").textContent = `Count is: ${count}`;
  }

  function decrementnumber() {
    count = count - 1;
    console.log("decre count: ", count);
    document.querySelector("h1").textContent = `Count is: ${count}`;
  }

  return (
    <div className='first'>
      <h1>Count is: {count}</h1>
      <button onClick={incrementnumber}>Increment {count} </button>
      <button onClick={decrementnumber}>Decrement {count} </button>
    </div>
  );
}

root.render(<Counter />);

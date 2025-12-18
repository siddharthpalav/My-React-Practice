import React from "react";
import ReactDOM from "react-dom/client";

function Greet(props) {
  console.log(props);
  return (
    <h1>
      Ram Ram Bhaiya Ji {props.name} {props.age}
    </h1>
  );
}

const element = <h1>I am a React element</h1>;

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(<Greet name='sid' age='23' />);

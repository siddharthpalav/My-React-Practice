import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement(
//   "h1",
//   { id: "first", className: "Rahul", key: 1 },
//   "Hello Coder Army"
// );

// const element2 = React.createElement(
//   "h1",
//   { id: "second", className: "Rahul", key: 2 },
//   "Maja Aa Gaya!"
// );

// // ReactDOM.render(element, root);

// const div1 = React.createElement("div", {}, [element, element2]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(element);
// // root.render(element2);
// root.render(div1);

// {
//   /* <div>
//   <h1>Hello Coder Army</h1>
//   <h2>Maja aaya muje</h2>
// </div>; */
// }

const names = "sid";

const obj = {
  age: 23,
  salary: 60,
};

const newElement = (
  <>
    <h1 id='first' className='second'>
      Hello Coder Army {names}
    </h1>
    <h1 style={{ backgroundColor: "blue", color: "white" }}>
      Maja aaya meko {obj.age}
    </h1>
  </>
);

function component1() {
  return <h1>I am React Component</h1>;
}

function component2() {
  return <h1>I am React Component 2</h1>;
}

const elements = (
  <>
    {component1()} {component2()}
  </>
);
const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));

ReactRoot.render(elements);

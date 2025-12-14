const element = React.createElement(
  "h1",
  { id: "first", className: "Rahul" },
  "Hello Coder Army"
);

const element2 = React.createElement(
  "h1",
  { id: "second", className: "Rahul" },
  "Maja Aa Gaya!"
);

// ReactDOM.render(element, root);

const div1 = React.createElement("div", {}, [element, element2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(element);
// root.render(element2);
root.render(div1);

{
  /* <div>
  <h1>Hello Coder Army</h1>
  <h2>Maja aaya muje</h2>
</div>; */
}

const header1 = document.createElement("h1");
header1.innerHTML = "kaise ho aap sab log";
header1.style.backgroundColor = "blue";
header1.style.fontSize = "25px";
header1.style.color = "white";

const header2 = document.createElement("h1");
header2.innerHTML = "kaise ho aap sab log";
header2.style.backgroundColor = "blue";
header2.style.fontSize = "25px";
header2.style.color = "white";

const root = document.getElementById("root");
root.append(header1);
root.append(header2);

const body = document.querySelector("body");
body.style.backgroundColor = "black";
console.log(body);

const React = {
  createElement: function (tag, styles, children) {
    const element = document.createElement(tag);

    if (typeof children === "object") {
      for (let val of children) {
        element.append(val);
      }
    } else element.innerHTML = children;

    for (let key in styles) {
      element.style[key] = styles[key];
    }

    return element;
  },
};

const ReactDOM = {
  render: function (element, root) {
    root.append(element);
  },
};

const header3 = React.createElement(
  "h1",
  { backgroundColor: "blue", fontSize: "25px", color: "white" },
  "wassup bhaiyo!"
);

const li1 = React.createElement("li", {}, "HTML");
const li2 = React.createElement("li", {}, "CSS");
const li3 = React.createElement("li", {}, "JS");

const ul = React.createElement(
  "ul",
  {
    fontSize: "25px",
    backgroundColor: "blue",
    color: "white",
  },
  [li1, li2, li3]
);

// root.append(header3);

ReactDOM.render(header3, root);
ReactDOM.render(ul, root);

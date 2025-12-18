import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Card from "./src/components/Card";
import arr from "./src/utils/dummy";
import "./style.css";

const element = <h1>React Element</h1>;

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

console.log("arr : ", arr);

function App() {
  let [newArr, setNewArr] = useState(arr);
  function sortData() {
    const A = arr.sort((a, b) => a.price - b.price);
    console.log(A);
    setNewArr([...A]);
  }

  function greaterThan499() {
    const B = arr.filter((value) => value.price > 499);
    setNewArr([...B]);
  }

  return (
    <>
      {/* Header */}
      <Header />
      {/* Body */}
      <button onClick={sortData}>Sort Items</button>
      <button onClick={greaterThan499}>499</button>
      <div
        className='middle'
        style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
      >
        {/* <Card cloth='T-Shirt' offer='10-80%off' />
      <Card cloth='Shirt' offer='20-60%off' />
      <Card cloth='Pant' offer='30-50%off' />
      <Card cloth='Kurta' offer='40-50%off' />
      <Card cloth='Pajama' offer='50-60%off' /> */}
        {newArr.map((value, index) => (
          <Card
            key={index}
            cloth={value.cloth}
            offer={value.offer}
            price={value.price}
          />
        ))}
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

root.render(<App />);

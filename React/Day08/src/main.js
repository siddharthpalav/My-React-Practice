import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./../style.css";

function PasswordGenerator() {
  const [password, setPassword] = useState("ABCD");
  const [length, setLength] = useState(10);
  const [numberChange, setNumberChange] = useState(false);
  const [charChange, setCharChange] = useState(false);

  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberChange) {
      str += "0123456789";
    }
    if (charChange) {
      str += "~!@#$%^&*()_+{}|[]";
    }

    let pass = "";

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);
  }, [length, numberChange, charChange]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <>
      <h1>{password}</h1>
      <input
        type='range'
        min={10}
        max={50}
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <label>Length {length}</label>

      <input type='checkbox' onClick={() => setNumberChange(!numberChange)} />
      <label>Number</label>

      <input type='checkbox' onClick={() => setCharChange(!charChange)} />
      <label>String</label>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// Use JSX syntax <Main /> instead of Main()
root.render(<PasswordGenerator />);

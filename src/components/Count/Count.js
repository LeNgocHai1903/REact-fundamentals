import React, { useState } from "react";
import "./Count.css";

const Count = (props) => {

  //should use callback in useState for "always changing value"  
  const [count, setCount] = useState(() => {
      const initialNumber = 0;
      return initialNumber;
  });
  const [txtInput, setTxtInput] = useState("Empty");
  const [txtSelect, setTxtSelect] = useState("Empty");
  const increase = () => {
    setCount(count + 1);
  };

  const degrease = () => {
    setCount(count - 1);
  };

  const onInputChangeHandler = (e) => {
    console.log("Input :" + e.target.value);
    setTxtInput(e.target.value);
  };

  const onSelectChangeHandler = (e) => {
    console.log("Select: " + e.target.value);
    setTxtSelect(e.target.value);
  };
  return (
      <div className="Count">
          <h2>Counting</h2>
        <p> Count: {count}</p>
        <button onClick={increase}>Increse</button>
        <button onClick={degrease}>Decrese</button>

        <h2>Text Input</h2>
        Text Field:{" "}
        <input onChange={onInputChangeHandler} placeholder="Enter text here" />
        <p>Text change : {txtInput}</p>

        <h2>Select Input</h2>
        <select onChange={onSelectChangeHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <p>Select Change: {txtSelect}</p>
      </div>
  );
};

export default Count;

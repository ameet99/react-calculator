import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      // Clear the display and result
      setDisplay("");
      setResult("");
    } else if (value === "=") {
      try {
        // Set the result
        setResult(eval(display));
        setDisplay("");
      } catch (error) {
        // Handle invalid expressions
        setResult("Error");
      }
    } else if (value === "←") {
      // Remove the last character from the display
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {display ? display : result ? result : "0"}
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick("C")} className="clear">
          C
        </button>
        {['←','%'].map((item) => (
          <button onClick={() => handleButtonClick(item)} key={item}>{item}</button>
        ))}
        <button onClick={() => handleButtonClick("/")} className="operator">
          ÷
        </button>
      </div>
      <div className="row">
      {[7,8,9].map((item) => (
          <button onClick={() => handleButtonClick(item)} key={item}>{item}</button>
        ))}
        <button onClick={() => handleButtonClick("*")} className="operator">
          ×
        </button>
      </div>
      <div className="row">
      {[4,5,6].map((item) => (
          <button onClick={() => handleButtonClick(item)} key={item}>{item}</button>
        ))}
        <button onClick={() => handleButtonClick("-")} className="operator">
          -
        </button>
      </div>
      <div className="row">
        {[1,2,3].map((item) => (
          <button onClick={() => handleButtonClick(item)} key={item}>{item}</button>
        ))}
        <button onClick={() => handleButtonClick("+")} className="operator">
          +
        </button>
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick("0")} className="zero">
          0
        </button>
        <button onClick={() => handleButtonClick(".")} className="dot">
          .
        </button>
        <button onClick={() => handleButtonClick("=")} className="equal">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
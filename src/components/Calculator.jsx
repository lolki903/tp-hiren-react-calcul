import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";
function ButtonGroup(props) {
  return <div className="button-group">{props.children}</div>;
}

function Calculator() {
  const [displayValue, setDisplayValue] = useState("");

  const handleButtonClick = (value) => {
    setDisplayValue((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplayValue("");
  };

  const handleEquals = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (e) {
      setDisplayValue("Error");
    }
  };

  return (
    <div className="">
      <Display value={displayValue} />
        <div className="border-2">
      <ButtonGroup>
        <Button label="" />
        <Button onClick={() => handleClear()} label="C" />
        <Button onClick={() => handleButtonClick("/")} label="/" />
        <Button label="" />
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => handleButtonClick("1")} label="1" />
        <Button onClick={() => handleButtonClick("2")} label="2" />
        <Button onClick={() => handleButtonClick("3")} label="3" />
        <Button onClick={() => handleButtonClick("*")} label="x" />
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => handleButtonClick("4")} label="4" />
        <Button onClick={() => handleButtonClick("5")} label="5" />
        <Button onClick={() => handleButtonClick("6")} label="6" />
        <Button onClick={() => handleButtonClick("-")} label="-" />
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => handleButtonClick("7")} label="7" />
        <Button onClick={() => handleButtonClick("8")} label="8" />
        <Button onClick={() => handleButtonClick("9")} label="9" />
        <Button onClick={() => handleButtonClick("+")} label="+" />
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => handleButtonClick("0")} label="0" />
        <Button onClick={() => handleButtonClick(".")} label="," />
        <Button onClick={() => handleEquals()} label="=" />
      </ButtonGroup>
        </div>
    </div>
  );
}

export default Calculator;

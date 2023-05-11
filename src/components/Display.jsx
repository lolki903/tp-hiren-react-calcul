import React from "react";

function Display(props) {
    return (
      <input className="border-2 text-center" type="text" value={props.value} readOnly />
    );
  }
export default Display;

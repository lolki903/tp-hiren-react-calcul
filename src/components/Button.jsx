import React from "react";

function Button(props) {
    return (
      <button className="border p-5" onClick={props.onClick}>
        {props.label}
      </button>
    );
  }

export default Button;

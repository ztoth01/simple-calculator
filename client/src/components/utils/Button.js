import React from "react";

const Button = ({ value, clickEvent, className }) => {
  return (
    <button
      type="button"
      onClick={clickEvent}
      className={className ? className : null}
      value={value}
    >
      {value}
    </button>
  );
};
export default Button;

import React from "react";

const Button = ({ text, style }) => {
  return (
    <>
      <a href="" className={style}>
        {text}
      </a>
    </>
  );
};

export default Button;

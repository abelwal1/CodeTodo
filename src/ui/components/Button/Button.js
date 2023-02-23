import React from "react";
import {buttonClassType} from "../../../utils/constant";
import $ from "./Button.module.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = buttonClassType.primary, // or 'secondary'
}) => {
  return (
    <button
      // TODO: Add conditional classNames
      // - Must have a condition to set the '.primary' className
      // - Must have a condition to set the '.secondary' className
      className={variant = buttonClassType.primary ?  $.button +" "+ $.primary : $.button + $.secondary }
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

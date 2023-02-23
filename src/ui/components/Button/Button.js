import React from "react";
import {buttonClassType} from "../../../utils/constant";
import $ from "./Button.module.css";

const getButtonClass = (btnClassType)=>{
let btnClassName= $.button;
if(btnClassType === buttonClassType.default){ btnClassName+= " "+$.default; }
else if(btnClassType === buttonClassType.primary){ btnClassName+= " "+ $.primary; }
else if(btnClassType === buttonClassType.secondary){ btnClassName+= " "+ $.secondary; }
return btnClassName;
}

const Button = ({
  children,
  onClick,
  type = "button",
  variant, 
}) => {
  return (
    <button
      // TODO: Add conditional classNames
      // - Must have a condition to set the '.primary' className
      // - Must have a condition to set the '.secondary' className
      className={getButtonClass(variant)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

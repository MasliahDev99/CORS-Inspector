import React from "react";
import {cn} from "../../libs/utils"


const Button = ({
    type = "button",
    onClick,
    children,
    className = ""
}) => {
    return (
        <button
      type={type}
      onClick={onClick}
      className={cn(
        "h-12 px-8 rounded bg-blue-500 hover:bg-blue-600 text-white font-medium cursor-pointer",
        className
      )}
    >
      {children}
    </button>
    );
}
export default Button;
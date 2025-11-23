import React from "react";

const Input = ({
  label = "Label",
  type = "text",
  placeholder = "",
  big = false,
  className = "",
  ...props
}) => {
  return (
    <div className="input flex flex-col w-fit static">
      {/* Label */}
      <label
        htmlFor={label}
        className="text-orange-300 text-xs font-semibold relative top-2 ml-[7px] rounded px-[3px] bg-[#f2f2f2] w-fit"
      >
        {label}:
      </label>

      {/* Condicional: textarea OU input */}
      {big ? (
        <textarea
          id={label}
          placeholder={placeholder}
          className={`border-orange-300 px-2.5 py-[11px] text-xs bg-[#f2f2f2] border-2 rounded-[5px] w-[80vw] lg:h-[40vh] h-[50dvh]  lg:w-[57dvw] text-black resize-none focus:outline-none placeholder:text-black/25 ${className}`}
          {...props}
        />
      ) : (
        <input
          id={label}
          type={type}
          placeholder={placeholder}
          className={`border-orange-300 px-2.5 py-[11px] text-xs bg-[#f2f2f2] border-2 rounded-[5px] w-[80vw] lg:w-[57dvw] text-black focus:outline-none placeholder:text-black/25 ${className}`}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;

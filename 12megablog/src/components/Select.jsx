import React, {useId} from "react";

function Select({
     options = [], 
     label,
     className,
     ...props
}, ref) {
    const id= useId()
  return (
    <div className="w-full">
        Select
        {label && <label htmlFor={id}></label> }
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black 
        focus:bg-gray-50 duration-200 border border-gray-200 w-full outline-none ${className}`}
        >

            {/* option gives bydefault array */}
            {options?.map((option)=>
            <option key={option}>
                {option}
            </option>)}
        </select>

        </div>;
  )
}

export default React.forwardRef(Select)

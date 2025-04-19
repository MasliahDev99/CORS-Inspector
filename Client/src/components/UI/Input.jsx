import React from 'react'
import PropTypes from 'prop-types'
import {cn} from '../../libs/utils'

function Input({ 
    type="text",
    value,
    onChange,
    placeholder,
    className
}) {
    return (
     <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cn(
        "flex-grow h-12 rounded-l-md bg-neutral-100 text-black px-4 focus:outline-none cursor-pointer font-semibold text-lg",
        className
      )}
    />
    );
}
Input.PropTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
} 
export default Input;
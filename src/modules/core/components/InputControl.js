import React from 'react';

function InputControl(props) {
  const { className, divClass, myStyle, labelStyle, placeholder, type, name, label, position} = props;

  return (
    <div className={divClass}>
      {position === 'top' && <label htmlFor={name} className={labelStyle}>{label}</label>}
      <input
        className={`${myStyle === 'inputStyle' && 'inputStyle'} ${className}`}
        placeholder={placeholder}
        type={type}
        id={name}
      />
      {position === 'bottom' && <label htmlFor={name} className={labelStyle}>{label}</label>}
    </div>
  )
};

export default InputControl;
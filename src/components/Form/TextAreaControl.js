import React from 'react';

function TextAreaControl(props) {
  const { className, placeholder, cols, rows, name, label, labelStyle, divStyle } = props;

  return (
    <div className={divStyle}>
      <label for={name} className={labelStyle}>{label}</label>
      <textarea
        className={`${className}`}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        id={name}
      />
    </div>
  )
}

export default TextAreaControl;
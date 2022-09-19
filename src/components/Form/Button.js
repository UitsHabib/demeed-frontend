import React from 'react';

function Button({ myStyle, className, children }) {
  return (
      <button className={`${myStyle === 'btnStyle' && 'btnStyle'} ${className}`}>
        {children}
      </button>
  );
};

export default Button;

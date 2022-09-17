import React from 'react';

function Button(props) {
  return (
    <div>
      <button className={`${props.myStyle === 'btnStyle' && 'btnStyle'}`}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;

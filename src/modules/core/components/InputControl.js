import React from 'react';

import { Field, ErrorMessage } from 'formik';

function InputControl(props) {
  const { className, divClass, inputStyle, labelStyle, placeholder, identity, type, name, label, position } = props;

  return (
    <div className={divClass}>
      {position === 'top' && <label htmlFor={identity} className={labelStyle}>{label}</label>}

      <div className='relative'>
        <Field
          className={`${inputStyle === 'inputStyle' && 'inputStyle'} ${className}`}
          placeholder={placeholder}
          type={type}
          id={identity}
          name={name}
        />
        <span className='error-massage'><ErrorMessage name={name} /></span>
      </div>

      {position === 'bottom' && <label htmlFor={identity} className={labelStyle}>{label}</label>}
    </div>
  )
};

export default InputControl;
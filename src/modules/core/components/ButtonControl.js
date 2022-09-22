import React from 'react';
import {Link} from 'react-router-dom';

function ButtonControl({ type, className, children, to }) {
  return (<Link to={to} type={type} className={className}>{children}</Link>);
};

export default ButtonControl;

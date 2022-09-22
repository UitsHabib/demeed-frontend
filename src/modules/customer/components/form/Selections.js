import React from 'react';

function Selections(props) {
    const { options, className, name, label, labelStyle, divStyle } = props;

    return (
        <div className={divStyle}>
            <label htmlFor={name} className={labelStyle}>{label}</label>
            <select className={className} id={name}>
                {
                    options?.map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}
            </select>
        </div>
    );
};

export default Selections;

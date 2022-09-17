import React from 'react';

function button(props) {
    const {buttonClass, children} = props;
    return (
        <div>
            <button className={buttonClass}>{children}</button>
        </div>
    );
}

export default button;
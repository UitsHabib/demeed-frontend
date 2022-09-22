import React from 'react';

import Image from './img/customerSingup.png';

function ImageComponent() {
    return (
        <div className='w-5/12 hidden md:block relative'>
            <img className='w-full h-full absolute' src={Image} />
        </div>
    );
};

export default ImageComponent;
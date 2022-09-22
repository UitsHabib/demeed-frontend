import React from 'react';

import { Icon } from '@iconify/react';


function IconComponent() {
    return (
        <div className='flex justify-center gap-6 mt-10'>
            <h3 className='text-main'>Create account with </h3>
            <span className='border-slate border shadow-md p-1 rounded-full'><Icon icon="akar-icons:google-fill" color="#7336ff" /></span>
            <span className='border-slate border shadow-md p-1 rounded-full'><Icon icon="ic:twotone-facebook" color="#7336ff" /></span>
            <span className='border-slate border shadow-md p-1 rounded-full'><Icon icon="cib:linkedin-in" color="#7336ff" /></span>
        </div>
    );
};

export default IconComponent;
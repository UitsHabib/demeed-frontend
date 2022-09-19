import React from 'react';
import { Icon } from '@iconify/react';

function Header() {
    return (
        <header className='bg-slate-300 shadow-md'>
            <div className="container mx-auto flex justify-between py-10">
                <h1 className="md:text-2xl text-gray-800">Customer Registration Form</h1>
                <a className="anccorStyle group" href='#'>Sing In
                    <Icon className="iconStyle" icon="material-symbols:login-rounded" />
                </a>
            </div>
        </header>
    );
};
export default Header;
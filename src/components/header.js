import React from 'react';

function Header() {
    return (
        <header className='bg-slate-300 shadow-md'>
            <div className="container mx-auto flex justify-between py-10">
                <h1 className="text-2xl">Customer Registration Form</h1>
                <h1 className="text-2xl">Sing In</h1>
            </div>
        </header>
    );
}

export default Header;
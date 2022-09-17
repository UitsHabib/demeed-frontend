import React from 'react';

function Informations() {
    return (
        <div>
            <div className='flex gap-4'>
                <div className='w-6/12'>
                    <input type="text" className='input-style ' placeholder='First Name...' />
                </div>
                <div className='w-6/12'>
                    <input type="text" className='input-style' placeholder='Last Name...' />
                </div>
            </div>
            <div className='mt-10'>
                <h2 className='text-xl text-slate-400 p-1 pb-3'>Address :</h2>
                <input type="text" className='input-style' placeholder='Your Address...' />
                <div className='flex my-8 gap-4'>
                    <input type="text" className='input-style' placeholder='City...' />
                    <input type="text" className='input-style' placeholder='State / Province...' />
                </div>
                <input type="text" className='input-style' placeholder='Postal / Zip Code...' />
            </div>
            <div className='my-10 space-y-10'>
                <div className='w-6/12'>
                    <h2 className='text-xl text-slate-400 p-1 pb-3'>Phone Number :</h2>
                    <input type="text" className='input-style' placeholder='(+880)...' />
                </div>
                <div className='w-6/12'>
                    <h2 className='text-xl text-slate-400 p-1 pb-3'>Email :</h2>
                    <input type="text" className='input-style' placeholder='devschapy71@gmail.com' />
                </div>
            </div>
        </div>
    );
}

export default Informations;

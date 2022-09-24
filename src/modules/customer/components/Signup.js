import React from 'react';

import ButtonControl from '../../core/components/ButtonControl';
import ImageComponent from './ImageComponent';
import FromComponent from './fromComponent';
import IconComponent from './iconComponent';

function Signup( ) {
        return (
        <section className='bg-secondary'>
            <div className='container mx-auto md:flex'>
                <ImageComponent />

                <div className='md:w-7/12 md:pl-14 h-screen'>
                    {/* ======= Header Area ======= */}
                    <header className='flex justify-end items-center gap-8 py-8'>
                        <h3 className='text-main'>Already have an Account?</h3>
                        <ButtonControl to="/customer/Signin" className='btn btnIn' children='SIGN IN' />
                    </header>
                    {/* ======= Title Area ======= */}
                    <div className='space-y-2'>
                        <h1 className='text-3xl font-black text-gray'>Welcome to Signup</h1>
                        <p className='text-silver text-md'>Register your account !</p>
                    </div>

                    <FromComponent />
                    <IconComponent />
                </div>
            </div>
        </section>
    );
};

export default Signup;
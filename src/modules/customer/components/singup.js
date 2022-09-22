import React from 'react';

import { image } from './img/image'
import { Icon } from '@iconify/react';


function Singup() {
    return (
        <section className='bg-secondary'>
            <div className='container mx-auto flex'>
                <div className='w-5/12 relative'>
                    <img className='w-full h-screen absolute' src={image} />
                </div>
                <div className='w-7/12 md:pl-14 h-screen'>
                    <header className='bg-secondary flex justify-end items-center gap-8 py-8'>
                        <h3 className='text-main'>Already have an Account?</h3>
                        <button className='btn btnIn'>SIGN IN</button>
                    </header>

                    <div className='space-y-2'>
                        <h1 className='text-3xl font-black text-gray'>Welcome to Signup</h1>
                        <p className='text-silver text-md'>Register your account !</p>
                    </div>

                    <form className='my-8 space-y-4'>
                        <div>
                            <label className='text-gray' htmlFor="name">Name :</label>
                            <input className="inputStyle" type="text" id="name" />
                        </div>

                        <div>
                            <label className='text-gray' htmlFor="email">Email :</label>
                            <input className="inputStyle" type="email" id="email" />
                        </div>

                        <div className='flex gap-4'>
                            <div className='w-6/12'>
                                <label className='text-gray' htmlFor="password">Password :</label>
                                <input className="inputStyle" type="password" id="password" />
                            </div>
                            <div className='w-6/12'>
                                <label className='text-gray' htmlFor="repassword">Confirm Password :</label>
                                <input className="inputStyle" type="password" id="repassword" />
                            </div>
                        </div>
                        <div className='space-x-3'>
                        <input type="checkbox" id="checkbox"/>
                        <label htmlFor='checkbox' className='text-gray'>I accept the <span className='text-main'>terms of service</span> as well as <span className='text-main'>Privacy Policy</span>.</label>
                        </div>
                        <button type='submit' className='btn btnUp'>SIGN UP</button>
                    </form>

                    <div className='flex justify-center gap-6 mt-10'>
                        <h3 className='text-main'>Create account with </h3>
                        <span className='border-slate border shadow-md p-1 rounded-full'><Icon icon="akar-icons:google-fill" color="#7336ff" /></span>
                        <span className='border-slate border shadow-md p-1 rounded-full'><Icon icon="ic:twotone-facebook" color="#7336ff" /></span>
                        <span className='border-slate border shadow-md p-1 rounded-full'><Icon icon="cib:linkedin-in" color="#7336ff" /></span>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Singup;
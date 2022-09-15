import React from 'react';
import Header from './header';

function SingUp() {
    return (
        <section>
            <Header />
            <form className='mt-10 mx-14 bg-gray-300 rounded py-4'>
                <h1 className='text-3xl text-center font-semibold py-4'>Customer Details:</h1>
                <hr />
                <hr />

                <div className='mx-14 mt-10'>
                    <h2 className='text-xl text-gray-400 p-1 pb-3'>Full Name :</h2>
                    <div className='flex justify-between'>
                        <div>
                            <input type="text" className='py-3 px-36 text-left rounded' placeholder='First Name'/>
                        </div>
                        <div>
                            <input type="text" className='py-3 px-36 rounded' placeholder='Last Name'/>
                        </div>
                    </div>
                </div>
            </form>

        </section>
    );
}

export default SingUp;

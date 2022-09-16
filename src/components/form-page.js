import React from 'react';

function FormPage() {
    return (
        <form>
            <div className='my-10 container shadow-lg mx-auto bg-slate-200 rounded py-4'>
                <h1 className='text-3xl text-center font-semibold py-4'>Customer Details:</h1>
                <div className='h-0.5 shadow-sm bg-slate-300 '></div>

                <div className='w-10/12 mx-auto my-10'>
                    <h2 className='text-xl text-slate-400 p-1 pb-3'>Full Name :</h2>

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

                    <div className='h-0.5 shadow-sm bg-slate-300 my-10'></div>

                    <div className='w-6/12 my-10'>
                        <h2 className='text-xl text-slate-400 p-1 pb-3'>How did you hear about us?</h2>
                        <select className='input-style text-slate-400' name='select'>
                            <option value="please select" key="">Please Select</option>
                            <option value="newspaper" key="">Newspaper</option>
                            <option value="internet" key="">Internet</option>
                            <option value="others" key="">Others...</option>
                        </select>
                    </div>
                    <div className='my-10 space-y-10'>
                        <div>
                            <h2 className='text-xl text-slate-400 p-1 pb-3'>Feedback about us :</h2>
                            <textarea className='input-style' cols="30" rows="8"></textarea>
                        </div>
                        <div>
                            <h2 className='text-xl text-slate-400 p-1 pb-3'>Suggestions if any for further improvement :</h2>
                            <textarea className='input-style' cols="30" rows="8" placeholder='Anything Hare...'></textarea>
                        </div>
                    </div>
                    <div className='my-10'>
                        <h2 className='text-xl text-slate-400 p-1 pb-3'>Will you be willing to recommend us?</h2>
                        <div className='p-1 flex gap-2'>
                            <input className='text-slate-400 block' type="radio" />
                            <label className='text-slate-500 block'>Yes</label>
                        </div>
                        <div className='p-1 flex gap-2'>
                            <input className='text-slate-400 block' type="radio" />
                            <label className='text-slate-500 block'>Maybe</label>
                        </div>
                        <div className='p-1 flex gap-2'>
                            <input className='text-slate-400 block' type="radio" />
                            <label className='text-slate-500 block'>No</label>
                        </div>
                    </div>

                    <div className='h-0.5 shadow-sm bg-slate-300 my-10'></div>

                    <input className='submit' type="submit" />



                </div>




            </div>
        </form>
    );
}

export default FormPage;

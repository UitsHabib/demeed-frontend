import React from 'react';
import Button from './button';
import Informations from './informations';
import MarkSelections from './mark-selections';
import SelectOptions from './select-options';
import TextAreaContent from './textArea-content';

function FormPage() {
    return (
        <form className='my-10'>
            <div className='container shadow-lg mx-auto bg-slate-200 rounded py-4'>
                <h1 className='text-3xl text-center font-semibold py-4'>Customer Details:</h1>
                <div className='h-0.5 shadow-sm bg-slate-300 '></div>

                <div className='w-10/12 mx-auto my-10'>
                    <h2 className='text-xl text-slate-400 p-1 pb-3'>Full Name :</h2>
                    <Informations />
                    <div className='h-0.5 shadow-sm bg-slate-300 my-10'></div>
                    <SelectOptions />
                    <TextAreaContent />
                    <MarkSelections />
                    <div className='h-0.5 shadow-sm bg-slate-300 my-10'></div>
                    <Button myStyle="btnStyle">Submit</Button>
                </div>
            </div>
        </form>
    );
}

export default FormPage;

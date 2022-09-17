import React from 'react';

function TextAreaContent() {
    return (
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
    );
}

export default TextAreaContent;

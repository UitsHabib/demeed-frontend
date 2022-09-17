import React from 'react';

function MarkSelections() {
    return (
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
    );
}

export default MarkSelections;

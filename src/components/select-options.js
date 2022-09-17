import React from 'react';

function SelectOptions() {
    return (
        <div className='w-6/12 my-10'>
            <h2 className='text-xl text-slate-400 p-1 pb-3'>How did you hear about us?</h2>
            <select className='input-style text-slate-400' name='select'>
                <option value="please select" key="">Please Select</option>
                <option value="newspaper" key="">Newspaper</option>
                <option value="internet" key="">Internet</option>
                <option value="others" key="">Others...</option>
            </select>
        </div>
    );
}

export default SelectOptions;

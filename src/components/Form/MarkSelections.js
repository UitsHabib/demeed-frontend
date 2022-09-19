import React from 'react';
import Label from './label';
import InputControl from './InputControl';

function MarkSelections() {

    return (
        <div className='my-10'>
            <Label labelStyle='textLabel'>Will you be willing to recommend us?</Label>
            <InputControl
                className="text-slate-400 block"
                type="checkbox"
                name="Yes"
                label="Yes"
                labelStyle="text-slate-500 block"
                divClass="flex gap-2"
                position="bottom"
            />
            <InputControl
                className="text-slate-400 block"
                type="checkbox"
                name="Maybe"
                label="Maybe"
                labelStyle="text-slate-500 block"
                divClass="flex gap-2"
                position="bottom"
            />
            <InputControl
                className="text-slate-400 block"
                type="checkbox"
                name="No"
                label="No"
                labelStyle="text-slate-500 block"
                divClass="flex gap-2"
                position="bottom"
            />
        </div>
    );
}

export default MarkSelections;

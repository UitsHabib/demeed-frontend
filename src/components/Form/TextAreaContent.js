import React from 'react';
import Selections from './Selections';
import TextAreaControl from './TextAreaControl';

function TextAreaContent() {
    const optionsList = ['Please Select', 'Newspaper', 'Internet', 'Others...'];

    return (
        <>
            <Selections
                className="inputStyle text-sm text-slate-400"
                options={optionsList}
                divStyle="md:w-6/12 w-7/12"
                name="about"
                label="How did you hear about us?"
                labelStyle="textLabel"
            />

            {/* ------------Text Area Start------------ */}
            <div className='my-10 space-y-10'>
                <TextAreaControl
                    className="inputStyle"
                    cols="30"
                    rows="8"
                    name="feedback"
                    label="Feedback about us :"
                    labelStyle="textLabel"
                />
                <TextAreaControl
                    className="inputStyle"
                    cols="30"
                    rows="8"
                    name="improvement"
                    label="Suggestions if any for further improvement :"
                    labelStyle="textLabel"
                />
            </div>
        </>
    );
}

export default TextAreaContent;

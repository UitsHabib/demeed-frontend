import React from 'react';
import Button from './Button';
import Informations from './Informations';
import MarkSelections from './MarkSelections';
import TextAreaContent from './TextAreaContent';

function FormPage() {

    return (
        <form className='my-10'>
            <div className='formStyle'>
                <h1 className='formTitel'>Customer Details:</h1>
                <hr className='hrLineStyle'/>

                <div className='w-10/12 mx-auto my-10'>
                    <Informations />
                    <hr className='hrLineStyle'/>
                    <TextAreaContent />
                    <MarkSelections />
                    <hr className='hrLineStyle'/>
                    <Button myStyle="btnStyle">Submit</Button>
                </div>
            </div>
        </form>
    );
}

export default FormPage;

import React from 'react';

function InputControl(props) {

    const {label,name, type, placeholder} = props;

    if(type==='checkbox'){
        return(
            <div class="form-check py-2">
                <input class="form-check-input" type={type} value="" name={name} id={name}></input>
                <label class="form-check-label" for={name}>
                {label}
                </label>
            </div>
        )
    }else{
        return (
            <div>
                <div class="mb-3">
                    <label for={name} class="form-label">{label}</label>
                    <input type={type} class="form-control" placeholder={placeholder} name={name} id={name}></input>
                </div>
            </div>
        );
    }



}

export default InputControl;
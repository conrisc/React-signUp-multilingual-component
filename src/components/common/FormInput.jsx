import React from 'react';
import { withTranslation } from 'react-i18next';

export function FormInput(props) {
    
    function handleChange(event) {
        props.onChange(event.target.value);
    }

    return (
        <div className="input-field col s12 m6 offset-m3">
            <input
                placeholder={props.t(props.placeholder)}
                type={props.type || "text"}
                className="validate"
                value={props.value}
                onChange={handleChange} 
            />
            <span className="helper-text left-align">Helper text</span>
        </div>
    );
}

export default withTranslation()(FormInput)
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
                className={"validate" + (props.isValid === false ? " invalid" : "")}
                value={props.value}
                onChange={handleChange} 
            />
            {props.isValid === false &&
                <span className="helper-text left-align">{props.t(props.invalidMsg)}</span>
            }
        </div>
    );
}

export default withTranslation()(FormInput)
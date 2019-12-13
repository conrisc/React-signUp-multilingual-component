import React from 'react';
import { withTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';

function FormInput(props) {
    
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

FormInput.propTypes = {
    t: PropTypes.func.isRequired,
    onChange:  PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    isValid: PropTypes.bool,
    invalidMsg: PropTypes.string,
};

export default withTranslation()(FormInput)
import React from 'react';
import { withTranslation } from 'react-i18next';

function FormCheckbox(props) {

    function handleChange(event) {
        props.onChange(event.target.checked);
    }

    return (
        <p>
            <label>
                <input type="checkbox" checked={props.isChecked} onChange={handleChange} />
                <span>{props.t(props.text)}</span>
            </label>
        </p>
    );
}

export default withTranslation()(FormCheckbox)

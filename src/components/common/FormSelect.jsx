import React from 'react';
import { withTranslation } from 'react-i18next';

function FormSelect(props) {
    function handleChange(event) {
        props.onChange(event.target.value);
    }
    console.log(props)

    return (
        <select value={props.selected} onChange={handleChange}>
            {
                props.values.map((value, index) =>
                    <option key={index} value={value}>{props.t(value)}</option>
                )
            }
        </select>
    );
}

export default withTranslation()(FormSelect);
import React from 'react';
import { withTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';

function FormSelect(props) {
    function handleChange(event) {
        props.onChange(event.target.value);
    }

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

FormSelect.propTypes = {
    t: PropTypes.func.isRequired,
    onChange:  PropTypes.func.isRequired,
    selected: PropTypes.any.isRequired,
    values: PropTypes.array.isRequired
};

export default withTranslation()(FormSelect);
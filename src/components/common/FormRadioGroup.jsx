import React from 'react';
import { withTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';

function FormRadioGroup(props) {

    function handleChange(event) {
        props.onChange(event.target.value);
    }

    return (
        <div>
            <h6>{props.t(props.title)}</h6>
            {
                props.values.map((value, index) =>
                    <p key={index}>
                        <label>
                            <input type="radio" value={value} checked={value === props.selected} onChange={handleChange} />
                            <span>{props.t(value)}</span>
                        </label>
                    </p>
                )
            }
        </div>
    );
}

FormRadioGroup.propTypes = {
    t: PropTypes.func.isRequired,
    onChange:  PropTypes.func.isRequired,
    title: PropTypes.string,
    selected: PropTypes.any.isRequired,
    values: PropTypes.array.isRequired
};

export default withTranslation()(FormRadioGroup);
import React from 'react';
import { withTranslation } from 'react-i18next';

export function FormRadioGroup(props) {

    function handleChange(event) {
        props.onChange(event.target.value);
    }

    return (
        <div>
            <h6>What's your gender?</h6>
            {
                props.values.map((value, index) =>
                    <p key={index}>
                        <label>
                            <input type="radio" value={value} checked={value === props.selected} onChange={handleChange} />
                            <span>{value}</span>
                        </label>
                    </p>
                )
            }
        </div>
    );
}

export default withTranslation()(FormRadioGroup);
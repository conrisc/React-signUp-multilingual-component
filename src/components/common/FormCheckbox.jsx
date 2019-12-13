import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

import Info from './Info';

function FormCheckbox(props) {
    const isValid = props.isValid !== false;
    const [ isInfoVisible, setIsInfoVisible ] = useState(false);

    function handleChange(event) {
        props.onChange(event.target.checked);
    }

    function showInfo() {
        setIsInfoVisible(true);
    }

    function hideInfo() {
        setIsInfoVisible(false);
    }

    return (
        <div className="row">
            <label>
                <input type="checkbox" checked={props.isChecked} onChange={handleChange} />
                <span className={isValid ? "" : "red-text"}>{props.t(props.text)}</span>
            </label>
            {props.info &&
                <span className="symbol" onMouseEnter={showInfo} onMouseLeave={hideInfo}>
                    ?
                </span>
            }
            {isInfoVisible && <Info message={props.info} />}
        </div>
    );
}

export default withTranslation()(FormCheckbox)

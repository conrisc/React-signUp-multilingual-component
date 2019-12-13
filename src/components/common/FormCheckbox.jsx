import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

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
            {isInfoVisible &&
                <div className="info blue-text">
                    {props.t(props.info)}
                </div>
            }
        </div>
    );
}

export default withTranslation()(FormCheckbox)

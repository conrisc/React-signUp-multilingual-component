import React from 'react';
import { withTranslation } from 'react-i18next';

function Info(props) {
    return props.message ?
        (
            <div className="info blue-text">
                {props.t(props.message)}
            </div>
        ) : null;
}

export default withTranslation()(Info)
import React from 'react';
import { withTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';

function Info(props) {
    return props.message ?
        (
            <div className="info blue-text">
                {props.t(props.message)}
            </div>
        ) : null;
}

Info.propTypes = {
    message:  PropTypes.string,
};

export default withTranslation()(Info)
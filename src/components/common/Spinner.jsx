import React from 'react';
import { PropTypes } from 'prop-types';

function Spinner(props) {
    return props.isVisible ?
        (
            <div className="preloader-wrapper small active">
                <div className="spinner-layer spinner-green-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        ) : null;
}

Spinner.propTypes = {
    isVisible:  PropTypes.bool.isRequired,
};

export default Spinner;
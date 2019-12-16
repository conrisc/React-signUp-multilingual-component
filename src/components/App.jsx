import React, { useState, useEffect, useRef } from 'react';
import { withTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';
import { useHistory } from "react-router-dom";

import './App.css';

import lngResources from '../i18n/resources';
import SignUpFormModels from '../models/signUpForm/';
import FormSelect from './common/FormSelect';
import SignUpForm from './SignUpForm';

function App(props) {

    const i18n = props.i18n;
    const defaultLanguage = i18n.options.fallbackLng[0];
    const availableLanguages = useRef(Object.keys(lngResources));

    const [language, setLanguage] = useState(defaultLanguage);
    const [signUpFormModel, setSignUpFormModel] = useState(SignUpFormModels[language]);

    let history = useHistory();
    function updateLanguage(lang) {
        setLanguage(lang);
        history.push(lang);
    }

    useEffect(() => {
        i18n.changeLanguage(language);
        const defaultModel = SignUpFormModels[defaultLanguage];
        setSignUpFormModel(SignUpFormModels[language] || defaultModel);
    }, [i18n, language, defaultLanguage]);

    useEffect(() => {
        const lngParam = props.match.params.lng;

        if (availableLanguages.current.find(lng => lng === lngParam))
            setLanguage(lngParam);
        else
            props.history.push(`/${defaultLanguage}`)

    }, [defaultLanguage, props.history, props.match.params]);

    return (
        <div className="App">
            <div className="language-selector">
                <FormSelect values={availableLanguages.current} selected={language} onChange={updateLanguage} />
            </div>
            <SignUpForm model={signUpFormModel} />
        </div>
    );
}

App.propTypes = {
    t: PropTypes.func.isRequired,
    i18n: PropTypes.object.isRequired
};

export default withTranslation()(App);

import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';

import './App.css';

import lngResources from '../i18n/resources';
import SignUpFormModels from '../models/signUpForm/';
import SignUpForm from './SignUpForm.jsx';

function App(props) {
    const i18n = props.i18n;
    const defaultLanguage = i18n.options.fallbackLng[0];

    const [language, setLanguage] = useState(defaultLanguage);
    const [signUpFormModel, setSignUpFormModel] = useState(SignUpFormModels[language]);

    useEffect(() => {
        i18n.changeLanguage(language);
        const defaultModel = SignUpFormModels[defaultLanguage];
        setSignUpFormModel(SignUpFormModels[language] || defaultModel);
    }, [language, i18n]);

    useEffect(() => {
        const availableLanguages = Object.keys(lngResources);
        const lngParam = props.match.params.lng;

        if (availableLanguages.find(lng => lng === lngParam))
            setLanguage(lngParam);
        else
            props.history.push(`/${defaultLanguage}`)

    }, [props.match.params]);

    return (
        <div className="App">
            <SignUpForm model={signUpFormModel} />
        </div>
    );
}

export default withTranslation()(App);

import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';

import './App.css';

import SignUpForm from './SignUpForm.jsx';
import SignUpFormModels from '../models/signUpForm/';

function App(props) {
    const i18n = props.i18n;
    const [language, setLanguage] = useState('en');
    const [signUpFormModel, setSignUpFormModel] = useState(SignUpFormModels[language]);

    useEffect(() => {
        i18n.changeLanguage(language);
        const defaultModel = SignUpFormModels[i18n.options.fallbackLng[0]];
        setSignUpFormModel(SignUpFormModels[language] || defaultModel);
    }, [language, i18n]);

    return (
      <div className="App">
            <SignUpForm model={signUpFormModel} />
      </div>
    );
}

export default withTranslation()(App);

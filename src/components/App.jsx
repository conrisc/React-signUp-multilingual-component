import React, { useState, useEffect } from 'react';
import './App.css';
import { withTranslation, Trans } from 'react-i18next';
import SignUpForm from './SignUpForm.jsx';

function App(props) {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        props.i18n.changeLanguage(language);
    }, [language, props.i18n]);

    return (
      <div className="App">
            <SignUpForm />
      </div>
    );
}

export default withTranslation()(App);

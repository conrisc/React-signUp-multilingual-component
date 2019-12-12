import React from 'react';
import './App.css';
import { withTranslation, Trans } from 'react-i18next';
import { SignUpForm } from './SignUpForm.jsx';

function App(props) {
  return (
    <div className="App">
      <h1>
        {props.t('welcome.title')}
      </h1>
      <Trans>
          <h1>nice</h1>
      </Trans>
      <Trans i18nKey='welcome.intro'></Trans>
      <SignUpForm />
    </div>
  );
}

export default withTranslation()(App);

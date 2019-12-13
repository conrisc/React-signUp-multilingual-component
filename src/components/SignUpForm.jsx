import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

import FormInput from './common/FormInput'
import FormCheckBox from './common/FormCheckbox';
import FormRadioGroup from './common/FormRadioGroup';

function SignUpForm(props) {
    const genderValues = ['gender.male', 'gender.female'];
    const model = props.model || {};
    const [email, setEmail] = useState('');
    const [isAdult, setIsAdult] = useState(false);
    const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
    const [gender, setGender] = useState(null);

    const [isValid, setIsValid] = useState({
        email: true,
        isAdult: true
    });

    function handleEmailChange(newEmail) {
        if (newEmail.trim() === '')
            setIsValid({ ...isValid, email: false });
        else
            setIsValid({ ...isValid, email: true });

        setEmail(newEmail);
    }

    function handleIsAdultChange(newIsAdult) {
        setIsValid({ ...isValid, isAdult: newIsAdult });
        setIsAdult(newIsAdult);
    }

    function handleSignUp(event) {
        event.preventDefault();

        console.log('Sign up buton clicked');
    }


    return (
        <div className="row">
            <form className="col s12 l6 offset-l3 z-depth-2 mt-3" onSubmit={handleSignUp}>
                <h4>{props.t('signup')}</h4>
                <div className="row">
                    <FormInput
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={handleEmailChange}
                        isValid={isValid.email}
                        invalidMsg="email.invalid"
                    />
                </div>
                <FormCheckBox
                    text="age.isadult"
                    isChecked={isAdult}
                    onChange={handleIsAdultChange}
                    isValid={isValid.isAdult}
                    info="age.law"
                />
                {model.newsletter &&
                    <FormCheckBox text="subscribe.newsletter" isChecked={subscribeNewsletter} onChange={setSubscribeNewsletter} />
                }
                {model.gender &&
                    <FormRadioGroup title="gender.what" values={genderValues} selected={gender} onChange={setGender} />
                }
                <div className="row">
                    <button className="btn">{props.t('signup')}</button>
                </div>
            </form>
        </div>
    );
}

export default withTranslation()(SignUpForm);
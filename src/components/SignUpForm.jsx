import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

import { validateEmail } from '../services/validatorService';
import { signUp } from '../services/signUpService';
import genderValues from '../models/genders';

import FormInput from './common/FormInput'
import FormCheckBox from './common/FormCheckbox';
import FormRadioGroup from './common/FormRadioGroup';
import Spinner from './common/Spinner';
import Info from './common/Info';

function SignUpForm(props) {
    const model = props.model || {};
    const [email, setEmail] = useState('');
    const [isAdult, setIsAdult] = useState(false);
    const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
    const [gender, setGender] = useState('');
    const [isAwaitingResponse, setIsAwaitingResponse] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const [isValid, setIsValid] = useState({
        email: true,
        isAdult: true
    });

    function handleEmailChange(newEmail) {
        setIsValid({
            ...isValid,
            email: validateEmail(newEmail)
        });
        setEmail(newEmail);
    }

    function handleIsAdultChange(newIsAdult) {
        setIsValid({
            ...isValid,
            isAdult: newIsAdult
        });
        setIsAdult(newIsAdult);
    }

    function handleSignUp(event) {
        event.preventDefault();

        const isFormValid = validateRequiredFields();
        if (isFormValid) {
            console.log('Sending signUp request');
            const signUpData = {
                email,
                subscribeNewsletter,
                gender
            };
            setIsAwaitingResponse(true);
            signUp(signUpData)
                .then(({ isSuccess }) => {
                    setIsAwaitingResponse(false);
                    setResponseMessage(isSuccess ? 'signup.success' : 'signup.fail')
                });
        }
    }

    function validateRequiredFields() {
        const newIsValid = {
            email: validateEmail(email),
            isAdult
        }
        setIsValid(newIsValid);
        return Object.values(newIsValid).every(el => el);
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
                <Spinner isVisible={isAwaitingResponse} />
                <Info message={responseMessage} />
            </form>
        </div>
    );
}

export default withTranslation()(SignUpForm);
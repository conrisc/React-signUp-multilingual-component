import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import FormCheckBox from './common/FormCheckbox.jsx';
import FormRadioGroup from './common/FormRadioGroup';

function SignUpForm(props) {
    const genderValues = ['Male', 'Female'];
    const [email, setEmail] = useState('');
    const [isAdult, setIsAdult] = useState(false);
    const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
    const [gender, setGender] = useState(null);

    function handleSignUp(event) {
        event.preventDefault();
        console.log('Sign up buton clicked');
    }

    return (
        <div className="row">
            <form className="col s12 l6 offset-l3 z-depth-2" onSubmit={handleSignUp}>
                <h4>Sign Up</h4>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <input placeholder="Email" type="email" className="validate" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                </div>
                <FormCheckBox text="Are you at least 18 yo?" isChecked={isAdult} onChange={setIsAdult} />
                <FormCheckBox text="Subscribe to newsletter" isChecked={subscribeNewsletter} onChange={setSubscribeNewsletter} />
                <FormRadioGroup values={genderValues} selected={gender} onChange={setGender} />
                <div className="row">
                    <button className="btn">Sign up</button>
                </div>
            </form>
        </div>
    );
}

export default withTranslation()(SignUpForm);
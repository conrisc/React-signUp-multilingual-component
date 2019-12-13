import React from 'react';

export function SignUpForm(props) {
    return (
        <div className="row">
            <form className="col s12 l6 offset-l3 z-depth-2">
                <h3>Sign Up</h3>
                <div className="row">
                    <div className="input-field col s12 m6 offset-m3">
                        <input placeholder="Email" type="email" className="validate" />
                    </div>
                </div>
                <p>
                    <label>
                        <input type="checkbox" />
                        <span>Are you at least 18 yo?</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" />
                        <span>Subscribe to newsletter</span>
                    </label>
                </p>
                <div>
                    <p>What's your gender?</p>
                    <p>
                        <label>
                            <input type="radio" name="gender" value="Male" />
                            <span>Male</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="radio" name="gender" value="Female" />
                            <span>Female</span>
                        </label>
                    </p>
                </div>
                <div className="row">
                    <button className="btn">Sign up</button>
                </div>
            </form>
        </div>
    );
}
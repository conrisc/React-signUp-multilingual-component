import React from 'react';

export function SignUpForm(props) {
    return (
        <div className="row">
            <form className="col s4 offset-s4">
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Email" type="email" class="validate" />
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
            </form>
        </div>
    );
}
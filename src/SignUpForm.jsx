import React from 'react';

export function SignUpForm(props) {
    return (
        <div>
            <form>
                Email: <input type="email" />
                <br/>
                <label>
                    Are you at least 18 yo?
                    <input type="checkbox" />
                </label>
                <br/>
                <label>
                    Do you want to subscribe to our newsletter?
                    <input type="checkbox" />
                </label>
                <br/>
                <div>
                    What's your gender?
                    <br/>
                    <label>
                        <input type="radio" name="gender" value="Male" />
                        Male
                    </label>
                    <br/>
                    <label>
                        <input type="radio" name="gender" value="Female" />
                        Female
                    </label>
                </div>
            </form>
        </div>
    );
}
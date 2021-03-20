import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div>
            This is SignUp Page
            <form >
                <h1>Create An Account</h1>
                <div className="form-container">
                    <input className="form-row" type="text" name="" placeholder="Name" id=""/>
                    <input className="form-row" type="email" name="" placeholder="Email or Username" id=""/>
                    <input className="form-row" type="password" name="" placeholder="Password" id=""/>
                    <input className="form-row" type="password" name="" placeholder="Confirm Password" id=""/>
                    <input className="form-row btn btn-primary" type="submit"value="Create An Account"/>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
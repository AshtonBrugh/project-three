import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.log(e)
        };
    };

    return (
        <div className="container">
            <div className="sign-up">
                <h4 className="header">Sign Up</h4>
                <div className="form-body">
                    <form onSubmit={handleFormSubmit}>
                        <input className="form-input" placeholder="Your email"
                            name="email" type="email" id="emailSignup"
                            value={formState.email} onChange={handleChange}
                        />
                        <input className="form-input" placeholder="Your username"
                            name="username" type="username" id="usernameSignup"
                            value={formState.username} onChange={handleChange}
                        />
                        <input className="form-input" placeholder="******"
                            name="password" type="password" id="passwordSignup"
                            value={formState.password} onChange={handleChange}
                        />
                        <button className="btn btn-warning border-2 border-danger text-danger fw-bold btn-large" type="submit">
                            Submit
                        </button>
                    </form>

                    {error && <div>Signup failed</div>}
                </div>
            </div>
        </div>
    );
};

export default Signup;
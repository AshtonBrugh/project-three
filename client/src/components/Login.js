import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import React, { useState } from 'react';

import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

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
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.log(err);
        }

        setFormState({
            email: '',
            password: ''
        })
    };

    return (
        <div className="container border-red">
            <div className="login">
                <h4 className="header">Login</h4>
                <div className="form-body">
                    <form onSubmit={handleFormSubmit}>
                        <input
                            className="form-input"
                            placeholder="Your email"
                            name="email"
                            type="email"
                            id="email"
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            placeholder="******"
                            name="password"
                            type="password"
                            id="password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <button className="btn" type="submit">
                            Submit
                        </button>
                    </form>

                    {error && <div>Login failed</div>}
                </div>
            </div>
        </div>
    );
};

export default Login;
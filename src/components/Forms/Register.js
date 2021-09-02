import React, { Component } from 'react';
import './Login.css';

class Register extends Component {
    state = {
        email: '',
        password: '',
        displayName: '',
        fireErrors: ''
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text"
                        className="regField"
                        placeholder="Your Name"
                        name="name" />
                    <br/>
                    <input type="text"
                        className="regField"
                        placeholder="Email"
                        name="email" />
                    <br />
                    <input type="password"
                        className="regField"
                        placeholder="Password"
                        name="password" />
                    <br />
                    <br />
                    <input type="submit" className="submitBtn" value="REGISTER" />
                </form>
            </div>
        )
    }
}

export default Register
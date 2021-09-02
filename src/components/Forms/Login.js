import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
        fireErrors: ''
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text"
                        className="regField"
                        placeholder="Email"
                        name="email" />
                    <br/>
                        <input type="password"
                            className="regField"
                            placeholder="Password"
                            name="password" />
                    <br/>
                    <br/>
                        <input type="submit" className="submitBtn" value="LOGIN" />
                    </form>
            </div>
                )
    }
}

export default Login
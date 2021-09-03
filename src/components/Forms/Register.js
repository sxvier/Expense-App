import React, { Component } from 'react';
import fire from '../../config/Fire';
import './Login.css';


class Register extends Component {
    state = {
        email: '',
        password: '',
        displayName: '',
        fireErrors: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    register = e => {
        e.preventDefault();
        
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text"
                        className="regField"
                        placeholder="Your Name"
                        onChange={this.handleChange}
                        value={this.state.displayName}
                        name="displayName" />
                    <br/>
                    <input type="text"
                        className="regField"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        name="email" />
                    <br />
                    <input type="password"
                        className="regField"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password" />
                    <br />
                    <br />
                    <input onClick={this.register} type="submit" className="submitBtn" value="REGISTER" />
                </form>
            </div>
        )
    }
}

export default Register
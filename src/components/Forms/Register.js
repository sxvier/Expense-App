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
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            var currentUser = fire.auth().currentUser;
            currentUser.updateProfile({
                displayName: this.state.displayName
            })
        }).catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    render() {
        let errorNotification = this.state.fireErrors ? 
            (<div className="Error">{this.state.fireErrors}</div>) : null;
        return (
            <div>
                {errorNotification}
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
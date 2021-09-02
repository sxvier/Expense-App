import React, { Component } from 'react'
import './Main.css';
import Login from './Forms/Login'
import Register from './Forms/Register';

export default class Main extends Component {
    state = {
        user: 1,
        loading: true,
        formSwitcher: false
    }

    formSwitcher = (action) => {
        console.log(action);
        this.setState({
            formSwitcher: action === 'Register' ? true : false
        })
    }



    render() {

        const form = !this.state.formSwitcher ? <Login /> : <Register />

        return (

            <div className="mainBlock">
                {form}
                {!this.state.formSwitcher ?
                    (<span className="underLine">
                        Not Registered? <button
                            onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'Register' : 'Login')}
                            className="linkBtn">Create an Account</button>
                    </span>) : (
                    <span className="underLine">
                        Have an account? <button
                            onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'Register' : 'Login')}
                            className="linkBtn">Sign in Here</button>
                    </span>
                    )
                }
            </div>
        )
    }
}

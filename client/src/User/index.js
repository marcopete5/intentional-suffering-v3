import React, { Component } from 'react';
import {withUser} from '../Providers/UserProvider';
import {withOptions} from '../Providers/OptionProvider';
import {withRouter, Link} from 'react-router-dom';

import logo from '../assets/icons/emoji-sad.png'
import './User.css'

class UserForm extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: '',
            errorMessage: ''
        }
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleUser(this.state, this.props.type).then(()=> {
            if(this.props.type === 'login') this.props.getHistory()
            this.props.history.push('/')
        }).catch(err => {
            this.setState({errorMessage: err.response.data.message})
        })
    }

    render() {
        return (
            <div id='homeLogin'>

                <img id='mainLogo' src={logo} alt=""/>

                <ul id='loginButtons'>
                    <li><Link to='/login' >Login</Link></li>
                    <li><Link to='/signup' >Sign Up</Link></li>
                </ul>

                <form id='signInPage' onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    <button>{this.props.type === 'login' ? 'Login' : 'Sign Up'}</button>
                </form>

                {
                    this.state.errorMessage &&
                    <p style={{color: 'red', marginTop: 60, textAlign: 'center'}}>{this.state.errorMessage}</p>
                }
            </div>
        );
    }
}

export default withRouter(withOptions(withUser(UserForm)));
import React, { Component } from 'react';
import axios from 'axios';

const {Provider, Consumer} = React.createContext() 

class UserProvider extends Component {
    constructor(){
        super()

        this.state = {
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem('token') || ''
        }
    }

    handleUser = (userInfo, action) => {
        return axios.post(`/auth/${action}`, userInfo).then(response => {
            let {user,token} = response.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            this.setState({
                user,
                token
            })
            return response
        })

    }

    logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        this.setState({
            user: {},
            token: ''
        })
    }

    render() {
        return <Provider value={{
            ...this.state,
            handleUser: this.handleUser,
            logout: this.logout
                }}>
                    {this.props.children}
               </Provider>
    }
}

export default UserProvider;

export const withUser = (C) => props => <Consumer>
                                            {value => <C {...props}{...value}/>}
                                        </Consumer>
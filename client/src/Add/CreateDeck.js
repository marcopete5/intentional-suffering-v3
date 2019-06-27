import React, { Component } from 'react';
import {withOptions} from '../Providers/OptionProvider'
import {withUser} from '../Providers/UserProvider'

import './Add.css'

class CreateDeck extends Component {
    constructor(){
        super()

        this.state = {
            value: 'Health',
            deckName: '',
        }
    }

    handleChange = e => {
        let {name, value, type} = e.target;
        name = type === 'select-one' ? 'value' : name
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()

        const newDeck = {
            deckName: this.state.deckName,
            category: this.state.value
        }
        
        this.props.createDeck(newDeck).then(() => {
            this.props.history.push('/category')
        })

    }

    render() {
        return (
            <form id='createDeckForm' onSubmit={this.handleSubmit}> 
                <select id="categoryDropDown" value={this.state.challenge} onChange={this.handleChange}>
                    <option value="Health">Health</option>
                    <option value="Mental">Mental</option>
                    <option value="Emotional">Emotional</option>
                    <option value="Social">Social</option>
                </select>
                <input type="text" name="deckName" onChange={this.handleChange} placeholder="Deck Name" value={this.state.deckName} />
                <button>Submit</button>
            </form>
        );
    }
}

export default withUser(withOptions(CreateDeck));
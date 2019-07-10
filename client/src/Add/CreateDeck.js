import React, { Component } from 'react';
import {withOptions} from '../Providers/OptionProvider'
import {withUser} from '../Providers/UserProvider'

import './Add.css'

class CreateDeck extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            category: '',
            category2: '',
            decks: '',
            deckName: '',
            challenge: ''
        }
    }

    handleChange = (e, drop) => {
        let {name, value, type} = e.target;
        this.setState({
            [name]: value
        }, () => {
            if(drop){
                this.props.getDecks(this.state.category2).then(()=> {
                    this.setState({decks: this.props.decks[0].deckName})
                })
            }
        })
        
        
    }

    handleSubmit = (e, type) => {
        e.preventDefault()
        
        if(type === 'deck'){
            const newDeck = {
                category: this.state.category,
                deckName: this.state.deckName
            }
            this.props.createDeck(newDeck).then(() => {
                this.props.history.push('/category')
            })
        }else {
            const deck = this.props.decks.find(deck => deck.deckName === this.state.decks)
            const newChallenge = {
                challenge: this.state.challenge,
                timeToComplete: this.state.timeToComplete,
                deck: deck._id
            }
            this.props.addOption(newChallenge)
        }
        
    }


    render() {
        const mappedDecks = this.props.decks.map(deck => <option value={deck.deckName}>{deck.deckName}</option>)
        return (
            <>
                <form id='createDeckForm' onSubmit={(e) => this.handleSubmit(e, 'deck')}> 
                    <select id="categoryDropDown" name="category" value={this.state.category} onChange={this.handleChange}>
                        <option value="select">Select A Category</option>
                        <option value="Health">Health</option>
                        <option value="Mental">Mental</option>
                        <option value="Emotional">Emotional</option>
                        <option value="Social">Social</option>
                    </select>
                    <input type="text" name="deckName" onChange={this.handleChange} placeholder="Deck Name" value={this.state.deckName} />
                    <button>Submit</button>
                </form>

                <form id='createDeckForm' onSubmit={this.handleSubmit}> 
                    <select id="categoryDropDown" name="category2" value={this.state.category2} onChange={(e) => this.handleChange(e, 'deckChooser')}>
                        <option value="select">Select A Category</option>
                        <option value="Health">Health</option>
                        <option value="Mental">Mental</option>
                        <option value="Emotional">Emotional</option>
                        <option value="Social">Social</option>
                    </select>
                    <select id="categoryDropDown" name="decks" value={this.state.decks} onChange={this.handleChange}>
                        {mappedDecks}
                    </select>
                    <input type="text" name="challenge" onChange={this.handleChange} placeholder="Challenge" value={this.state.challenge} />
                    <button>Submit</button>
                </form>
            </>
        );
    }
}

export default withUser(withOptions(CreateDeck));
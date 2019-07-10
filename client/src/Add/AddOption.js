import React, { Component } from 'react';
import {withOptions} from '../Providers/OptionProvider';

class AddOption extends Component {
    constructor(props){
        super(props)
        this.state = {
            challenge: '',
            timeToComplete: '',
            deckId: props.selectedDeck[0].deck || '',
            lengthOfTime: 'min'
        }
    }

    handleChange = e => {
        let {name, value} = e.target;
        this.setState({
            [name]: value
        })  
    }

    handleSubmit = e => {
        e.preventDefault()

        const newChallenge = {
            challenge: this.state.challenge,
            timeToComplete: this.state.timeToComplete + " " + this.state.lengthOfTime,
            deck: this.state.deckId
        }
        this.props.addOption(newChallenge)
    
    }

    render() {
        console.log(this.state)
        return (
            <div style={{height: '100vh'}}>
            <img className='backArrow' onClick={() => this.props.history.push(window.previousLocation.pathname)} src="https://www.pantonehotel.com/wp-content/themes/pantone/images/arrow-left.svg" alt=""/>

            <form className='optionForm' onSubmit={this.handleSubmit}> 
                <div id='timeCompleteForm'>
                    <p style={{gridColumn: '1/5', textAlign: 'center'}}>Challenge Length</p>
                    <input type="number" id='timeNum' name="timeToComplete" onChange={this.handleChange}  value={this.state.timeToComplete} />
                    <select id="lengthDropDown" name="lengthOfTime" value={this.state.lengthOfTime} onChange={this.handleChange}>
                        <option value="min">min</option>
                        <option value="hours">hours</option>
                        <option value="days">days</option>
                        <option value="weeks">weeks</option>
                    </select>
                </div>
                <input type="text" name="challenge" onChange={this.handleChange} placeholder="Challenge Description" value={this.state.challenge} />
                <button id='challengeSubmit'>Submit</button>
            </form>
            </div>
        );
    }
}

export default withOptions(AddOption);
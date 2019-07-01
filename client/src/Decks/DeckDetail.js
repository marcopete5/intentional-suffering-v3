import React, { Component } from 'react';
import {withOptions} from '../Providers/OptionProvider';

class DeckDetail extends Component {
    constructor(){
        super()

        this.state = {
            challenge: '',
            timeToComplete: '',
            deckId: ''
        }
    }

    componentDidMount(){
        const {_id} = this.props.match.params
        this.props.getDeckOptions(_id)
        this.setState({deckId: _id})
    }


    handleChange = e => {
        let {name, value, type} = e.target;
        this.setState({
            [name]: value
        })  
    }

    handleSubmit = (e, type) => {
        e.preventDefault()

        const newChallenge = {
            challenge: this.state.challenge,
            timeToComplete: this.state.timeToComplete,
            deck: this.state.deckId
        }
        this.props.addOption(newChallenge)
    
    }

    render() {
        const mappedOptions = this.props.selectedDeck.map(option => <div className='categoryCard optionCard'>
                                                                        <h4>4 hours</h4>
                                                                        <h3>{option.challenge}</h3>
                                                                    </div>)
        return (
            <div style={{height: '100vh'}}>
                <h3 style={{margin: 0, padding: 20}}>Challenges</h3>
                <div className='categoryCard' style={{gridTemplateColumns: '60px 1fr'}}>
                    <img id='addImg' src="http://www.iconninja.com/files/888/594/377/new-plus-add-create-icon.svg" alt=""/>
                    <h3>Add a Challenge</h3>
                </div>
                {mappedOptions}
                <form className='categoryCard' onSubmit={this.handleSubmit}> 
                    <input type="text" name="timeToComplete" onChange={this.handleChange} placeholder="Time To Complete" value={this.state.timeToComplete} />
                    <input type="text" name="challenge" onChange={this.handleChange} placeholder="Challenge" value={this.state.challenge} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default withOptions(DeckDetail);





    





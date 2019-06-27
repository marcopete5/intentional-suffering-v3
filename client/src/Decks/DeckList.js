import React, { Component } from 'react';
import {withOptions} from '../Providers/OptionProvider'

class DeckList extends Component {

    componentDidMount(){
        const {categoryName} = this.props.match.params
        this.props.getDecks(categoryName)
    }

    render() {
        const mappedDecks = this.props.decks.map(deck => <div className='deckCard'>
                                                            <h1>{deck.deckName}</h1>
                                                         </div>)
        return (
            <div >
                {mappedDecks}
            </div>
        );
    }
}

export default withOptions(DeckList);



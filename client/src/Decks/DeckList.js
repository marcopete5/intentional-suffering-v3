import React, { Component } from 'react';
import {withOptions} from '../Providers/OptionProvider'
import {Link} from 'react-router-dom'

class DeckList extends Component {

    componentDidMount(){
        const {categoryName} = this.props.match.params
        this.props.getDecks(categoryName)
    }

    render() {
        const mappedDecks = this.props.decks.map(deck => <Link onClick={() => window.previousLocation = this.props.location} to={`/category/${this.props.match.params.categoryName}/${deck._id}`} className="deckCard" style={{textDecoration: 'none'}}>
                                                            <p className="cardTitle">{deck.deckName}</p>
                                                         </Link>)
        return (
            <div style={{height: '100vh'}}>
                <img className='backArrow' onClick={() => this.props.history.push('/category')} src="https://www.pantonehotel.com/wp-content/themes/pantone/images/arrow-left.svg" alt=""/>
                <h1 style={{margin: '10px 0px 20px 20px'}}>Choose a Deck</h1>
                <Link to='/addDeck' className="deckCard" style={{marginBottom: 40, textDecoration: 'none', color: 'blue'}}>
                    <p className="cardTitle">Create New</p>
                </Link>
                {mappedDecks}
            </div>
        );
    }
}

export default withOptions(DeckList);



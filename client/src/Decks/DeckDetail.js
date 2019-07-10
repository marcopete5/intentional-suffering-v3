import React, { Component } from 'react';
import {withOptions} from '../Providers/OptionProvider';

class DeckDetail extends Component {
    
    componentDidMount(){
        const {_id} = this.props.match.params
        this.props.getDeckOptions(_id)
    }

    render() {
        
        const mappedOptions = this.props.selectedDeck.map(option => <div className='categoryCard optionCard'>
                                                                        <h4>4 hours</h4>
                                                                        <h3>{option.challenge}</h3>
                                                                    </div>)
        return (
            <div style={{height: '100vh'}}>
                <img className='backArrow' onClick={() => this.props.history.push(window.previousLocation.pathname)} src="https://www.pantonehotel.com/wp-content/themes/pantone/images/arrow-left.svg" alt=""/>

                <h3 style={{margin: 0, padding: 20}}>Challenges</h3>
                <div className='categoryCard' style={{gridTemplateColumns: '60px 1fr'}} onClick={() => {window.previousLocation = this.props.location
                                                                                                        this.props.history.push('/addOption')}}>
                    <img id='addImg' src="http://www.iconninja.com/files/888/594/377/new-plus-add-create-icon.svg" alt=""/>
                    <h3>Add a Challenge</h3>
                </div>
                {mappedOptions}
            </div>
        );
    }
}

export default withOptions(DeckDetail);





    





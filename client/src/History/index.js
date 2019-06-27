import React, { Component } from 'react';
import {withOptions} from '../Providers/OptionProvider'

//Components
import HistoryItem from './HistoryItem'

//assets
import stretch from '../assets/pics/stretch.png'
import './History.css'

class History extends Component {
    constructor(props){
        super(props)

        this.state = {
            filteredChallenges: props.optionHistory,
            highlight: false
        }
    }

    componentDidMount(){
        this.props.getHistory()
    }

    filterBy = (timeFrame) => {
        const date = new Date()
        let time = date.getTime()
        switch(timeFrame){
            case 'week':
                let week = 604800000
                this.setState(({filteredChallenges}) => ({
                    filteredChallenges: this.props.optionHistory.filter(challenge => challenge.datesCompleted[0] + week > time)
                }))
                break;
            case 'month':
                let month = 2592000000
                this.setState(({filteredChallenges}) => ({
                    filteredChallenges: this.props.optionHistory.filter(challenge => challenge.datesCompleted[0] + month > time)
                }))
                break;
            case 'alltime':
                this.setState(({filteredChallenges}) => ({
                    filteredChallenges: this.props.optionHistory
                }))
                break;
            default:
                break;
        }
        
    }

    render() {
        const mappedHistory = this.state.filteredChallenges.map(option => <HistoryItem option={option}  />)
        return (
            <div id="history-container" style={{backgroundImage: `url(${stretch})`}}>
                <ul className="filterHistory">
                    <li onClick={() => this.filterBy('week')} >Week</li>
                    <li onClick={() => this.filterBy('month')} >Month</li>
                    <li onClick={() => this.filterBy('alltime')} >All Time</li>
                </ul>
                <div id="history-box">
                    <ul className="listedHistory">
                        {mappedHistory}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withOptions(History);
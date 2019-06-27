import React from 'react';

const HistoryItem = (props) => {
    let {challenge} = props.option
    return (
        <li className='historyItem'>
            <p className='historyChallenge'>{challenge}</p>
            <p className='historyDate'>02/10/2018</p>
        </li>
    );
};

export default HistoryItem;
import React, { Component, createContext } from 'react';
import axios from 'axios'

const {Provider, Consumer} = createContext()
const optionAxios = axios.create();

optionAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

class OptionProvider extends Component {
    constructor(){
        super()

        this.state = {
            options: [],
            optionHistory: [],
            decks: [{deckName: 'Decks'}],
            on: false,
            selectedDeck: [{deck:''}]
        }
    }

    toggle = () => {
        this.setState(({on})=> ({on: !on}))
    }

    createDeck = deck => {
        return optionAxios.post('/api/deck', deck).then(res => {
            this.setState(({decks})=>({decks: [...decks, res.data]}))
        })
    }

    getDecks = category => {
        return optionAxios.get(`/api/deck?category=${category}`).then(res => {
            this.setState({decks: res.data})
        })
    }

    getOneDeck = (id) => {
        optionAxios.get(`/api/deck/${id}`).then(res => {
            console.log(res.data)
        })
    }

    getDeckOptions = (deckId) => {
        optionAxios.get(`/api/options?deck=${deckId}`).then(res => {
            this.setState({selectedDeck: res.data})
        })
    }

    getAllOptions = () => {
        optionAxios.get('/api/options').then((response) => {
            this.setState({options: response.data})
        })
    }

    addOption = (newOption) => {
        optionAxios.post('/api/options', newOption).then(response => {
            this.setState(({options}) => ({options: [...options, response.data]}))
        })
    }

    getHistory = () => {
        optionAxios.get('/api/history').then((response) => {
            this.setState({optionHistory: response.data})
        })
    }

    addToHistory = (option) => {
        const date = new Date()
        option.startDate = date.getTime()
        // option.datesCompleted.unshift(date.getTime())
        optionAxios.post('/api/history', option).then((response)=> {
            this.setState(({optionHistory}) => ({optionHistory: [...optionHistory, response.data]}))
        })
    }

    clearHistory = () => {
        this.setState({optionHistory: []})
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                toggle: this.toggle,
                addToHistory: this.addToHistory,
                getAllOptions: this.getAllOptions,
                getHistory: this.getHistory,
                addOption: this.addOption,
                clearHistory: this.clearHistory,
                createDeck: this.createDeck,
                getDecks: this.getDecks,
                getOneDeck: this.getOneDeck,
                getDeckOptions: this.getDeckOptions,
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default OptionProvider;

export const withOptions = (C) => props => <Consumer>
                                                {value => <C {...props}{...value}/>}
                                            </Consumer>
import React, { Component } from 'react';
import {withOptions} from '../Providers/OptionProvider';
import Nav from '../Nav'

//assets
import wheel from '../assets/icons/wheel.png'
import './Home.css';


class Home extends Component {
    constructor(){
        super()

        this.state = {
            deg: 0,
            challenge: 'Spin the wheel',
            currentOption: {},
            hasChallenge: false,
            spinning: false
        }
    }

    componentDidMount(){
        this.props.getAllOptions()
    }

    spinWheel = () => {
        this.setState(({spinning}) => ({spinning: !spinning}), ()=> {
            if(this.state.hasChallenge || !this.state.spinning){
                alert('You must complete your current challenge in order to spin the wheel again')
            }else {
                this.setState(({deg}) => ({deg: deg + Math.floor(Math.random()* 360)+720}), 
                ()=>{
                    setTimeout(()=>{
                        this.setChallenge()
                    },3010)
                }
            )
            }
        })
    }

    setChallenge = () => {
        let current = this.props.options[Math.floor(Math.random()*this.props.options.length)]
        this.setState({
            challenge: current.challenge,
            currentOption: current,
            hasChallenge: true
        }, ()=> {
            this.props.addToHistory(this.state.currentOption)
        })
    }


    render() {
        return (
            <>
            <Nav />
            <div id='spinCont' >
                <div id='spinLabel' onClick={this.spinWheel}>{this.state.challenge}</div>
                <img alt='wheel' src={wheel} id ="wheel" style={{ transform: `rotate(${this.state.deg}deg)` }}/>
                {/* <img alt='green circle' src={green} id="green"/> */}
                <div id="spinBtn" onClick={this.spinWheel}><p>Spin</p></div>
            </div>
            </>
        );
    }
}

export default withOptions(Home);



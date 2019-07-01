import React from 'react';
import {withOptions} from '../Providers/OptionProvider';
import {withUser} from '../Providers/UserProvider';
import {Link} from 'react-router-dom';


//assets
import './Nav.css'
import drop from '../assets/icons/drop-icon2.png'

const Nav = (props) => {
    return (
        <div className='nav-container'>
            {/* <div onClick={props.on ? props.toggle : () => {}}>
                <Link to='/'><img src={logo} alt="" id="logo" /></Link>
            </div> */}
            <div id='title'><Link to='/' style={{textDecoration: "none", color: 'black'}}>Wheel of Suck</Link></div>

            <img onClick={props.toggle} src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_filter_list_48px-512.png' alt="" id="drop"  />

            <ul onClick={props.toggle} id='nav-items' style={{display: props.on ? 'flex' : 'none'}}>
              
                <li id='addButton'><Link to='/add' ><img src="http://icons.iconarchive.com/icons/iconsmind/outline/256/Add-icon.png" alt=""/></Link></li>
                <li id='checkHistory'><Link to='/history' ><img src="https://static.thenounproject.com/png/84467-200.png" alt=""/></Link></li>
                <li id='challengeDecks'><Link to='/category' ><img src="https://static.thenounproject.com/png/20461-200.png" alt=""/></Link></li>
                <li id='logout'><a href='/#' onClick={() => {props.logout(); props.clearHistory()}}><img src="http://cdn.onlinewebfonts.com/svg/download_514188.png" /> </a></li>
                  
            </ul>
        </div>

    );
};

export default withUser(withOptions(Nav));
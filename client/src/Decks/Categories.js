import React from 'react';
import emotion from '../assets/icons/emotional.png'
import {Link} from 'react-router-dom'

import './Category.css'

const Categories = (props) => {
    const categories = [
        {
            name: 'Health',
            logo: 'http://pngimages.net/sites/default/files/bike-logo-png-image-17335.png'
        },{
            name: 'Mental',
            logo: 'https://static.thenounproject.com/png/4059-200.png'
        },{
            name: 'Social',
            logo: 'https://alpha-fmallorca-media.s3.amazonaws.com/uploads/habitantes.png'
        },{
            name: 'Emotion',
            logo: emotion
        }]


    const mappedCategories = categories.map(category => <Link className='categoryCard' to={`/category/${category.name}`}>
                                                            <div className='categoryLogo'>
                                                                <img src={category.logo}/>
                                                            </div>
                                                            <h3>{category.name}</h3>
                                                            <div className='categoryEdit'>edit</div>
                                                        </Link>)
    return (
        <div style={{height: '100vh'}}>
            <div className="spanButtons">
            <span id='spanX' onClick={() => props.history.push('/')}>x</span> 
            <span id='spanAdd'>+</span>
            </div>
            <h1 style={{marginLeft: 20}}>Categories</h1>
            {mappedCategories}
        </div>
    );
};

export default Categories;
import React from 'react';
import emotion from '../assets/icons/emotional.png'
import {Link} from 'react-router-dom'

import './Category.css'

const Categories = () => {
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

    const styles = {
        boxShadow: '2px 3px 5px black',
        width: '100%',
        height: '140px',
        backgroundSize: '80%',
        backgroundRepeat: 'no-repeat',
        border: '1px solid black',
        borderRadius: '70px',
        backgroundPosition: '14px 15px',
    }

    const mappedCategories = categories.map(category => <div className='categoryCard'>
                                                            <Link to={`/category/${category.name}`}><div style={{...styles, backgroundImage: `url(${category.logo})`}} ></div></Link>
                                                            <h3>{category.name}</h3>
                                                        </div>)
    return (
        <div style={{marginTop: 40}}>
            {mappedCategories}
        </div>
    );
};

export default Categories;
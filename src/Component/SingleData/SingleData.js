import React from 'react';
import './SingleData.css';

const SingleData = (props) => {
    const { img, name, description, duration } = props.allData;
    return (

        <div className='single-activity-container'>
            <div className='image-div'>
                <img src={img} alt="..." ></img>
            </div>
            <div>
                <h5>{name}</h5>
                <p>{description.slice(0,150)}...</p>
                <p><small className="text-muted">{duration}</small></p>
            </div>
        </div>
    );
};

export default SingleData;
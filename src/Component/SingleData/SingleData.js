import React from 'react';
import './SingleData.css';

const SingleData = (props) => {
    const { img, name, description, duration, age } = props.allData;
    return (

        <div className='single-activity-container'>
            <div className='image-div'>
                <img src={img} alt="..." ></img>
            </div>
            <div className='activity-info'>
                <h5>{name}</h5>
                <p>Age : {age}</p>
                <p>{description.slice(0,130)}...</p>
                <p><small className="text-muted">{duration}</small></p>
                <button className='btn'>Add to List</button>
            </div>
        </div>
    );
};

export default SingleData;
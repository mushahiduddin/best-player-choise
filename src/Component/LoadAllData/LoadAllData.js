import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import './LoadAllData.css';

const LoadAllData = ({props}) => {
    
    return (
        <div>
            <h1>Make yourself fit</h1>
            <div className='activity-container'>
            {
                props.map(singleData => <SingleData 
                    key={singleData.id}
                    allData={singleData}>
                    </SingleData>)
            }
            </div>
        </div>
    );
};

export default LoadAllData;
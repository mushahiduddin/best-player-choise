import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import SingleData from '../SingleData/SingleData';
import './LoadAllData.css';

const LoadAllData = ({ props }) => {

    return (
        <div className='body-container'>
            <div className='main-container'>
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
            <div className='side-menu'>
                <SideBar></SideBar>
            </div>
        </div>

    );
};

export default LoadAllData;
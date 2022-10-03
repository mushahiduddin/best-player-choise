import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import SideBar from '../SideBar/SideBar';
import './LoadAllData.css';
import '../SideBar/SideBar.css'

const LoadAllData = () => {

    const [allData, setAllData] = useState([]);
    const [exerciseDetails, setExerciseTime] = useState([]);

    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    const handleAddToList = (singleData) => {

        const updateExerciseDetail = [...exerciseDetails, singleData];
        setExerciseTime(updateExerciseDetail);
    }

    return (
        <div className='body-container'>
            <div className='main-container'>
                <h1>Rudder Gym Center</h1>
                <div className='activity-container'>
                    {
                        allData.map(singleData => <SingleData
                            key={singleData.id}
                            allData={singleData}
                            handleAddToList={handleAddToList}>
                        </SingleData>)
                    }
                </div>
            </div>
            <div>
                <SideBar exerciseDetails={exerciseDetails}></SideBar>
            </div>
        </div>

    );
};

export default LoadAllData;
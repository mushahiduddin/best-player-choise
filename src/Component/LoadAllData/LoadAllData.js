import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import SingleData from '../SingleData/SingleData';
import './LoadAllData.css';

const LoadAllData = () => {

    const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch(`data.json`)
      .then(res => res.json())
      .then(data => setAllData(data))
  }, [])

    const handleAddToList = (allData) => {
        console.log(allData);
    }

    return (
        <div className='body-container'>
            <div className='main-container'>
                <h1>Make yourself fit</h1>
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
            <div className='side-menu'>
                <SideBar></SideBar>
            </div>
        </div>

    );
};

export default LoadAllData;
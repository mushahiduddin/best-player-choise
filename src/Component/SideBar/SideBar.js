import React, { useState } from 'react';
import './SideBar.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideBar = ({exerciseDetails}) => {

    let [breakTime, setBreakTime] = useState(0);

    let totalduration = 0;

    for(const exerciseDetail of exerciseDetails){
        totalduration += exerciseDetail.duration;
    }

    const showToastMessage = () => {
        toast.success('Wow, Congrats You are done !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const handleBreakTime = e =>{
        breakTime = e;
        localStorage.setItem('value', e);
        setBreakTime(breakTime);

    }

    return (
        <div className='side-menu'>
            <div className='self-info'>
                <div>
                    <img src="https://scontent.fdac141-1.fna.fbcdn.net/v/t39.30808-6/280516315_1920014341507062_8693529829755311648_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=swVY_v8MrLMAX9Rvc_Q&_nc_ht=scontent.fdac141-1.fna&oh=00_AT9X33n-Qjb3ZkjzcHPS64Erq0Jj8YG6RcG_zmX1LRlWwA&oe=633BF9A3" alt="" />
                </div>
                <div>
                    <h3>Moshahid Uddin Ahmed</h3>
                    <p>Email: moshahiduddin@gmail.com</p>
                </div>
            </div>
            <div className='self-body-structure-info'>
                <div>
                    <h2>Height</h2>
                    <p>6.75 inch</p>
                </div>
                <div>
                    <h2>Weight</h2>
                    <p>77 kg</p>
                </div>
                <div>
                    <h2>Age</h2>
                    <p>24</p>
                </div>
            </div>
            <h2>Add a Break</h2>
            <div className='break-list'>
                <ul>
                    <li onClick={()=>handleBreakTime('05 min')}>05m</li>
                    <li onClick={()=>handleBreakTime('10 min')}>10m</li>
                    <li onClick={()=>handleBreakTime('12 min')}>12m</li>
                    <li onClick={()=>handleBreakTime('15 min')}>15m</li>
                </ul>
            </div>
            <h2>Exercise Details</h2>
            <p className='ex-bk-time'>Exercise Time: {totalduration} min</p>
            <p className='ex-bk-time'>Break Time: {breakTime}</p>
            <div>
            </div>
            <button className='btn' onClick={showToastMessage}>Activity Completed</button>
            <ToastContainer />
        </div >
    );
};

export default SideBar;
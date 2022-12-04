import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import image from '../../../src/profile.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Profile.css'

const Profile = ({times}) => {
    const [breakTime, setBreakTime] = useState(0)
    useEffect(()=>{
        const storedData = localStorage.getItem('times')
        setBreakTime(storedData);
    },[])
    const notify = () => toast("Congratulations!! Activity Completed");

    let total = 0;
    for(const product of times){
        total = total + parseFloat(product.time);
    }

    const handleBreakTime = (breakTime) => {
        setBreakTime(breakTime)
        localStorage.setItem('times', breakTime)
    }
    


    return (
        <div className='profile-container'>
            <div className='d-flex'>
                <div>
                    <img className='w-50 rounded-5 ms-5' src={image} alt=''/>
                </div>
                <div>
                    <h4>Nur Mohammad Kawser</h4>
                    <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                    <small> Dhaka, Web Developer</small>
                </div>
            </div>


            <div className='weight-info mt-4 p-2 d-flex justify-content-around'>
                <div>
                    <p className='fs-3 fw-bold'>66<sub>kg</sub></p>
                    <p className='fs-5 fw-semibold'>Weight</p>
                </div>
                <div>
                    <p className='fs-3 fw-bold'>6.5</p>
                    <p className='fs-5 fw-semibold'>Height</p>
                </div>
                <div>
                    <p className='fs-3 fw-bold'>25<sub>yrs</sub></p>
                    <p className='fs-5 fw-semibold'>Age</p>
                </div>
            </div>

            <div>
                <h4 className='mt-5'>Add A Break</h4>
                <div className='d-flex break-btn-container'>
                    <button className='break-btn' onClick={() => handleBreakTime(10)}>10m</button>
                    <button className='break-btn' onClick={() => handleBreakTime(20)}>20m</button>
                    <button className='break-btn' onClick={() => handleBreakTime(30)}>30m</button>
                    <button className='break-btn' onClick={() => handleBreakTime(40)}>40m</button>
                    <button className='break-btn' onClick={() => handleBreakTime(50)}>50m</button>
                </div>
            </div>

            <div>
                <h3 className='mt-4'>Exercise Details</h3>
                <p className='fs-5 exercise-details'>Exercise Time <span className='float-end'>{total}  Minutes</span></p>
                <p className='fs-5 exercise-details'>Break Time <span className='float-end'>{breakTime} Minutes</span> </p>
                <button className='btn' onClick={notify}>Acitvity Completed</button>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Profile;
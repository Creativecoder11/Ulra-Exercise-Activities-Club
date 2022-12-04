import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Profile from '../Profile/Profile';
import './Body.css'

const Body = () => {
    const [products, setProducts] = useState([]);
    const [times, setTimes] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);


    const addToList = (products) => {
        const newAddToList = [...times, products]
        setTimes(newAddToList);
    }

    
    return (
        <div>
            <div className='body-container d-md-flex justify-content-around'>
                <div className='activities'>
                    <div className='mt-1'>
                        <h1 className='text-center'>Exercise Activities Club</h1>
                    </div>
                    <h4 className='text-center'>Select Best Exercise</h4>
                    <div className='product-container'>
                    {
                        products.map(product => <Products 
                            key={product.id} 
                            product={product} 
                            addToList={addToList} 
                            ></Products>)
                    }
                    </div>
                </div> 

                <div className='profile text-white '>
                    <Profile times={times}></Profile>
                </div>
            </div>

            <div className='ask-question '>
                <h1 className='text-white text-center pt-5'>Frequently Asked Questions </h1>
                <div className='text-white ps-5 pe-5'>
                <h3 className='text-primary'>How react works?</h3>
                    <p>
                        React is a declarative, efficient, and flexible JavaScript library for
                        building user interfaces. 'V' denotes the view in MVC. ReactJS is an
                        open-source, component-based front end library responsible only for the
                        view layer of the application. It is maintained by Facebook
                    </p>
                    <h3 className='text-primary'>Props vs State!</h3>
                    <p>
                        Simply put, State is the local state of the component which cannot be
                        accessed and modified outside of the component. It's equivalent to local
                        variables in a function. Props, on the other hand, make components
                        reusable by giving components the ability to receive data from their
                        parent component in the form of props.
                    </p>
                    <h3 className='text-primary'>Why is useEffect used?</h3>
                    <p className='pb-5 '>
                        The motivation behind the introduction of useEffect Hook is to eliminate
                        the side-effects of using class-based components. For example, tasks
                        like updating the DOM, fetching data from API end-points, setting up
                        subscriptions or timers, etc can be lead to unwarranted
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Body;
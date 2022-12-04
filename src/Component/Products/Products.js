import React from 'react';
import './Products.css'

const Products = (props) => {
    const { product, addToList} = props
    const {picture, name, age, about, time} = product;
    // console.log(props.product);

    return (
        <div className='container'>
            <div class="card-container">
                <img src={picture} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title mt-2">{name}</h5>
                    <p class="card-text mt-2">{about.slice(0,80)}</p>
                    <p>For Age: {age}</p>
                    <p>Time Required: {time}</p>
                    <button onClick={() => addToList(product)} className="btn button">Add To List</button>
                </div>
            </div>
            
        </div>
    );
};

export default Products;

import './product.css';
// import {addCart} from './localstorage.js'
import { useState ,useEffect} from 'react';
const Bottle = ({singleBottle, handleClick}) => {
    



    return (
        <>

        
        
<div className='card' key={singleBottle.id}>
                    <img src={singleBottle.img} alt="" />
                    <h4>{singleBottle.name}</h4>
                    <h3>{singleBottle.price}</h3>
                    <button onClick={() => handleClick(singleBottle)}>Add to Cart</button>
                </div>
         
        </>
    )
}

export default Bottle;
import "./product.css";
import Bottle from './Bottle';
import { use, useEffect, useState } from "react";
import {getLocalStorage, addCart} from './localstorage.js'



// console.log(data);




const Bottles = ({fetchBottles}) => {
  // const selectedData = getLocalStorage();
  const data = use(fetchBottles);
  const getStoredCart = getLocalStorage();
  const storeCart = []
  getStoredCart.forEach(cart => 
    {
      data.find(bottle => {
        if(bottle.id === cart){
          storeCart.push(bottle);
          
        }
      })
    }
    
  );
  const [cartData,setCartData] = useState(storeCart) 
  

   const handleClick = (singleBottle) => { 
    addCart(singleBottle.id);

   
   const newCart = [...cartData , singleBottle];

   setCartData(newCart);
  }


  


    
  
   
    const handleDelete = (id) => {
      
      const removed = cartData.filter(sin => sin.id !== id)

      setCartData(removed)

    }

    
   return (
    <>
   <h3>Total Product : {data.length}</h3> 

   <div>
     <h4>cart : {cartData.length}</h4>
     <div style={{display:"flex",flexWrap: 'wrap'}} >
       {
        cartData.map((singleCart,id) => <div key={id}>
          <img style={{width : '100px' ,margin: "5px"}} src={singleCart.img}/>
          <button onClick={()=> handleDelete(singleCart.id)}>X</button>
          </div>)
       }
     </div>
   </div>
   <div className="card-container">
   {
            data.map(singleBottle => <Bottle key={singleBottle.id} singleBottle={singleBottle} handleClick={handleClick}></Bottle>)
          }
   </div>
    </>
   )
}


export default Bottles;
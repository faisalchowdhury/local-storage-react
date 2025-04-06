import "./product.css";
import Bottle from './Bottle';
import { use, useEffect, useState } from "react";
import {getLocalStorage} from './localstorage.js'



// console.log(data);




const Bottles = ({fetchBottles}) => {
  
  const [cartData,setCartData] = useState([]) 
   const data = use(fetchBottles);
  
   
     

     
    useEffect(()=> {
     
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
    setCartData(storeCart);
     
    }
     , [])
  
  

    
   return (
    <>
   <h3>Total Product : {data.length}</h3> 

   <div>
     <h4>cart : {cartData.length}</h4>
     <div>
       
     </div>
   </div>
   <div className="card-container">
   {
            data.map(singleBottle => <Bottle key={singleBottle.id} singleBottle={singleBottle}></Bottle>)
          }
   </div>
    </>
   )
}


export default Bottles;
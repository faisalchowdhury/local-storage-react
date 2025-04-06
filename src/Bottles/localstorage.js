const addCart = (id) => {
  const oldCartData =  getLocalStorage();
  oldCartData.push(id);
  
  const stringCart = JSON.stringify(oldCartData);
  console.log(stringCart)
  localStorage.setItem('cart' , stringCart);
}

const getLocalStorage = () => {

  const getCartData = localStorage.getItem('cart')

  if (getCartData){
   const cart = JSON.parse(getCartData);
   
   return cart;
  }else {
   const cart = [];
   
   return cart;
  }

  
}





export {addCart ,getLocalStorage}
function Cart(localStoragekey){
  const cart={
    cartItems:undefined,
 
    //we can write function this way or the way below this function
    loadFromStorage: function(){
     this.cartItems=JSON.parse(localStorage.getItem(localStoragekey));
     if(!this.cartItems){
       this.cartItems=[{
         productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
         quantity:2,
         deliveryOptionId:'1'
       },{
         productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
         quantity:1,
         deliveryOptionId:'2'
       }];
     }
   },
    saveToStorage(){
     localStorage.setItem(localStoragekey,JSON.stringify(this.cartItems));
   },
 
   addToCart(productId){
     let matchingItem;
   
           this.cartItems.forEach((cartItem)=>{
             if(productId===cartItem.productId){
                 matchingItem=cartItem;
             }
           });
           if(matchingItem){
             matchingItem.quantity+=1;
           }else{
             this.cartItems.push({
               productId:productId,
               quantity:1,
               deliveryOptionId:'1'
              });
           }
           this.saveToStorage();
   
   },
 
   removeFromCart(productId){
     const newCart=[];
     this.cartItems.forEach((cartItem)=>{
       if(cartItem.productId!==productId){
         newCart.push(cartItem);
       }
     });
     this.cartItems=newCart;
     this.saveToStorage();
   },
 
   updateDeliveryOptions(productId,deliveryOptionId){
     let matchingItem;
   
     this.cartItems.forEach((cartItem)=>{
       if(productId===cartItem.productId){
           matchingItem=cartItem;
       }
     });
      matchingItem.deliveryOptionId=deliveryOptionId;
      this.saveToStorage();
   
    }
 };
 return cart;
}

const cart=Cart('cart-oop');
const businessCart=Cart('cart-business');



businessCart.loadFromStorage();
cart.loadFromStorage();

console.log(cart);
console.log(businessCart);






 
import React, { useState } from 'react'
import products from '../data/Products'
import Product from '../components/products/Product'
import Cart from '../components/cart/Cart';

const Home = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (productId) => {
        const productToAdd = products.find(product => product.id === productId);
        const existInCart = cartItems.find(product => product.id === productId);

        if(existInCart) {
            setCartItems(cartItems.map(item => item.id === productId ? {...item, quantity: item.quantity + 1} : item ));
        } else {
            setCartItems([...cartItems, {...productToAdd, quantity: 1}]);
        }
    }

    const removeFromCart = (productId) => {
        const existInCart = cartItems.find(item => item.id === productId);

        if(existInCart ){
            setCartItems(cartItems.map(item => item.id === productId && item.quantity !== 0 ? {...item, quantity: item.quantity - 1} : item ));
        } else
        setCartItems(cartItems.filter(item => item.range === 0 ? item.id !== productId : 'error' ));
    }



  return (
    <>
        <Product products={products} addToCart={addToCart}/>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
    </>
  )
}

export default Home
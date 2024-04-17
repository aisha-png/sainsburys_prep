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
            setCartItems(cartItems.map(item => item.id === productId ? {...item, quantity: item.quantity + 1} : item
            ));
        } else {
            setCartItems([...cartItems, {...productToAdd, quantity: 1}]);
        }
    }

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id === productId));
    }



  return (
    <>
        {products.map((product,index) =>  (
            <Product key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} addToCart={addToCart}/>
        ))}
        <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
    </>
  )
}

export default Home
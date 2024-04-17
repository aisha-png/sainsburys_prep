import React, { useState } from 'react'
import products from '../data/Products'
import Product from '../components/products/Product'
import Cart from '../components/cart/Cart';
import { Button, Modal } from 'react-bootstrap';

const Home = () => {
    const [cartItems, setCartItems] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            if(existInCart.quantity > 1){
                setCartItems(cartItems.map(item => item.id === productId && item.quantity !== 0 ? {...item, quantity: item.quantity - 1} : item ));
            } else {
                setCartItems(cartItems.filter(item => item.id !== productId));
            }
        }
    }



  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Cart
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Cart handleClose={handleClose} handleShow={handleShow} cartItems={cartItems} removeFromCart={removeFromCart}/>
        </Modal>
        <Product products={products} addToCart={addToCart}/>
    </>
  )
}

export default Home
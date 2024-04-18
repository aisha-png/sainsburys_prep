import React, { useState } from 'react'
import products from '../data/Products'
import Product from '../components/products/Product'
import Cart from '../components/cart/Cart';
import { Button, Dropdown, Modal } from 'react-bootstrap';

const Home = () => {
    const [cartItems, setCartItems] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const categories = [...new Set(products.flatMap(product => product.category.map(cat => cat.name)))];
    const filteredProducts = products.filter(product => selectedCategories.length === 0 || selectedCategories.includes(product.category));

    const handleCategoryChange = (category) => {
        setSelectedCategories(category);
        console.log("Selected category:", category);
      };

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

    const deleteFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    }



  return (
    <>
        <Dropdown onSelect={handleCategoryChange}>
            <Dropdown.Toggle variant="success">
                Select Categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {categories.map(category => (
                <Dropdown.Item key={category} eventKey={category}>
                    {category}
                </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>

        <Button variant="primary" onClick={handleShow}>
            Cart 
            {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </Button>
        <Modal show={show} onHide={handleClose} size="sm">
            <Cart handleClose={handleClose} handleShow={handleShow} cartItems={cartItems} removeFromCart={removeFromCart} addToCart={addToCart} deleteFromCart={deleteFromCart}/>
        </Modal>
        
        <Product filteredProducts={filteredProducts} products={products} addToCart={addToCart} removeFromCart={removeFromCart} />

        
    </>
  )
}

export default Home
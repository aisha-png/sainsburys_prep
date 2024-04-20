import React, { useState } from 'react'
import products from '../data/Products'
import Product from '../components/products/Product'
import { Button, Dropdown, Form } from 'react-bootstrap';
import './Home.css'
import Navigation from '../components/navigation/Navigation';


const Home = () => {
    const [cartItems, setCartItems] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    
    const categories = [...new Set(products.flatMap(product => 
        product.category.map(cat => 
            cat.name
        ))
    )];
    
    // const filteredProducts = products.filter(product =>
    //     selectedCategories.length === 0 ||
    //     product.category.some(cat => selectedCategories.includes(cat.name))
    // );

    const handleCategoryChange = (category) => {
        if (category === "All foods") {
          setSelectedCategories([]); 
        } else {
          setSelectedCategories(category);
        }
        console.log("Selected category:", category);
    };
      


    const addToCart = (productId) => {
        const productToAdd = products.find(product => product.id === productId);
        const existInCart = cartItems.find(product => product.id === productId);

        if(existInCart) {
            setCartItems(cartItems.map(item => 
                item.id === productId 
                ? {...item, quantity: item.quantity + 1} 
                : item 
            ));
        } else {
            setCartItems([...cartItems, {...productToAdd, quantity: 1}]);
        }
    }


  return (
    <>
    {/* <Navigation /> */}
        <div className='home-body'>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search products"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Dropdown onSelect={handleCategoryChange}>
                
                <Dropdown.Toggle variant="success">
                    {selectedCategories.length > 0 
                        ? selectedCategories 
                        : "Groceries"
                    }
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="All foods">All foods</Dropdown.Item>
                    {categories.map(category => (
                    <Dropdown.Item 
                        key={category} 
                        eventKey={category}
                    >
                        {category}
                    </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            
            </Dropdown>


            
        </div>
    </>
  )
}

export default Home
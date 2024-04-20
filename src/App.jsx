
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/navigation/Navigation';
import { useState } from 'react';
import products from './data/Products';
import Product from './components/products/Product';
import { Button, Dropdown, Form } from 'react-bootstrap';
import Footer from './components/footer/Footer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);

  const categories = [...new Set(products.flatMap(product => 
    product.category.map(cat => 
        cat.name
    ))
)];

const handleCategoryChange = (category) => {
  if (category === "All foods") {
    setSelectedCategories([]); 
  } else {
    setSelectedCategories(category);
  }
  console.log("Selected category:", category);
};


  const filteredProducts = products.filter(product =>
    selectedCategories.length === 0 ||
    product.category.some(cat => selectedCategories.includes(cat.name))
);

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

  const removeOneFromCart = (productId) => {
    const existInCart = cartItems.find(item => item.id === productId);

    if(existInCart ){
        if(existInCart.quantity > 1){
            setCartItems(cartItems.map(item => 
                item.id === productId && item.quantity !== 0 
                ? {...item, quantity: item.quantity - 1} 
                : item 
            ));
        } else {
            setCartItems(cartItems.filter(item => 
                item.id !== productId
            ));
        }
    }
  }

  const deleteFromCart = (productId) => {
    setCartItems(cartItems.filter(item => 
        item.id !== productId
    ));
  }

  
  const handleSearchSubmit = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredSearch(filtered);
  }  

  return (
    <>
      <Navigation 
        addToCart={addToCart} 
        cartItems={cartItems} 
        removeOneFromCart={removeOneFromCart} 
        deleteFromCart={deleteFromCart} 
        totalItems={totalItems}
      />

      <div className="App">
        <div className='search-bar-form'>
        <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            type="search"
            placeholder="Search products"
            className="me-2"
            aria-label="Search"
            onChange={handleSearchSubmit}
            value={searchInput}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        </div>
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
        <Product 
            filteredProducts={searchInput ? filteredSearch : filteredProducts} 
            products={products} 
            addToCart={addToCart} 
            categories={categories}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;

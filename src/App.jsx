
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Navigation from './components/navigation/Navigation';
import { useState } from 'react';
import products from './data/Products';
import Product from './components/products/Product';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [...new Set(products.flatMap(product => 
    product.category.map(cat => 
        cat.name
    ))
)];

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

  return (
    <>
      <Navigation addToCart={addToCart} cartItems={cartItems} removeOneFromCart={removeOneFromCart} deleteFromCart={deleteFromCart} totalItems={totalItems}/>
      <div className="App">
        <Home cartItems={cartItems} addToCart={addToCart} />
        <Product 
                  filteredProducts={filteredProducts} 
                  products={products} 
                  addToCart={addToCart} 
                  categories={categories}
              />
      </div>
    </>
  );
}

export default App;


import './App.css';
import Product from './components/products/Product';
import products from '../src/data/Products'

function App() {

  return (
    <div className="App">
      <h4>Sainsbury's</h4>
      {products.map((product,index) =>  (
        <Product key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} />
      ))}
    </div>
  );
}

export default App;

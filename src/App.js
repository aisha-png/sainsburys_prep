
import './App.css';
import Product from './components/products/Product';
import products from '../src/data/Products'

function App() {

  return (
    <div className="App">
      <h4>APP</h4>
      <Product products={products}/>
    </div>
  );
}

export default App;

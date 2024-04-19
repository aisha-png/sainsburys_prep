
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Navigation from './components/navigation/Navigation';

function App() {

  return (
    <div className="App">
      <Navigation />
      <h4 style={{color: '#F06C00'}}>Sainsbury's</h4>
      <Home />
    </div>
  );
}

export default App;


import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Navigation from './components/navigation/Navigation';

const App = () => {

  return (
    <div className="App">
      <Navigation />
      <h3 style={{color: '#F06C00'}}>
        <b>
          Sainsbury's
        </b>
      </h3>
      <Home />
    </div>
  );
}

export default App;

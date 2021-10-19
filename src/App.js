import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import CardModel from './components/CardModel';

function App() {







  return (
    <div className="App">
      <div>
        <h1 style={{ marginTop: "20px" }}>TechUp Lab</h1>
      </div>
      <CardModel />
      <Home />
    </div>
  );
}

export default App;

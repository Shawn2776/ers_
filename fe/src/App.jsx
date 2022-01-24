import './App.css';
import Navbar from './components/Navbar';
import "./App.css";
import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar/><Login/>
    </div>
  );
}

export default App;

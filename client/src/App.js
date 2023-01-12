import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddPlayerForm from "./components/AddPlayerForm";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
          <Route path = "/addplayer" element ={ < AddPlayerForm /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

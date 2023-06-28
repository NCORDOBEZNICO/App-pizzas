import { useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import { Routes, Route } from 'react-router-dom';
import Cards from './Components/Cards/Cards';
import Landing from './Components/Landing/Landing';

function App() {
const [id, setId] = useState('')





  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
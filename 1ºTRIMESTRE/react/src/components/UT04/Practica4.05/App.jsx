import React from 'react';
import Peliculas from './Peliculas';
import './App.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };


  return (
    <div className="App">
      <Peliculas />
      <button onClick={() => navigate('/ut04')} style={{ marginBottom: '20px' }}>
        Volver a UT04
      </button>
    </div>
  );
}

export default App;
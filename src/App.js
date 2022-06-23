import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';

//import logo from './logo.svg';

import NavBar from './Components/NavBar/Nav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar/>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import axios from 'axios'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Home from './components/Home.jsx';
import Result from './components/Result';
import { useState, useEffect } from 'react';



function App() {

  const {ide} = useParams()


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/:ide' element={<Home />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

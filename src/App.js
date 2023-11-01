import './App.css';
import React from 'react';
import AboutMe from './pages/AboutMe';
import Navigater from './pages/Navigator';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Town from "./pages/MyTown";



const App = () => {
  return (
    <div className="App">
      
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Navigater />}>
             <Route index element={<AboutMe />} />
            <Route path="hometown" element={<Town />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;

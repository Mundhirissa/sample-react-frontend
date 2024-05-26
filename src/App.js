// App.js
import React from 'react';
import {  Route,  BrowserRouter, Routes } from 'react-router-dom';
import IdaraList from './Componet/IdaraList';
import AddNewIdara from './Componet/Addnewidara';
import Navigationbar from './Componet/Navbar/Navigationbar';
import EditIdara from './Componet/EditIdara';

function App() {
  return (
    <BrowserRouter>
    <Navigationbar/>
<Routes>
      
        <Route path="/" element={<IdaraList/>} />
        <Route path="/add-new-idara" element={<AddNewIdara/>} />
        <Route path="/edit-idara/:idaraID" element={<EditIdara/>} />
  
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;

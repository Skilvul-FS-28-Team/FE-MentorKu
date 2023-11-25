import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Registrasi from './Pages/regist';
import LoginComponent from './Pages/login';
import Mentor from './Pages/DetailMentor';
import Pembayaran from './Pages/DetailPembayaran';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/regist' element={<Registrasi/>} />
        <Route path='/login' element={<LoginComponent/>} />
        <Route path='/mentor' element={<Mentor/>} />
        <Route path='/pembayaran' element={<Pembayaran/>}/>
      </Routes>
    </Router>
  );
}

export default App;

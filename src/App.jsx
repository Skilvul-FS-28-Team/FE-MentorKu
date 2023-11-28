import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Registrasi from './Pages/regist';
import LoginComponent from './Pages/login';
import Mentor from './Pages/DetailMentor';
import Pembayaran from './Pages/DetailPembayaran';
import PaymentBarcode from './Pages/Barcode'
import PaymentSuccess from './Pages/Success';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/regist' element={<Registrasi/>} />
        <Route path='/login' element={<LoginComponent/>} />
        <Route path='/mentor' element={<Mentor/>} />
        <Route path='/pembayaran' element={<Pembayaran/>}/>
        <Route path='/barcode' element={<PaymentBarcode/>} />
        <Route path='/success' element={<PaymentSuccess/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;

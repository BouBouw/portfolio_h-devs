import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import FRHomePage from './pages/FR_fr/home_page';
import ENHomePage from './pages/EN_en/home_page';

function App() {
  const item = localStorage.getItem('lang');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={!item || item === 'FR_fr' ? <FRHomePage/> : <ENHomePage/> } />
        <Route path='/fr' element={ <FRHomePage/> } />
        <Route path='/en' element={ <ENHomePage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

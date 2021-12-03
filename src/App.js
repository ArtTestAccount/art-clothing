import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;

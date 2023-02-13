import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Header/Search';
import Header from './components/Header/Header';
import CardsDetails from './components/Cart/CardDetails';
import FoodCards from './components/Menu/food/FoodCards';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Search />
      <Header />
      <Routes>
        <Route path='/' element={<FoodCards />} />
        <Route path='/cart/:id' element={<CardsDetails />} />
      </Routes>
    </div >
  );
}

export default App;

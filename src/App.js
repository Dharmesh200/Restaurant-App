import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/NavBar/Search';
import Header from './components/NavBar/Header';
import CardsDetails from './components/Cart/CardDetails';
import MenuCard from './components/Home/MenuCard';
import { Routes, Route, Outlet } from 'react-router-dom';

function DashBoard() {
  const isHomePage = window.location.pathname
  console.log(isHomePage == '/');

  return (
    <div>
      {/* {isHomePage == '/' &&
        <Header />} */}
      <Outlet />
    </div>
  )
}

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<DashBoard />} >
          <Route path="/" element={<Search />} />
          <Route path='restaurant/:restId' element={<MenuCard />} />
          <Route path='cart/:id' element={<CardsDetails />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;

// import { Routes, Route, Outlet } from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import RestaurantSearchComponen
// import CardsDetails from './components/Cart/CardDetails';


// function DashBoard() {
//   return (
//     <div>
//       <Outlet />
//     </div>
//   )
// }

// function App() {

//   return (
//     <div className="App">

//       <Routes>
//         <Route path='/' element={<DashBoard />} >
//           <Route path="/" element={<RestaurantSerchCompone />} />
//           <Route path='restaurant/:restId' element={<MenuCard />} />
//           <Route path='cart/:id' element={<CardsDetails />} />
//           <Route path='*' element={<div> Page Not Found</div>}></Route>
//         </Route>
//       </Routes>
//     </div >
//   );
// }

// export default App;

import React from 'react'
import { Provider } from 'react-redux'
import RouteConfigComponent from "./RouteConfig/index"
import store from './redux/store'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <Provider store={store}>
      <RouteConfigComponent />
    </Provider>
  )
}

export default App

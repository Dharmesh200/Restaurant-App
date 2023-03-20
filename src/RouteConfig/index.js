import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header.jsx"
import RestaurantSearchComponent from "../container/Search/RestaurantSearchComponent"
import MenuCardSearchComponent from "../container/Search/MenuCardSearchComponent"
import SingleItemDetail from "../components/SingleItemDetail/SingleItemDetail"
import AboutComponent from '../components/About/About.jsx'
import FooterComponent from "../components/Footer/FooterComponent.js"

const RouteConfigComponents = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={< RestaurantSearchComponent />} />
                    <Route path="/about" element={< AboutComponent />} />
                    <Route path="restaurant/:restId" element={< MenuCardSearchComponent />} />
                    <Route path="cart/:id" element={< SingleItemDetail />} />
                    <Route path='*' element={<div> Page Not Found</div>}></Route>
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </>
    )
}

export default RouteConfigComponents
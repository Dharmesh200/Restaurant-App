import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header.jsx"
import RestaurantSearchComponent from "../container/Search/RestaurantSearchComponent"
import MenuCardSearchComponent from "../container/Search/MenuCardSearchComponent"
import SingleItemDetail from "../components/SingleItemDetail/SingleItemDetail"
import FooterComponent from "../components/Footer/FooterComponent.js"

const RouteConfigComponents = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={< RestaurantSearchComponent />} />
                    <Route path="restaurant/:restId" element={< MenuCardSearchComponent />} />
                    <Route path="cart/:id" element={< SingleItemDetail />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </>
    )
}

export default RouteConfigComponents
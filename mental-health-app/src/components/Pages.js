import React from "react";
import {Route, Routes, useLocation} from "react-router-dom"

function Pages() {
    const location =useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />


        </Routes>
    )
}

export default Pages
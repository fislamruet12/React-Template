import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavDirScreen from "../navDirection";

const NavHomeScreen = () => {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<NavDirScreen />} />
            </Routes>
        </Router>
    )
}
export default NavHomeScreen
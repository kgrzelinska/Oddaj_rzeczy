import React from "react";
import LoginRegister from './Home/LoginRegister';
import Nav from './Home/Nav';
import HomeHeader from "./Home/HomeHeader";
import HomeThreeColumns from './Home/ThreeColumns/HomeThreeColumns';
import FourSteps from "./Home/FourSteps/FourSteps";
import AboutUs from "./Home/AboutUs";

function Home() {
    return (
        <>
            <div className="home container">
                <LoginRegister/>
                <Nav/>
                <HomeHeader/>
            </div>
            <HomeThreeColumns/>';
            <FourSteps/>
            <AboutUs/>
        </>
    )
}

export default Home;
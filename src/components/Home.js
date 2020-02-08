import React from "react";
import LoginRegister from './Home/LoginRegister';
import Nav from './Home/Nav';
import HomeHeader from "./Home/HomeHeader";
import HomeThreeColumns from './Home/HomeThreeColumns';

function Home() {
    return (
        <>
            <div className="home container">
                <LoginRegister/>
                <Nav/>
                <HomeHeader/>
            </div>
            <HomeThreeColumns/>';
        </>
    )
}

export default Home;
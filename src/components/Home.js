import React from "react";
import LoginRegister from './Home/LoginRegister';
import Nav from './Home/Nav';
import HomeHeader from "./Home/HomeHeader";

function Home() {
    return (
        <>
            <div className="home" className="container">
                <LoginRegister/>
                <Nav/>
                <HomeHeader/>
            </div>
        </>
    )
}

export default Home;
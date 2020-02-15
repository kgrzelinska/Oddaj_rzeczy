import React from "react";
import LoginRegister from './Home/LoginRegister';
import Nav from './Home/Nav';
import SectionTitle from './Home/Repeatable/Title';
import { Link } from 'react-router-dom';


function Logout() {
    return (
        <>
            <LoginRegister/>
            <Nav/>
            <div name="newUserPanel" className="userPanel flex">
                <SectionTitle title="Wylogowano pomyślnie!"/>
                <Link to="/">
                    <button className="logout">Strona główna</button>
                </Link>
            </div>
        </>
    )
};

export default Logout;
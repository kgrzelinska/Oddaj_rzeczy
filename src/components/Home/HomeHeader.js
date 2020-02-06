import React from "react";
import {Link} from 'react-router-dom';

function HomeHeader() {
    return (
        <header className="homeHeader flex">
            <div className="homeHeader__image"></div>
            <div className="homeHeader__textBox flex">
                <h1>Zacznij pomagać!</h1>
                <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                <div className="hero__textBox_decoration"></div>
                <div className="hero__textBox_btns flex">
                    <Link to="/userPanel" className="link"><div className="flex">ODDAJ RZECZY</div></Link>
                    <Link to ="/userPanel" className="link"><div className="flex">ZORGANIZUJ ZBIÓRKĘ</div></Link>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;
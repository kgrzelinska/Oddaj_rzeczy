import React from "react";
import {Link} from 'react-router-dom';

function HomeHeader() {
    return (
        <div className="homeHeader flex">
            <div className="homeHeaderImage"></div>
            <div className="homeEmptySpace"></div>
            <div className="homeHeaderTextBox flex">
                <h1>Zacznij pomagać!</h1>
                <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                <div className="homeTextBoxDecoration"></div>
                <div className="homeTextBoxBtns flex">
                    <Link to="/userPanel" className="link">
                        <div className="flex">ODDAJ RZECZY</div>
                    </Link>
                    <Link to="/userPanel" className="link">
                        <div className="flex">ZORGANIZUJ ZBIÓRKĘ</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;
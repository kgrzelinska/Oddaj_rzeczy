import React from "react";
import {Link} from 'react-router-dom';

function FourStepsBtn() {
    return (
        <Link to="/userPanel" className="link">
            <div className="fourStepsBtn flex">ODDAJ RZECZY</div>
        </Link>
    )
};

export default FourStepsBtn;
import React from "react";
import {Link} from "react-router-dom";

function LoginRegister() {
    return (
        <div className="loginRegister">
            <ul>
                <li><Link className="link" to='/userPanel'>Zaloguj</Link></li>
                <li><Link className="link" to='/newUserPanel'>Załóż konto</Link></li>
            </ul>
        </div>
    )
};

export default LoginRegister;
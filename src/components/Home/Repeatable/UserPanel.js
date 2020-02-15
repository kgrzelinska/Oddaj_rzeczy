import React, {Component} from "react";
import LoginRegister from './../LoginRegister';
import Nav from './../Nav';
import SectionTitle from './../Repeatable/Title';
import UserForm from './../Repeatable/UserForm';
import LogRegBtn from './../Repeatable/LogRegBtn';

class UserPanel extends Component {

    render() {
        return (
            <>
                <LoginRegister/>
                <Nav/>
                <div name="userPanel" className="userPanel flex">
                    <SectionTitle title="Zaloguj się"/>
                    <UserForm isThisNewUser="false">
                        <LogRegBtn
                            firstBtn="załóż konto"
                            firstPath="/newUserPanel"
                            secondBtn="zaloguj się"/>
                    </UserForm>
                 </div>
            </>
        )
    }
};

export default UserPanel;


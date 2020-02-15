import React, {Component} from "react";
import LoginRegister from './../LoginRegister';
import Nav from './../Nav';
import SectionTitle from './../Repeatable/Title';
import UserForm from './../Repeatable/UserForm';
import LogRegBtn from './../Repeatable/LogRegBtn';



class NewUserPanel extends Component {
    render() {
        return (
            <>
                <LoginRegister/>
                <Nav/>
                <div name="newUserPanel" className="userPanel flex">
                    <SectionTitle title="Zarejestruj się"/>
                    <UserForm isThisNewUser="true">
                        <LogRegBtn firstBtn="zaloguj się"
                                           firstPath="/userPanel"
                                           secondBtn="zarejestruj się"/>
                    </UserForm>
                </div>
            </>
        )
    }
}

export default NewUserPanel;
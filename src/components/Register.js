import React, {Component} from "react";
import SectionTitle from "./Repeatable/Title";
import {Link} from "react-router-dom";

class Register extends Component{
    render() {
        return <>
            <section className={'login-main'}>
                <SectionTitle title="Załóż konto"/>
                <div className={'login-center'}>
                    <form className={'login-form flex-box'}>
                        <div>
                            <div>
                                <span>Email</span>
                            </div>
                            <input type={'text'} name={'email'}/>
                        </div>
                        <div>
                            <div>
                                <span>Hasło</span>
                            </div>
                            <input type={'password'} name={'password'}/>
                        </div>
                        <div>
                            <div>
                                <span>Powtórz hasło</span>
                            </div>
                            <input type={'password'} name={'passwordRepeat'}/>
                        </div>

                    </form>
                    <div className={'login-buttons'}>
                        <Link to='/register'>
                            <button className={'btn_register'}>Zaloguj się</button>
                        </Link>
                        <Link to='/login'>
                            <button type={'submit'} className={'btn_login'} id={'loginBtn'}>Załóż konto</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    }
}

export default Register;
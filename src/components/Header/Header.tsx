import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router";

const Header = (props: any) => {
    return (
        <header className={classes.header}>
            <div className={classes.headerInner}>
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/024/553/534/small_2x/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png"
                    alt="logo" height='100px'/>
                <div className={classes.appHeader}>
                    <div>{props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}</div>
                </div>
            </div>
        </header>
    )
}

export default Header;
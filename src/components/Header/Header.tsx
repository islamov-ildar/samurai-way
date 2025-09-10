import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src="https://static.vecteezy.com/system/resources/thumbnails/024/553/534/small_2x/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png"
                alt="logo" height='100px'/>
            <div className={classes.appHeader}></div>
        </header>
    )
}

export default Header;
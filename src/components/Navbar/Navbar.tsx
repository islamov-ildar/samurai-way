import React from "react";
import s from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}><a href="/public#">Profile</a></div>
            <div className={s.item}><a href="/public#">Messages</a></div>
            <div className={s.item}><a href="/public#">News</a></div>
            <div className={s.item}><a href="/public#">Music</a></div>
            <div className={s.item}><a href="/public#">Settings</a></div>
        </nav>
    )
}
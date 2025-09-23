import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router";

const DialogItem = (props: any) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog} key={props.id}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
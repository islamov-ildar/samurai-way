import React from "react";
import s from "./../Dialogs.module.css";


const Message = (props: any) => <div className={s.message}>{props.message}</div>;

export default Message;
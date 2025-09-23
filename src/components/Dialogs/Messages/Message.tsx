import React from "react";
import s from "./../Dialogs.module.css";


const Message = (props: any) => <div key={props.id} className={s.message}>{props.message}</div>;

export default Message;
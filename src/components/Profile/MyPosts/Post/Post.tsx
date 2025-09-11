import React from "react";
import s from "./Post.module.css";

export const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img src="https://image.api.playstation.com/cdn/UP2538/CUSA05620_00/oR4OmlS5Hvgbdf5j1MuomN0d4xeT0DRP.png?w=440&thumb=false" alt="avatar"/>
            {props.message}
            <div>Likes: {props.likesCount}</div>
        </div>
    )
}
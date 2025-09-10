import React from "react";
import s from "./MyPosts.module.css";

export const MyPosts = () => {
    return (
        <main className={s.content}>
            <div>MyPosts</div>
            <div>NewPost</div>
            <div className={s.posts}>
                <div className={s.item}>post1</div>
                <div className={s.item}>post2</div>
                <div className={s.item}>post3</div>
            </div>
        </main>
    )
}
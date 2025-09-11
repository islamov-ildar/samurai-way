import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <main className={s.content}>
            <div>MyPosts</div>
            <div>
                <textarea name="postText" id="" cols={30} rows={5}></textarea>
                <button>Save</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='2'/>
                <Post message="It's my first post" likesCount='34'/>
            </div>
        </main>
    )
}
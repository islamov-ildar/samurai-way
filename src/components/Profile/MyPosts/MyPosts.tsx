import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

const postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 3},
    {id: 2, message: 'It\'s my first post', likesCount: 6},
    {id: 3, message: 'Yo', likesCount: 12},
    {id: 4, message: 'KukarekuKukarekuKukareku', likesCount: 5},
]

const posts = postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />);

export const MyPosts = () => {
    return (
        <main className={s.content}>
            <h3>MyPosts</h3>
            <div>
                <textarea name="postText" id="" cols={30} rows={5}></textarea>
                <div>
                    <button>Save</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                { posts }
            </div>
        </main>
    )
}
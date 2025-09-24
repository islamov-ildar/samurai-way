import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = (props: any) => {
// debugger;
    const posts = props.posts.map((p: { message: any; likesCount: any; }) => <Post message={p.message}
                                                                                   likesCount={p.likesCount}/>);
    const text: React.RefObject<HTMLTextAreaElement | null> = React.createRef();

    const addPost = () => {
        const newPost = text.current?.value;
        console.log(text.current?.value);
        props.addPost(newPost)
    }

    return (
        <main className={s.content}>
            <h3>MyPosts</h3>
            <div>
                <textarea ref={text} name="postText" id="" cols={30} rows={5}></textarea>
                <div>
                    <button onClick={addPost}>Save</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </main>
    )
}

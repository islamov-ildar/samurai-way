import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = (props: any) => {
    console.log('MyPosts', props);
    const posts = props.posts.map((p: {id:number, message: any; likesCount: any; }) =>
        <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    const text: React.RefObject<HTMLTextAreaElement | null> = React.createRef();

    const addPost = () => {
        props.addPost();
     }

    const handleOnchange = () => {
        const newPost = text.current?.value;
        if(newPost) props.updateNewPostText(newPost);
    }

    return (
        <main className={s.content}>
            <h3>MyPosts</h3>
            <div>
                <textarea ref={text} name="postText" id="" cols={30} rows={5} value={props.newPostText} onChange={handleOnchange} />
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

import React from "react";
import {addPostActionCreator, updateNewPostTextPostActionCreator} from "../../../redux/postPageReducer";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props: any) => {

    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const handleOnchange = (newPostText: string) => {
        props.store.dispatch(updateNewPostTextPostActionCreator(newPostText));
    }

    return (
        <MyPosts
            updateNewPostText={handleOnchange}
            addPost={addPost}
            posts={state.postPage.posts}
            newPostText={state.postPage.newPostText}
        />
    )
}

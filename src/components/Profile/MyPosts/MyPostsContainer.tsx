import React from "react";
import {addPostActionCreator, updateNewPostTextPostActionCreator} from "../../../redux/postPageReducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

export const MyPostsContainer = (props: any) => {

    // const state = props.store.getState();

    // const addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    // }
    //
    // const handleOnchange = (newPostText: string) => {
    //     props.store.dispatch(updateNewPostTextPostActionCreator(newPostText));
    // }

    return (
        <StoreContext.Consumer>
            {(store) => {

                const addPost = () => {
                    store?.dispatch(addPostActionCreator());
                }

                const handleOnchange = (newPostText: string) => {
                    store?.dispatch(updateNewPostTextPostActionCreator(newPostText));
                }

                return <MyPosts
                    updateNewPostText={handleOnchange}
                    addPost={addPost}
                    posts={store?.getState().postPage.posts}
                    newPostText={store?.getState().postPage.newPostText}
                />
            }
            }
        </StoreContext.Consumer>
    )
}

import React from "react";
import {addPostActionCreator, updateNewPostTextPostActionCreator} from "../../../redux/postPageReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => state.postPage;

const mapDispathToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (newPostText: string) => {
            dispatch(updateNewPostTextPostActionCreator(newPostText));
        }
    }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts)
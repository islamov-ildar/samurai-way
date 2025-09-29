import React from "react";
import {addPostActionCreator, updateNewPostTextPostActionCreator} from "../../../redux/postPageReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
// import StoreContext from "../../../StoreContext";
//
// export const MyPostsContainer = (props: any) => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//
//                 const addPost = () => {
//                     store?.dispatch(addPostActionCreator());
//                 }
//
//                 const handleOnchange = (newPostText: string) => {
//                     store?.dispatch(updateNewPostTextPostActionCreator(newPostText));
//                 }
//
//                 return <MyPosts
//                     updateNewPostText={handleOnchange}
//                     addPost={addPost}
//                     posts={store?.getState().postPage.posts}
//                     newPostText={store?.getState().postPage.newPostText}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

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
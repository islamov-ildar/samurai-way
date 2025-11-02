import {addPostActionCreator} from "../../../redux/postPageReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => state.postPage;

const mapDispathToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts)
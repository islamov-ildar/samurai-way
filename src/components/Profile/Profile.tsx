import React from "react";
import classes from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = (props: any) => {
    return (
        <main className={classes.content}>
            <ProfileInfo />
            <MyPostsContainer store={props.store}  />
        </main>
    )
}
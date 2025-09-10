import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <main className={classes.content}>
            <img
                src="https://img.freepik.com/free-vector/abstract-banner-with-low-poly-plexus-network-communications-design_1048-12914.jpg?semt=ais_hybrid&w=740&q=80"
                alt="img" width='100%'/>
            <div>
                ava+description
            </div>
            <MyPosts />
        </main>
    )
}
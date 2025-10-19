import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
// import classes from "./ProfileInfo.module.css";

export const ProfileInfo = (props: any) => {
    console.log(props.profile)
    if (props.profile === null) {
        console.log('ProfileInfo 1');
        return (<Preloader/>)
    }
    console.log('ProfileInfo 2')
    return (
        <div>
            <img
                src="https://img.freepik.com/free-vector/abstract-banner-with-low-poly-plexus-network-communications-design_1048-12914.jpg?semt=ais_hybrid&w=740&q=80"
                alt="img" width='100%'/>
            <div>
                {props.profile.photos.large && <img src={props.profile.photos.large} alt="ava"/>}
            </div>
            <div>
                {props.profile.fullName}
            </div>
            <div>
                {props.profile.userId}
            </div>
        </div>
    );
};
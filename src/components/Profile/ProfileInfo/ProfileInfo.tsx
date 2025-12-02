import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/userPlug.png";

export const ProfileInfo = (props: any) => {
    if (props.profile === null) {
        return (<Preloader/>)
    }
    const onMainPhotoSelected = (e: any) => {
        console.log("onMainPhotoSelected", e);
        console.log("onMainPhotoSelected", props);
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    console.log("profile", props.profile);

    return (
        <div>
            <img
                src="https://img.freepik.com/free-vector/abstract-banner-with-low-poly-plexus-network-communications-design_1048-12914.jpg?semt=ais_hybrid&w=740&q=80"
                alt="img" width='100%'/>
            <div>
                <img src={props.profile.photos.large || userPhoto} alt="ava"/>
            </div>
            {props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
            <div>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
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
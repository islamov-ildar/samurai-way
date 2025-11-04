import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

export const ProfileInfo = (props: any) => {
    if (props.profile === null) {
        return (<Preloader/>)
    }
    return (
        <div>
            <img
                src="https://img.freepik.com/free-vector/abstract-banner-with-low-poly-plexus-network-communications-design_1048-12914.jpg?semt=ais_hybrid&w=740&q=80"
                alt="img" width='100%'/>
            <div>
                {props.profile.photos.large && <img src={props.profile.photos.large} alt="ava"/>}
            </div>
            <div>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
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
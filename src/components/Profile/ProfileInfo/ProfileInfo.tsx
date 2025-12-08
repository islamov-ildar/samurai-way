import React, {useState} from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/userPlug.png";
import styles from "./ProfileInfo.module.css";
import {ProfileDataFormReduxForm} from "./ProfileDataForm";

export const ProfileInfo = (props: any) => {

    const [editMode, setEditMode] = useState(false);

    if (props.profile === null) {
        return (<Preloader/>)
    }
    const onMainPhotoSelected = (e: any) => {
        console.log("onMainPhotoSelected", e);
        console.log("onMainPhotoSelected", props);
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    console.log("profile", props.profile);

    const normalizedProfile = {
        ...props.profile,
        aboutMe: props.profile.aboutMe || '',
        lookingForAJobDescription: props.profile.lookingForAJobDescription || '',
        fullName: props.profile.fullName || '',
        // contacts тоже нужно нормализовать
        contacts: Object.keys(props.profile.contacts).reduce((acc, key) => {
            acc[key] = props.profile.contacts[key] || '';
            return acc;
        }, {} as any)
    };

    const onSubmit = (formData: any) => {
        props.saveProfile(formData).then(() => {setEditMode(false);});
        console.log("handleSubmit result");
        //
    }

    return (
        <div>
            <img
                src="https://img.freepik.com/free-vector/abstract-banner-with-low-poly-plexus-network-communications-design_1048-12914.jpg?semt=ais_hybrid&w=740&q=80"
                alt="img" width='100%'/>
            <div>
                <img src={props.profile.photos.large || userPhoto} alt="ava"/>
            </div>
            {props.isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
            <div>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
            {/*{editMode ? <ProfileDataForm profile={props.profile} /> : <ProfileData profile={props.profile} editMode={editMode} setEditMode={setEditMode} isOwner={props.isOwner} />}*/}
            {editMode ? <ProfileDataFormReduxForm initialValues={normalizedProfile} onSubmit={onSubmit} /> : <ProfileData profile={props.profile} editMode={editMode} setEditMode={setEditMode} isOwner={props.isOwner} />}
        </div>
    );
};

const ProfileData = (props: any) => {
    return (
        <div>
            {props.isOwner && <button onClick={() => props.setEditMode(true)}>Edit profile</button>}
            <div>123</div>
            <div>
                <b>Full name:</b> {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {
                props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {props.profile.lookingForAJobDescriptions}
                </div>
            }
            <div>
                <b>About me</b> {props.profile.aboutMe}
            </div>
            <div className={styles.contact}>
                <b>Contacts: </b>{Object.keys(props.profile.contacts).map(key => <Contact contactTitle={key}
                                                                                          contactValue={props.profile.contacts[key]}
                                                                                          key={key}/>)}
            </div>
            <div>
                {props.profile.fullName}
            </div>
            <div>
                {props.profile.userId}
            </div>
        </div>
    )
}

export const Contact = ({contactTitle, contactValue}: { contactTitle: string; contactValue: string }) => {
    return (
        <div><b>{contactTitle}</b>: {contactValue}</div>
    )
}
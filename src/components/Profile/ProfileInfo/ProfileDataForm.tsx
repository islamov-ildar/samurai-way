import React from "react";
import styles from "./ProfileInfo.module.css";
import {Contact} from "./ProfileInfo";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

export const ProfileDataForm = (props: any) => {
    return (
        <form>
            <button>Save</button>
            {props.isOwner && <button onClick={() => props.setEditMode(true)}>Edit profile</button>}
            <div>
                <b>Full name:</b> {createField('FullName', 'fullName', [], Input, {type: 'text'} )}
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
        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm({form: 'ProfileDataForm'})(ProfileDataForm)
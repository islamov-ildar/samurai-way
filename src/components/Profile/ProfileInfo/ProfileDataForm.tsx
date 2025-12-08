import React from "react";
import styles from "./ProfileInfo.module.css";
import {createField, Input, TextArea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import styles2 from "../../common/FormsControls/FormControls.module.css"

export const ProfileDataForm = (props: any) => {
    console.log('ProfileDataForm', props);
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <div className={styles2.formSummaryError}>{props.error}</div>}
            <button>Save</button>
            <div>
                <b>Full name:</b> {createField('FullName', 'fullName', ()=>{}, Input, {type: 'text'} )}
            </div>
            <div>
                {createField(null, 'lookingForAJob', ()=>{}, Input, {type: 'checkbox'}, 'lookingForAJob' )}
            </div>
            {
                props.initialValues.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {props.initialValues.lookingForAJobDescriptions}
                    {createField('My professional skills', 'lookingForAJobDescription', ()=>{}, TextArea, {type: 'text'} )}
                </div>
            }
            <div>
                <b>About me</b> {props.initialValues.aboutMe}
                {createField('About me', 'aboutMe', ()=>{}, TextArea, {type: 'text'} )}
            </div>
            <div>
                <b>Looking for a job description</b> {props.initialValues.lookingForAJobDescription}
                {createField('lookingForAJobDescription', 'lookingForAJobDescription', ()=>{}, TextArea, {type: 'text'} )}
            </div>

            <div className={styles.contact}>
                <b>Contacts: </b>{Object.keys(props.initialValues.contacts).map(key => <div key={key}>
                <b>{key}: {createField(key, 'contacts.' + key, ()=>{}, Input, {type: 'text'} )}</b>
            </div>  )}
            </div>
            <div>
                {props.initialValues.fullName}
            </div>
            <div>
                {props.initialValues.userId}
            </div>
        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm({form: 'ProfileDataForm'})(ProfileDataForm)
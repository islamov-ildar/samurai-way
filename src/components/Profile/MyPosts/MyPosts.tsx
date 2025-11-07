import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

export const MyPosts = React.memo((props: any) => {
    console.log("MyPosts Component");
    const posts = props.posts.map((p: { id: number, message: any; likesCount: any; }) =>
        <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    const onSubmit = (formData: any) => {
        props.addPost(formData.postText);
    }

    return (
        <main className={s.content}>
            <h3>MyPosts</h3>
            <AddPostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {posts}
            </div>
        </main>
    )
})

const AddPost = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="postText" type="text" component={TextArea} validate={[required, maxLength(15)]} placeholder="Post message" />
            <div>
                <button>Save</button>
                <button>Remove</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPost) as any;
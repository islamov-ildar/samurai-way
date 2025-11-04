import React from 'react'
import s from './users.module.css'
import axios from "axios";
import userPhoto from "../../assets/userPlug.png";

export const UsersFunctionalComponent = (props: any) => {

    const getUsers = () => {
        if (props.users.length === 0) {

            const baseUrl = 'https://social-network.samuraijs.com/api/1.0/users'

            axios.get(baseUrl).then((res: any) => {
                props.setUsers(res.data.items)
            })
        }
    }


    return <div>
        <button onClick={getUsers}>Get Users</button>
        {props.users.map((u: any) => <div key={u.id}>
        <span>
            <div><img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar" className={s.userImg}/></div>
            <div>{u.followed ?
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                <button onClick={() => props.follow(u.id)}>Follow</button>}
            </div>
        </span>
            <span>
            <span>
                <div>{u.name}</div>
                <div>{u.id}</div>
            </span>
            <span>
                {/*<div>{u.location.country}</div>*/}
                {/*<div>{u.location.city}</div>*/}
            </span>
        </span>
        </div>)}
    </div>
}
import React from 'react'
import userPhoto from "../../assets/userPlug.png";
import s from './users.module.css'
import {NavLink} from "react-router";

// @ts-ignore
const User = ({user, follow, unfollow, followingInProgress}: {user: any; follow: any; unfollow: any; followingInProgress: any;}) => {
    return <div>
        <span>
            <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.small ? user.photos.small : userPhoto} alt="avatar" className={s.userImg}/>
            </NavLink>
            <div>{user.followed ?
                // @ts-ignore
                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id);

                }}>Unfollow</button> :
                // @ts-ignore
                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id);
                }
                }>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.id}</div>
            </span>
        </span>
    </div>
}


export default User;
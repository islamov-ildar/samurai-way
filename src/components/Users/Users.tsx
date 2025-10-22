import React from 'react'
import userPhoto from "../../assets/userPlug.png";
import s from './users.module.css'
import {NavLink} from "react-router";
import axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props: any) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    
    return <div>
        <div>
            {
                // @ts-ignore
                pages.map((p: any) => <span onClick={() => props.onPageChanged(p)}
                                            className={`${props.currentPage === p ? s.selected : ''} ${s.paginationBtn}`}>{p}</span>)}
        </div>
        {// @ts-ignore
            props.users.map((u: any) => <div key={u.id}>
        <span>
            <NavLink to={`/profile/${u.id}`}>
                <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar" className={s.userImg}/>
            </NavLink>
            <div>{u.followed ?
                // @ts-ignore
                <button onClick={() => {
                    usersAPI.unFollow(u.id).then((res: any) => {
                        console.log('axios.delete unfollow', res);
                        props.unfollow(u.id)
                    })

                }}>Unfollow</button> :
                // @ts-ignore
                <button onClick={() => {
                    usersAPI.follow(u.id).then((res: any) => {
                        console.log('axios.post follow', res);
                        props.follow(u.id)
                    })
                }
                }>Follow</button>}
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
            </div>)
        }
    </div>
}


export default Users;
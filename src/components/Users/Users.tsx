import React from 'react'
import userPhoto from "../../assets/userPlug.png";
import s from './users.module.css'
import {NavLink} from "react-router";
import axios from "axios";

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
                    const baseUrl = `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`;
                    axios.delete(baseUrl, {withCredentials: true, headers: {'API-KEY':'7643462e-f1ca-4ac7-ab74-2b96553fe0b2'}}).then((res: any) => {
                        // @ts-ignore
                        // this.props.toggleIsFetching(false);
                        console.log('axios.delete unfollow', res);
                        // @ts-ignore
                        // this.props.setUsers(res.data.items)
                    })

                    props.unfollow(u.id)
                }}>Unfollow</button> :
                // @ts-ignore
                <button onClick={() => {
                    const baseUrl = `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`;
                    axios.post(baseUrl, {}, {withCredentials: true, headers: {'API-KEY':'7643462e-f1ca-4ac7-ab74-2b96553fe0b2'}}).then((res: any) => {
                        // @ts-ignore
                        // this.props.toggleIsFetching(false);
                        console.log('axios.post follow', res);
                        // @ts-ignore
                        // this.props.setUsers(res.data.items)
                    })
                    props.follow(u.id)
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
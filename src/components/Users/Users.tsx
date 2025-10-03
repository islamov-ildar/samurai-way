import React from 'react'
import s from './users.module.css'
import axios from "axios";
import userPhoto from "../../assets/userPlug.png";
import {IUserInitialState} from "../../redux/usersPageReducer";

export class Users extends React.Component<IUserInitialState> {

    componentDidMount() {
        const baseUrl = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
        axios.get(baseUrl).then((res: any) => {
            console.log('axios.get users', res.data.items);
            // @ts-ignore
            this.props.setUsers(res.data.items)
        })
    }


    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {
                    // @ts-ignore
                    pages.map((p: any) => <span className={`${this.props.currentPage === p ? s.selected : ''} ${s.paginationBtn}` }>{p}</span>) }
            </div>
    {// @ts-ignore
        this.props.users.map((u: any) => <div key={u.id}>
        <span>
            <div><img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar" className={s.userImg}/></div>
            <div>{u.followed ?
                // @ts-ignore
                <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                // @ts-ignore
                <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
}
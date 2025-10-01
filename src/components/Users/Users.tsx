import React from 'react'
import s from './users.module.css'
import axios from "axios";
import userPhoto from "../../assets/userPlug.png";

export const Users = (props: any) => {
    console.log('Users', props);

    if(props.users.length === 0) {

        const baseUrl = 'https://social-network.samuraijs.com/api/1.0/users'

        axios.get(baseUrl).then((res: any) => {
            console.log('axios.get users', res.data.items);
            props.setUsers(res.data.items)
        })
        // props.setUsers([
        //     {id: 1, photoUrl: '', followed: true, fullName: 'Dart Vader', status: 'Luke, I am your father', location: {city: 'Nabu Coda', country: 'Alderaan'}},
        //     {id: 2, photoUrl: '', followed: false, fullName: 'Mace Windu', status: 'I have dismantled and destroyed over 100,000 of you Type One battle droids.', location: {city: 'Javin', country: 'Four'}},
        //     {id: 3, photoUrl: '', followed: true, fullName: 'Obi Van', status: 'Only a Sith deals in absolutes.', location: {city: 'Coruscant', country: 'City'}},
        //     {id: 4, photoUrl: '', followed: false, fullName: 'Luke Skywalker', status: 'Do or do not. There is no try.', location: {city: 'Stewjon', country: 'Town'}},
        // ]);
    }

    return <div>
        {props.users.map((u: any) => <div key={u.id}>
        <span>
            <div><img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar" className={s.userImg}/></div>
            <div>{ u.followed ?
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
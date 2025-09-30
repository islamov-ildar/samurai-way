import React from 'react'
import s from './users.module.css'

export const Users = (props: any) => {
    console.log('Users', props);

    if(props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/1fbc51ed-5043-5b3f-9fd9-8bdc23ed67a1/e02a087b-3868-5efb-b449-370ff253b769.jpg', followed: true, fullName: 'Dart Vader', status: 'Luke, I am your father', location: {city: 'Nabu Coda', country: 'Alderaan'}},
            {id: 2, photoUrl: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/1fbc51ed-5043-5b3f-9fd9-8bdc23ed67a1/e02a087b-3868-5efb-b449-370ff253b769.jpg', followed: false, fullName: 'Mace Windu', status: 'I have dismantled and destroyed over 100,000 of you Type One battle droids.', location: {city: 'Javin', country: 'Four'}},
            {id: 3, photoUrl: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/1fbc51ed-5043-5b3f-9fd9-8bdc23ed67a1/e02a087b-3868-5efb-b449-370ff253b769.jpg', followed: true, fullName: 'Obi Van', status: 'Only a Sith deals in absolutes.', location: {city: 'Coruscant', country: 'City'}},
            {id: 4, photoUrl: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/1fbc51ed-5043-5b3f-9fd9-8bdc23ed67a1/e02a087b-3868-5efb-b449-370ff253b769.jpg', followed: false, fullName: 'Luke Skywalker', status: 'Do or do not. There is no try.', location: {city: 'Stewjon', country: 'Town'}},
        ]);
    }

    return <div>
        {props.users.map((u: any) => <div key={u.id+u.fullName}>
        <span>
            <div><img src={u.photoUrl} alt="avatar" className={s.userImg}/></div>
            <div>{ u.followed ?
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                <button onClick={() => props.follow(u.id)}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
        </span>
        {u.name}
    </div>)}
    </div>
}
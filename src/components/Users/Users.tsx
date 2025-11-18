import React from 'react'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props: any) => {
    return <div>

        < Paginator {...props} />
        {// @ts-ignore
            props.users.map((u: any) => <User
                key={u.id}
                user={u}
                follow={props.follow}
                unfollow={props.unfollow}
                followingInProgress={props.followingInProgress} />)
        }
    </div>
}


export default Users;
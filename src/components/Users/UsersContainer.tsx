import React from 'react'
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersPageReducer";

const mapStateToProps = (state: any) => {
    return {users: state.usersPage.users};
}

const mapDispatchtoProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Users)
import React from 'react'
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersPageReducer";
import axios from "axios";
import {IUserInitialState} from "../../redux/usersPageReducer";
import Users from "./Users";

export class UsersContainer extends React.Component<IUserInitialState> {

    componentDidMount() {
        const baseUrl = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
        axios.get(baseUrl).then((res: any) => {
            console.log('axios.get users', res.data.items);
            // @ts-ignore
            this.props.setUsers(res.data.items)
            // @ts-ignore
            this.props.setTotalUsersCount(res.data.totalCount);
        })
    }

    onPageChanged = (p: any) => {
        // @ts-ignore
        this.props.setCurrentPage(p);
        const baseUrl = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
        axios.get(baseUrl).then((res: any) => {
            console.log('axios.get users', res.data.items);
            // @ts-ignore
            this.props.setUsers(res.data.items)
        })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
    }
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
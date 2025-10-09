import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersPageReducer";
import axios from "axios";
import {IUserInitialState} from "../../redux/usersPageReducer";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export class UsersContainer extends React.Component<IUserInitialState> {

    componentDidMount() {
        const baseUrl = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
        // @ts-ignore
        this.props.toggleIsFetching(true);
        axios.get(baseUrl).then((res: any) => {
            // @ts-ignore
            this.props.toggleIsFetching(false);
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
        // @ts-ignore
        this.props.toggleIsFetching(true);
        const baseUrl = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
        axios.get(baseUrl).then((res: any) => {
            // @ts-ignore
            this.props.toggleIsFetching(false);
            console.log('axios.get users', res.data.items);
            // @ts-ignore
            this.props.setUsers(res.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
            />

        </>
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(follow(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollow(userId));
        },
        setUsers: (users: any) => {
            dispatch(setUsers(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage));
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCount(totalUsersCount));
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetching(isFetching));
        }
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
// @ts-ignore
})(UsersContainer)

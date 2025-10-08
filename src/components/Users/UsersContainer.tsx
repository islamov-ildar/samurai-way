import React from 'react'
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/usersPageReducer";
import axios from "axios";
import {IUserInitialState} from "../../redux/usersPageReducer";
import Users from "./Users";

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
            {this.props.isFetching ? <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg></div> : null}

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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
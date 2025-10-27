import React from 'react'
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/usersPageReducer";
import {IUserInitialState} from "../../redux/usersPageReducer";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export class UsersContainer extends React.Component<IUserInitialState> {

    componentDidMount() {
        // @ts-ignore
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (p: any) => {
        // @ts-ignore
        this.props.setCurrentPage(p);
        // @ts-ignore
        this.props.getUsers(p, this.props.pageSize)

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
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
    };
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
    //@ts-ignore
})(UsersContainer)

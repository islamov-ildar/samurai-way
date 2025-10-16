import React from "react";
import classes from "./Profile.module.css";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        const baseUrl = `https://social-network.samuraijs.com/api/1.0/profile/2`;

        axios.get(baseUrl).then((res: any) => {
            // @ts-ignore
            this.props.toggleIsFetching(false);
            console.log('axios.get users', res.data.items);
            // @ts-ignore
            this.props.setProfile(res.data)
            // @ts-ignore
            // this.props.setTotalUsersCount(res.data.totalCount);
        })
    }

    render() {
        return (
            <main className={classes.content}>
                <Profile {...this.props} />
            </main>
        )
    }
}

const mapStateToProps = (state: any) => ({
    a: 13
})

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);
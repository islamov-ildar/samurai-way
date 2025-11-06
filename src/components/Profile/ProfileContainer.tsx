import React from "react";
import classes from "./Profile.module.css";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/postPageReducer";
import {useLocation, useNavigate, useParams} from "react-router";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        console.log('ProfileContainer', this.props);
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;

            if(!userId) {
                this.props.router.navigate('/login');
                return;
            }
        }

        this.props.getUserStatus(userId);
        this.props.getUserProfile(userId);
    }

    render() {

        return (
            <main className={classes.content}>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus} />
            </main>
        )
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.postPage.profile,
    status: state.postPage.status,
    authorizedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth,
})

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default withRouter(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus})(ProfileContainer)
);
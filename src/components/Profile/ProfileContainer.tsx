import React from "react";
import classes from "./Profile.module.css";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/postPageReducer";
import {useLocation, useNavigate, useParams} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        // const userId = this.props.router.params.userId ?? 2;
        const userId = this.props.router.params.userId ?? 32636;
        this.props.getUserStatus(userId);
        this.props.getUserProfile(userId);
    }

    render() {

        return (
            <main className={classes.content}>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
            </main>
        )
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.postPage.profile,
    status: state.postPage.status,
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


export default compose(withAuthRedirect, connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}), withRouter)(ProfileContainer);
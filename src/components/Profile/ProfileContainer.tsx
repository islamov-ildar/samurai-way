import React from "react";
import classes from "./Profile.module.css";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/postPageReducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {this.props.getUserProfile(this.props.router.params.userId ?? 2)}

    render() {

        if(!this.props.isAuth) return <Navigate to={'/login'}/>

        return (
            <main className={classes.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </main>
        )
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.postPage.profile,
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
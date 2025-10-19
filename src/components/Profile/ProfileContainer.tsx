import React from "react";
import classes from "./Profile.module.css";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/postPageReducer";
import {useLocation, useNavigate, useParams} from "react-router";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        userId = userId ? userId : 2;

        const baseUrl = `https://social-network.samuraijs.com/api/1.0/profile/${userId}`;
        axios.get(baseUrl).then((res: any) => {
            console.log('axios.get ProfileContainer', res.data);
            this.props.setUserProfile(res.data);
        })


    }

    render() {
        return (
            <main className={classes.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </main>
        )
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.postPage.profile,
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
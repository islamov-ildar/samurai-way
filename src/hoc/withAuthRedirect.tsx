import React from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
            return <Component {...this.props} />
        }
    }

    const mapStateToPropsForRedirect = (state: any) => ({isAuth: state.authReducer.isAuth});

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}



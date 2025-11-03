import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/authReducer";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {this.props.getAuthUserData()}

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAuth: state.authReducer.isAuth,
        userId: state.authReducer.userId,
        email: state.authReducer.email,
        login: state.authReducer.login,
    }
};

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);
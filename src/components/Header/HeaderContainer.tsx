import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        const baseUrl = `https://social-network.samuraijs.com/api/1.0/auth/me`;
        axios.get(baseUrl, {withCredentials: true}).then((res: any) => {
            console.log('axios.get HeaderContainer', res);
            if (res.data.resultCode === 0) {
                const {id, email, login} = res.data.data;

                console.log('HeaderContainer 1', id, email, login);

                this.props.setAuthUserData(id, email, login);
            }
        })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: any) => {
    console.log('mapStateToProps', state)
    return {
        isAuth: state.authReducer.isAuth,
        userId: state.authReducer.userId,
        email: state.authReducer.email,
        login: state.authReducer.login,
    }
};

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
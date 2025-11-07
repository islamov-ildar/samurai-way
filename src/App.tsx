import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes, useLocation, useNavigate, useParams} from "react-router";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";

class App extends React.Component<any> {

    componentDidMount() {this.props.initializeApp()}

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        else {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path="/profile/:userId?"
                                   element={<ProfileContainer/>}
                            />
                            <Route path="/dialogs/*"
                                   element={<DialogsContainer/>}
                            />
                            <Route path="/users/*"
                                   element={<UsersContainer/>}
                            />
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            );
        }

    }
}

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

const mapStateToProps = (state: any) => ({initialized: state.appReducer.initialized});

export default compose<React.ComponentType>(withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

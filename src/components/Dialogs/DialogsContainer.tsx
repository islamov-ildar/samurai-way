import Dialogs from "./Dialogs";
import {sendMessageActionCreator} from "../../redux/dialogsPageReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: any) => ({dialogsPage: state.dialogsPage});

const mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: (newMessage: string) => {
            dispatch(sendMessageActionCreator(newMessage));
        },
    }
}

compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs);
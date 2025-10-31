import React from 'react'

class ProfileStatus extends React.Component<any, any> {

    state = {editMode: false};

    activateEditMode = () => {
         this.setState({editMode: true});
     }

    deActivateEditMode = () => {
         this.setState({editMode: false});
     }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input autoFocus={true} value={this.props.status} onBlur={this.deActivateEditMode} />
                    </div> :
                    <div onClick={this.activateEditMode}>
                        <span>{this.props.status}</span>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;
import React from 'react'

class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status,
    };

    onStatusChange = (e: any) => {
        this.setState({status: e.currentTarget.value});
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log('componentDidUpdate', prevProps, prevState, snapshot);
        if (prevProps.status !== this.state.status) {
            this.setState({status: this.props.status});
        }
    }

    activateEditMode = () => {
         this.setState({editMode: true});
     }

    deActivateEditMode = () => {
        this.props.updateUserStatus(this.state.status);
        this.setState({editMode: false});
     }

    render() {
        console.log('getUserStatus 2 props', this.props)

        return (
            <div>
                <span>Status:</span>
                {this.state.editMode ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deActivateEditMode} />
                    </div> :
                    <div onClick={this.activateEditMode}>
                        <span>{this.props.status || '-----'}</span>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;
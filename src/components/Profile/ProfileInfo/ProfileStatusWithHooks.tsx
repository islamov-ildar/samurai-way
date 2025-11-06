import React, {useState} from 'react'

const ProfileStatusWithHooks = (props: any) => {


    // let stateWithSetState = useState(false);
    //
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateMode = () => {setEditMode(true)}
    const deActivateMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }

    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            <span>Status:</span>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateMode}>{status || '-----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateMode} value={status} />
                </div>}

        </div>
    )

}


export default ProfileStatusWithHooks;
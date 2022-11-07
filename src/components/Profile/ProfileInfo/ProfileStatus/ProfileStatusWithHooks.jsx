import React from 'react'
import { useState } from 'react'

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const onInputChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status)
    //         this.setState({
    //             status: this.props.status
    //         })
    // }

    return (
        <div>
            {
                !editMode &&
                <div>
                    <span
                        onDoubleClick={activateEditMode}
                    >{props.status || '-------------'}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input autoFocus={true}
                        value={status}
                        onBlur={deactivateEditMode}
                        onChange={onInputChange}
                    />
                </div>
            }
        </div >
    )

}

export default ProfileStatusWithHooks
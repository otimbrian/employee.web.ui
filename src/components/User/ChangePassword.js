import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Notification from '../Notification'
import NavigateBack from '../NavigateBack'
import {
    showNotification,
    disableNotification
} from '../../reducers/notificationReducer'

const ChangePassword = () => {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confrimPassword, setConfrimPassword] = useState('')

    const dispatch = useDispatch()

    const post = (message, status) => {
        dispatch(
            showNotification({
                message: message,
                status: 'error'
            })
        )
        setTimeout(() => {
            dispatch(disableNotification())
        }, 5000)
    }

    const changePassword = () => {

    }

    
    return (
        <>
            <div className="employee-content"><NavigateBack /></div>
            <br />
            <div className="employee-content">
            <fieldset>
                <legend>Confirm Password</legend>
                <label>
                <strong>Old Password:</strong><br />
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}placeholder="Old Password" required="required" />
            </label>
            <br />
            </fieldset>
            
            <br />

           <fieldset>
            <legend>Create New Password</legend>
            <label>
                <strong>New Password:</strong><br />
                <input type="password" name="new password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="New Password" required="required" />
            </label>
            <br />
            <br />
            <label>
                <strong>Confirm New Password:</strong><br />
                <input type="password" name="confirm password" value={confrimPassword} onChange={e => setConfrimPassword(e.target.value)}  placeholder="New Password" required="required" />
            </label><br />
            </fieldset>
        </div>
        <div className='employee-content'>
                    <Notification />
                </div>
        <div className='employee-content'>
                    <input type='submit' value='Change Password' onClick={changePassword} />
                </div>
        </>
    )
}


export default ChangePassword
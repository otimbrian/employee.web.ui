import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Notification from '../Notification'
import NavigateBack from '../NavigateBack'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../../reducers/userReducer'
// import {updatingUser} from '../../reducers/userReducer'
import { employeeLocalStorage } from '../../services/shared'
import { changeEmployeePassword } from '../../reducers/employeeReducer'
import {
    showNotification,
    disableNotification
} from '../../reducers/notificationReducer'

const ChangePassword = () => {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const changePassword = async () => {
        if (newPassword !== confirmPassword) {
            console.log('Not the same passwords')
            post('New Password Does not Match', 'Error')
        } else {
            const passwordObject = {
                oldPassword: password,
                newPassword: newPassword
            }

            try {
                const update = await dispatch(
                    changeEmployeePassword(passwordObject)
                ).unwrap()
                console.log('New User password ----->', update.passwordHass)

                // Remove user from local storage.
                employeeLocalStorage.removeFromLocalStorage(employeeLocalStorage.NAME)

                // Remove logged in user.
                dispatch(removeUser())

                // Change the particulars of the logged in user.
                // dispatch(updatingUser(update))
                // Allow the user to relogin.
                navigate('/login')
            } catch (error) {
                if (error.status === 401) {
                    post(`Failed to Update: ${error.message}`, 'error')
                    console.log('Error ---->', error)
                } else {
                    console.log('Error ---->', error)
                }
            }
        }
    }

    return (
        <>
            <div className='employee-content'>
                <NavigateBack />
            </div>
            <br />
            <div className='employee-content'>
                <form>
                    <fieldset>
                        <legend>Confirm Password</legend>
                        <label>
                            <strong>Old Password:</strong>
                            <br />
                            <input
                                type='password'
                                name='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder='Old Password'
                                required='required'
                            />
                        </label>
                        <br />
                    </fieldset>

                    <br />

                    <fieldset>
                        <legend>Create New Password</legend>
                        <label>
                            <strong>New Password:</strong>
                            <br />
                            <input
                                type='password'
                                name='new password'
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                                placeholder='New Password'
                                required='required'
                            />
                        </label>
                        <br />
                        <br />
                        <label>
                            <strong>Confirm New Password:</strong>
                            <br />
                            <input
                                type='password'
                                name='confirm password'
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                placeholder='New Password'
                                required='required'
                            />
                        </label>
                        <br />
                    </fieldset>
                </form>
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

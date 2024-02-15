import { useState } from 'react'
import { useDispatch } from 'react-redux'
import NavigateBack from '../NavigateBack'
import Notification from '../Notification'
import { useNavigate } from 'react-router-dom'
import { updatingUser } from '../../reducers/userReducer'
import { updateEmployee } from '../../reducers/employeeReducer'
import {
    showNotification,
    disableNotification
} from '../../reducers/notificationReducer'

const DepartmentList = ({ department }) => {
    return <li>{department.name}</li>
}

const UserEditor = ({ user }) => {
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [username, setUserName] = useState(user.surname)

    const navigate = useNavigate()
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

    const handleUpdate = async e => {
        e.preventDefault()

        const newUpdatedFields = {
            ...user,
            name: name,
            email: email,
            surname: username
        }

        try {
            // Send updates to the database.
            console.log('New Values ------>', newUpdatedFields)
            const updatedUser = await dispatch(
                updateEmployee({
                    employeeId: user.id,
                    employeeObject: newUpdatedFields
                })
            ).unwrap()

            // Update the user reducer for the logged in user.
            dispatch(updatingUser(updatedUser))

            // Navigate to the previous tab.
            navigate(-1)
        } catch (exception) {
            // console.log(exception)
            post(`Failed to Update ${exception}`, 'error')
        }
    }

    // const loggedInUser = useSelector(state => state.user.userObject)
    return (
        <>
            <div className='employee-content'>
                <NavigateBack />
                <div>
                    <input
                        type='button'
                        value='Change Password'
                        onClick={() => navigate(`/user/${user.id}/change-password`)}
                    />
                </div>
            </div>
            <br />
            <form id='editor-form'>
                <div className='employee-content'>
                    <div className='content'>
                        <div className='column-one'>
                            <fieldset>
                                <legend>Personal Details:</legend>
                                <div>
                                    <label id='user-detail'>
                                        <strong>{user.name}</strong>
                                    </label>
                                    <label id='user-detail'>
                                        <strong>{user.surname}</strong>
                                    </label>
                                    <br />
                                    <br />
                                    <label>
                                        <strong>Name:</strong>
                                        <input
                                            type='text'
                                            name='name'
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            placeholder='Full Name'
                                            required='required'
                                            id='input-text'
                                        />
                                    </label>
                                    <label>
                                        <strong>Username:</strong>
                                        <input
                                            type='text'
                                            name='username'
                                            value={username}
                                            onChange={e => setUserName(e.target.value)}
                                            placeholder='Username'
                                            required='required'
                                            id='input-text'
                                        />
                                    </label>
                                </div>
                                <br />
                                <br />
                                <br />
                                <label>
                                    <strong>{user.email}</strong>
                                </label>
                                <br />
                                <br />
                                <label>
                                    <strong>Email:</strong>
                                    <input
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder='Email'
                                        required='required'
                                    />
                                </label>
                                <br />
                                <br />
                            </fieldset>
                        </div>
                        <div className='column-two'>
                            <h4>Departments</h4>
                            <div>
                                <ul id='a'>
                                    {user.department.map(depart => (
                                        <DepartmentList department={depart} key={depart.id} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='employee-content'>
                    <input type='submit' value='Update User' onClick={handleUpdate} />
                </div>
            </form>
            <div className='employee-content'>
                <Notification />
            </div>
        </>
    )
}

export default UserEditor

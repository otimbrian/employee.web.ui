// import { FaArrowLeft } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { useState } from 'react'
import NavigateBack from '../NavigateBack'
import Notification from '../Notification'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createEmployee } from '../../reducers/employeeReducer'
import {
    showNotification,
    disableNotification
} from '../../reducers/notificationReducer'

const EmployeeForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const [department, setDepartment] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const departments = useSelector(state => state.departments.department)

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

    const employeeCreate = async event => {
        event.preventDefault()

        const newEmployee = {
            name: name,
            email: email,
            surname: username,
            password: password,
            department: department,
            isAdmin: isAdmin
        }

        console.log('=====Trying to create Employee ======')
        console.log('New employee ------>', newEmployee)

        try {
            const createdEmployee = await dispatch(
                createEmployee(newEmployee)
            ).unwrap()
            console.log('Created Employee ----->', createdEmployee)

            //todo <-----------Make sure you add to local storage inorder to manage refresh actions.

            // After creating, navigate back to
            // User display
            navigate('/employees')
        } catch (exception) {
            if (
                exception.error.includes('to be unique') &&
                exception.error.startsWith('Employee validation failed:')
            ) {
                post('Duplicate Already Exists', 'error')
            }
        }
    }

    const handleDepartment = e => {
        e.preventDefault()
        // console.log("Department value ---> ", e.target.value)
        const selected = JSON.parse(e.target.value)
        const found = department.find(dep => dep.id === selected.id)

        if (!found) {
            setDepartment([...department, selected])
        }
    }

    return (
        <>
            <div className='employee-content'>
                <NavigateBack />
            </div>
            <br />
            <div className='employee-content'>
                <h4>Employee Form</h4>

                <form>
                    <fieldset>
                        <legend>Personal Details:</legend>
                        <label>
                            <strong>Name:</strong>
                            <input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                type='text'
                                name='name'
                                placeholder='Full Name'
                                required='required'
                            />
                        </label>
                        <label>
                            <strong>Username:</strong>
                            <input
                                type='text'
                                value={username}
                                onChange={e => setUserName(e.target.value)}
                                name='username'
                                placeholder='Username'
                                required='required'
                            />
                        </label>
                        <br />
                        <br />
                        <br />
                        <label>
                            <strong>Email:</strong>
                            <input
                                type='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                name='email'
                                placeholder='Email'
                                required='required'
                            />
                        </label>
                        <label>
                            <strong>Password:</strong>
                            <input
                                type='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                name='password'
                                placeholder='Password'
                                required='required'
                            />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Technical:</legend>
                        <label>
                            <strong>Department:</strong>
                            <select
                                name='department'
                                onChange={handleDepartment}
                                multiple='multiple'
                            >
                                {departments.map(department => (
                                    <option
                                        key={department.id}
                                        value={JSON.stringify(department)}
                                    >
                                        {department.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            <strong>Admin:</strong>
                            <select
                                name='adminStatus'
                                required='required'
                                onChange={e => setIsAdmin(e.target.value === 'true')}
                            >
                                <option value='true'>Admin</option>
                                <option value='false'>Not Admin</option>
                            </select>
                        </label>
                        <br />
                        <br />
                        <p>
                            (You can select more than one option by holding down control on a
                            PC or command key on a Mac while selecting different departments.)
                        </p>
                    </fieldset>
                    <fieldset>
                        {/* {// todo -------> Make sure this is exported as a component } */}
                        <input
                            type='submit'
                            value='Create Employee'
                            onClick={employeeCreate}
                        />
                    </fieldset>
                </form>
            </div>
            <div className='employee-content'>
                <Notification />
            </div>
        </>
    )
}

export default EmployeeForm

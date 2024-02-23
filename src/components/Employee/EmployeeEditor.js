import { useState } from 'react'
import NavigateBack from '../NavigateBack'
import { useNavigate } from 'react-router-dom'
import { FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'
import { updateEmployee } from '../../reducers/employeeReducer'

const DepartmentList = ({ department, handleDelete }) => {
    return (
        <li>
            {department.name}{' '}
            <button onClick={handleDelete}>
                <FcDeleteDatabase />
            </button>
        </li>
    )
}

const EmployeeEditor = ({ user }) => {
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    // const [password, setPassword] = useState('')
    const [username, setUserName] = useState(user.surname)
    // const [isAdmin, setIsAdmin] = useState(false)
    const [department, setDepartment] = useState(user.department)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Handle department deletion.
    // From the list of departments to which a user belongs.
    const handleDelete = id => {
        setDepartment(department.filter(depart => depart.id !== id))
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

    // Handler for updating the employee.
    const handleUpdate = async e => {
        e.preventDefault()

        const newUser = {
            ...user,
            name: name,
            surname: username,
            department: department,
            email: email
        }

        console.log('User to be created ----->', newUser)
        try {
            const updatedEmployee = await dispatch(
                updateEmployee({ employeeId: user.id, employeeObject: newUser })
            ).unwrap()
            console.log('Updated user ---->', updatedEmployee)
            //todo <----- Add to local storage.

            navigate('/employees')
        } catch (exception) {
            console.log('Exception ocurred ----->', exception)
        }
    }

    const departments = useSelector(state => state.departments.department)
    const loggedInUser = useSelector(state => state.user.userObject)
    console.log('Logged in user ---->', loggedInUser)
    return (
        <>
            <div className='employee-content'>
                <NavigateBack />
                {/* <Link to="/user">
                    <FaArrowLeft />Back
                </Link> */}
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
                            {loggedInUser.isAdmin ? (
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
                                </fieldset>
                            ) : null}
                        </div>
                        <div className='column-two'>
                            <h4>Departments</h4>
                            <div>
                                <ul id='department-list'>
                                    {department.map(depart => (
                                        <DepartmentList
                                            department={depart}
                                            key={depart.id}
                                            handleDelete={() => handleDelete(depart.id)}
                                        />
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
        </>
    )
}

export default EmployeeEditor

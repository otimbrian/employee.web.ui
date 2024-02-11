import ListCard from '../ListCard'
import { useState } from 'react'
import NavigateBack from '../NavigateBack'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateDepartment } from '../../reducers/departmentReducer'
// import Notification from '../Notification'
import { showNotification, disableNotification } from '../../reducers/notificationReducer'

const DepartmentEdit = ({ department }) => {
    const [name, setName] = useState(department.name)
    const [employee, setEmployee] = useState(department.employees)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = id => {
        setEmployee(employee.filter(e => e.id !== id))
    }

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

    const handleDepartmentUpdate = async e => {
        e.preventDefault()

        const updatedDepartment = {
            ...department,
            name: name,
            employees: employee
        }

        try {
            const update = await dispatch(
                updateDepartment({
                    departmentId: department.id,
                    departmentObject: updatedDepartment
                })
            ).unwrap()
            console.log('Updated department ----->', update)
            // todo <---- Update deprtment local storage.

            navigate('/department')
        } catch (exception) {
            console.log('Error in updating department', exception)
            
        }
    }

    const handleEmployee = e => {
        e.preventDefault()
        // console.log("Department value ---> ", e.target.value)
        const selected = JSON.parse(e.target.value)
        const found = employee.find(dep => dep.id === selected.id)

        if (!found) {
            setEmployee([...employee, selected])
        }
    }

    const employees = useSelector(state => state.employees.employees)
    return (
        <>
            <div className='employee-content'>
                <NavigateBack />
            </div>
            <br />
            <div className='employee-content'>
                <h4>Department Editor</h4>
                <div className='department-column-one'>
                    <form>
                        <fieldset id='dep-field'>
                            <legend>Department Form</legend>
                            <div>
                                <label id='user-detail'>
                                    <strong>{department.name}</strong>
                                </label>
                                <br />
                                <label>
                                    <strong>Name:</strong>
                                    <input
                                        type='text'
                                        name='name'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder='Department Name'
                                        required='required'
                                    />
                                </label>
                                <br />
                                <br />
                                <label id='user-detail'>
                                    <strong>Employees</strong>
                                </label>
                                <br />
                                <label>
                                    <strong>Employees:</strong>
                                    <select
                                        name='employees'
                                        onChange={handleEmployee}
                                        multiple='multiple'
                                    >
                                        {employees.map(employee => (
                                            <option
                                                key={employee.id}
                                                value={JSON.stringify(employee)}
                                            >
                                                {employee.name}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className='column-two' id='employee-display-'>
                    <h4>Employees</h4>
                    <div>
                        <ul id='department-list'>
                            {employee.map(empl => (
                                <ListCard
                                    key={empl.id}
                                    employee={empl}
                                    handleDelete={() => handleDelete(empl.id)}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='employee-content'>
                <input
                    type='submit'
                    value='Update Department'
                    onClick={handleDepartmentUpdate}
                />
            </div>
        </>
    )
}

export default DepartmentEdit

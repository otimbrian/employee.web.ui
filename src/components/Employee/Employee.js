import { useState } from 'react'
import SelectForm from './SelectForm.js'
import EmployeeList from './EmployeeList.js'
import { FaUserPlus } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { UserCardFullDisplay } from '../User/Card.js'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../../reducers/userReducer.js'
import { employeeLocalStorage } from '../../services/shared.js'
import { deleteEmployee } from '../../reducers/employeeReducer.js'

const Employee = () => {
    const [selectedUser, setSelectedUser] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUserSelection = employee => {
        setSelectedUser(employee)
    }

    // Delete Employee handler
    const handleDeleteEmployee = async employeeId => {
        console.log('Deleting an employee. ---->', employeeId)

        try {
            // Dispatch a delete request.
            await dispatch(deleteEmployee(employeeId)).unwrap()

            // If successful, remove the employee
            // From the selected employee
            setSelectedUser(null)
        } catch (exception) {
            if (exception.error === 'token expired') {
                // If the token is expired.
                // Remove the user from the reducer
                dispatch(removeUser())

                // Remove token from local storage.
                employeeLocalStorage.removeFromLocalStorage(employeeLocalStorage.NAME)
                navigate('/login')
            }
        }
    }

    const employees = useSelector(state => state.employees.employees)
    console.log('Employees ---->', employees)
    return (
        <>
            <div className='employee-content'>
                <SelectForm />
            </div>
            <div className='employee-content'>
                <Link to='create'>
                    <span>
                        <FaUserPlus />
                        <br />
                        Create Employee
                    </span>
                </Link>
            </div>
            <div className='content'>
                <div className='employee-content'>
                    <EmployeeList employees={employees} selected={handleUserSelection} />
                    <div className='column2'>
                        <UserCardFullDisplay
                            user={selectedUser}
                            handleDeleteEmployee={handleDeleteEmployee}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Employee

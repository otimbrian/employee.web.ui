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
    const [filterByDepartment, setFilterByDepartment] =
        useState('All Departments')
    const [filterByName, setFilterByName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Handler for user Selection for details.
    const handleUserSelection = employee => {
        setSelectedUser(employee)
    }

    const handleFilterByDepartment = e => {
        e.preventDefault()

        // set the value of department to filter by
        setFilterByDepartment(e.target.value)
        // console.log('Department id ------>', e.target.value)

        // Set the selected user if available to null
        setSelectedUser(null)
    }

    const handleFilterByName = e => {
        e.preventDefault()

        setFilterByName(e.target.value)
        // console.log("Value of name ----->",e.target.value)

        // Set the selected user if avalable to null
        setSelectedUser(null)
    }

    // Delete Employee handler
    const handleDeleteEmployee = async employeeId => {
        // console.log('Deleting an employee. ---->', employeeId)

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
    const employeesByDepartment =
        filterByDepartment === 'All Departments'
            ? employees
            : employees.filter(employee =>
                employee.department.find(
                    department => department.id === filterByDepartment
                )
            )
    const employeeByName =
        filterByName === ''
            ? employeesByDepartment
            : employeesByDepartment.filter(employee =>
                employee.name.toLowerCase().includes(filterByName.toLowerCase())
            )
    // console.log('Employees ---->', employees)
    return (
        <>
            <div className='employee-content'>
                <SelectForm
                    setFilterByDepartment={handleFilterByDepartment}
                    setFilterByName={handleFilterByName}
                />
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
                    <EmployeeList
                        employees={employeeByName}
                        selected={handleUserSelection}
                    />
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

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SelectForm from './SelectForm.js'
import EmployeeList from './EmployeeList.js'
import { useDispatch, useSelector } from 'react-redux'
import { UserCardFullDisplay } from '../User/Card.js'
import { FaListUl, FaUserPlus } from 'react-icons/fa6'
import { initializeEmployees } from '../../reducers/employeeReducer.js'

const Employee = () => {
    const [selectedUser, setSelectedUser] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        async function callbackFunction() {
            const employees = await dispatch(initializeEmployees()).unwrap()
            console.log('Employees received ----->', employees)
        }

        callbackFunction()
    }, [dispatch])

    const handleUserSelection = employee => {
        setSelectedUser(employee)
    }

    const employees = useSelector(state => state.employees.employees)
    console.log('Employees ---->', employees)
    return (
        <>
            <div className='employee-content'>
                <SelectForm />
            </div>
            <div className='content'>
                <div className='employee-content'>
                    <div className='column1'>
                        <ul className='nav'>
                            <li>
                                <Link to='show'>
                                    <span>
                                        <FaListUl />
                                        <br />
                                        Show
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to='create'>
                                    <span>
                                        <FaUserPlus />
                                        <br />
                                        Create
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <EmployeeList employees={employees} selected={handleUserSelection} />
                    <div className='column2'>
                        <h4>Selected</h4>
                        <UserCardFullDisplay user={selectedUser} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Employee

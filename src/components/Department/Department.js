import {
    FaBuildingColumns,
    FaUserGroup,
    FaFeatherPointed,
    FaBars
} from 'react-icons/fa6'
import { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { DisplayNumber } from './DisplayNumber'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../../reducers/userReducer'
import { employeeLocalStorage } from '../../services/shared'
import { deleteDepartment } from '../../reducers/departmentReducer'

const DepartmentCard = ({ department, selected }) => {
    return (
        <li>
            <div className='department-card' onClick={() => selected(department)}>
                <article>
                    <FaBuildingColumns />
                </article>
                <div className='department-container'>
                    <h4 id='cap'>
                        <i>{department.name}</i>
                    </h4>
                    <p>
                        <FaUserGroup /> <strong>{department.employees.length}</strong>{' '}
                        <br />
                        <DisplayNumber department={department} />
                    </p>
                </div>
            </div>
        </li>
    )
}

const EmployeeList = ({ employees }) => {
    return (
        <ul id='depart-ul'>
            {employees.map(employee => (
                <li key={employee.id}>{employee.name}</li>
            ))}
        </ul>
    )
}

const SelectedDepartment = ({ department, deleteDepartment }) => {
    return (
        <div className='selected-department'>
            <article>
                <FaBuildingColumns />
            </article>
            <div className='depart-container'>
                <h4>
                    <i>{department.name}</i>
                </h4>
                <p>
                    <FaUserGroup /> <strong>{department.employees.length}</strong> <br />
                    <DisplayNumber department={department} />
                </p>

                <p>
                    <strong>EMPLOYEES</strong>
                </p>
                <EmployeeList employees={department.employees} />
            </div>
            <div className='links'>
                <Link to={`${department.id}`}>
                    <FaBars /> <br />
                    View
                </Link>
                <Link to={`/department/edit/${department.id}`}>
                    <FaFeatherPointed />
                    <br /> Edit
                </Link>
                <Link onClick={() => deleteDepartment(department.id)}>
                    <AiFillDelete />
                    <br />
                    Delete
                </Link>
            </div>
        </div>
    )
}
const Department = () => {
    const [selectedDepartment, setSelectedDepartment] = useState(null)
    const departments = useSelector(state => state.departments.department)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const selectHandler = department => {
        setSelectedDepartment(department)
    }

    const HandleDeleteDepartment = async id => {
        console.log('Deleting department with id ------>', id)

        try {
            // Dispatch to delete
            await dispatch(deleteDepartment(id)).unwrap()

            // Navigate to the department page.
            // navigate("/departments")
            setSelectedDepartment(null)
        } catch (exception) {
            if (exception.error === 'token expired') {
                dispatch(removeUser())
                employeeLocalStorage.removeFromLocalStorage(employeeLocalStorage.NAME)
                navigate('/login')
            }
        }
    }

    console.log('Departments --->', departments)

    return (
        <>
            <div className='employee-content'>
                <Link to='/department/create'>Create New Department</Link>
            </div>
            <div className='employee-content'>
                <h4 id='depart-head'>Department</h4>
                <div className='depart'>
                    {/* {departments ? ( */}
                    <div className='department-list'>
                        <ul id='department-card-list'>
                            {departments.map(depart => (
                                <DepartmentCard
                                    department={depart}
                                    key={depart.id}
                                    selected={selectHandler}
                                />
                            ))}
                        </ul>
                    </div>
                    {/* ) : null} */}
                    {selectedDepartment ? (
                        <div className='second-column'>
                            <SelectedDepartment
                                department={selectedDepartment}
                                deleteDepartment={HandleDeleteDepartment}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}
export default Department

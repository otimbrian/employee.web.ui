import {
    FaBuildingColumns,
    FaUserGroup,
    FaFeatherPointed,
    FaBars
} from 'react-icons/fa6'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
                        Employees
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

const SelectedDepartment = ({ department }) => {
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
                    Employees
                </p>

                <p>
                    <strong>EMPLOYEES</strong>
                </p>
                <EmployeeList employees={department.employees} />
            </div>
            <div className='links'>
                <Link to='/user'>
                    <FaBars /> View
                </Link>
                <Link to={`/department/edit/${department.id}`}>
                    <FaFeatherPointed /> Edit
                </Link>
            </div>
        </div>
    )
}
const Department = () => {
    const [selectedDepartment, setSelectedDepartment] = useState(null)

    const selectHandler = department => {
        setSelectedDepartment(department)
    }
    const departments = useSelector(state => state.departments.department)
    return (
        <>
            <div className='employee-content'>
                <Link to='/department/create'>Create New Department</Link>
            </div>
            <div className='employee-content'>
                <h4 id='depart-head'>Department</h4>
                <div className='depart'>
                    {departments ? (
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
                    ) : null}
                    {selectedDepartment ? (
                        <div className='second-column'>
                            <SelectedDepartment department={selectedDepartment} />
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}
export default Department

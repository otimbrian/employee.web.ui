import { FaBuildingColumns, FaUserGroup } from 'react-icons/fa6'
import ButtonLink from '../ButtonLink'
import NavigateBack from '../NavigateBack'
import { DisplayNumber } from './DisplayNumber'

const EmployeeList = ({ employees }) => {
    return (
        <ul>
            {employees.map(employee => (
                <li key={employee.id}>{employee.name}</li>
            ))}
        </ul>
    )
}

const DepartmentView = ({ department }) => {
    return (
        <>
            <div className='employee-content'>
                <NavigateBack />
            </div>
            <br />
            <br />
            <div className='employee-content'>
                <div className='department-view'>
                    <article>
                        <FaBuildingColumns />
                    </article>
                    <div className='depart-view-container'>
                        <h4>
                            <i>{department.name}</i>
                        </h4>
                        <p>
                            <FaUserGroup /> <strong>{department.employees.length}</strong>{' '}
                            <br />
                            <DisplayNumber department={department}/>
                        </p>

                        <div>
                            <p>
                                <strong>EMPLOYEES</strong>
                            </p>
                            <EmployeeList employees={department.employees} />
                        </div>
                    </div>
                </div>
            </div>
            <ButtonLink
                link={`/department/edit/${department.id}`}
                value={'Edit department'}
            />
        </>
    )
}

export default DepartmentView

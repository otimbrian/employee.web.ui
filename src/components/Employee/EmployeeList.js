import UserCard from '../User/Card'

const employeeList = ({ employees, selected }) => {
    return (
        <div className='column'>
            <h4 id='list-heading'>Employee List</h4>

            <ul id='user-list-li'>
                {employees.map(employee => (
                    <li key={employee.id}>
                        <button onClick={() => selected(employee)}>
                            <UserCard user={employee} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default employeeList

import avatar from '../../static/images/avatar/avatar.jpeg'
import {
    FaEnvelope,
    FaBuildingColumns,
    FaBars,
    FaFeatherPointed
} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'

// User card.
const UserCard = ({ user }) => {
    return (
        <div className='card'>
            <img src={avatar} alt='Avatar' />
            <div className='container'>
                <h4 id='cap'>
                    <i>{user.name}</i>
                </h4>
                <p id='email'>
                    <FaEnvelope /> <strong>{user.email}</strong> <br />
                    Email
                </p>
            </div>
        </div>
    )
}

// List for the departments in user selected card.
const DepartmentList = ({ department }) => {
    return <li>{department.name}</li>
}

// When selected.
// Disply almost all user details
export const UserCardFullDisplay = ({ user, handleDeleteEmployee }) => {
    return user ? (
        <>
            <div className='user-card'>
                <img src={avatar} alt='Avatar' />
                <div className='container'>
                    <h4 id='cap'>
                        <i>{user.name}</i>
                    </h4>
                    <p>
                        <FaEnvelope /> <strong>{user.email}</strong> <br />
                        Email
                    </p>

                    <p>
                        <FaBuildingColumns /> <strong>Departments</strong>
                        <br />
                    </p>
                    <ul id='a'>
                        {user.department.map(department => (
                            <DepartmentList department={department} key={department.id} />
                        ))}
                    </ul>
                </div>

                <div className='links'>
                    <Link to={`/user/${user.id}`}>
                        <FaBars /> <br/>View
                    </Link>
                    <Link to={`/${user.id}/edit`}>
                        <FaFeatherPointed /><br /> Edit
                    </Link>
                    <Link onClick={() => handleDeleteEmployee(user.id)}><AiFillDelete /><br />Delete</Link>
                </div>
            </div>
        </>
    ) : null
}

export default UserCard

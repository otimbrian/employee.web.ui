import ButtonLink from '../ButtonLink'
import UserDisplay from './UserDisplay'
import { FaUser } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { employeeLocalStorage } from '../../services/shared'
import { removeUser } from '../../reducers/userReducer'

const User = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.userObject)

    const logout = () => {
        // console.log('loggin out.')
        employeeLocalStorage.removeFromLocalStorage(employeeLocalStorage.NAME)
        dispatch(removeUser())
        navigate('/login')
    }
    return (
        <>
            <div className='employee-content' id='logout'>
                <button id='user-logout' onClick={logout}>
                    <FaUser />
                    Logout
                </button>
            </div>
            <br />
            <div className='employee-content'>
                <UserDisplay user={user} />
            </div>
            <ButtonLink link={'/employee/edit'} value={'Edit User'} />
        </>
    )
}

export default User

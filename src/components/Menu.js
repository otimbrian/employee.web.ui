import { Link } from 'react-router-dom'
import {
    FaUser,
    FaHouse,
    FaUserGroup,
    FaRegCircleUp,
    FaRegCircleDown,
    FaEnvelope
} from 'react-icons/fa6'

// , FaBars, FaRegUser

const Menu = ({ user }) => {
    return (
        <ul id='navigation'>
            {user ? (
                <>
                    {!user.isAdmin ? (
                        <>
                            <li
                                aria-current={
                                    window.location.pathname === '/' ? 'page' : undefined
                                }
                            >
                                <Link to='/'>
                                    <FaHouse />
                                    Home
                                </Link>
                            </li>
                            <li
                                aria-current={
                                    window.location.pathname === '/logout' ? 'page' : undefined
                                }
                            >
                                <Link to='/logout'>
                                    <FaRegCircleDown />
                                    Logout
                                </Link>
                            </li>
                            <li
                                aria-current={
                                    window.location.pathname === '/user' ? 'page' : undefined
                                }
                            >
                                <Link to='/user'>
                                    <FaUser />
                                    {user.surname}
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li
                                aria-current={
                                    window.location.pathname === '/' ? 'page' : undefined
                                }
                            >
                                <Link to='/'>
                                    <FaHouse />
                                    Home
                                </Link>
                            </li>
                            <li
                                aria-current={
                                    window.location.pathname === '/employees' ? 'page' : undefined
                                }
                            >
                                <Link to='/employees'>
                                    <FaUserGroup />
                                    Employee
                                </Link>
                            </li>
                            <li
                                aria-current={
                                    window.location.pathname === '/department'
                                        ? 'page'
                                        : undefined
                                }
                            >
                                <Link to='/department'>
                                    <FaEnvelope />
                                    Department
                                </Link>
                            </li>

                            <li
                                aria-current={
                                    window.location.pathname === '/logout' ? 'page' : undefined
                                }
                            >
                                <Link to='/logout'>
                                    <FaRegCircleDown />
                                    Logout
                                </Link>
                            </li>
                            <li
                                aria-current={
                                    window.location.pathname === '/user' ? 'page' : undefined
                                }
                            >
                                <Link to='/user'>
                                    <FaUser />
                                    {user.surname}
                                </Link>
                            </li>
                            {/* <li aria-current={window.location.pathname === '/department' ? 'page' : undefined}>
                                <Link to='/login'>
                                    <FaRegCircleUp />
                                    Login
                                </Link>
                            </li> */}
                        </>
                    )}
                </>
            ) : null}
        </ul>
    )
}

export default Menu

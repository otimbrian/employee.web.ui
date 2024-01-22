import { Link } from "react-router-dom"
import { FaUser, FaHouse, FaUserGroup, FaRegCircleUp, FaRegCircleDown, FaEnvelope } from "react-icons/fa6";

// , FaBars, FaRegUser

const Menu = () => {
    return (
   
        <ul id="navigation" >
            <li>
                <Link to='/'>
                    <FaHouse />
                    Home
                </Link>
            </li>
            <li>
                <Link to='/employees'>
                    <FaUserGroup />
                    Employees
                </Link>
            </li>
            <li>
                <Link to='/department'>
                <FaEnvelope />
                    Department
                </Link>
            </li>
            <li>
                <Link to='/login'>
                    <FaRegCircleUp />
                    Login
                </Link>
            </li>
            <li>
                <Link to='/logout'>
                    <FaRegCircleDown />
                    Logout
                </Link>
            </li>
            <li>
                <Link to='/user'>
                    <FaUser />
                    User
                </Link>
            </li>
        </ul>
    )
}

export default Menu

import { Link } from "react-router-dom"


const Menu = () => {
    return (
        // <nav className="nav-bar">
        <div className='nav-container'>
            <div>
                <><Link to='/'>Home</Link></>
            </div>
            <div className="nav-element">
                <ul>
                    <li><Link to='/employee'>Employee</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>
                    <li><Link to='/user'>User</Link></li>
                </ul>
            </div>
        </div>
        // </nav>
    )
}

export default Menu

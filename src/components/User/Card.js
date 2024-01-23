import avatar from "../../static/images/avatar/avatar.jpeg"
import { FaEnvelope, FaBuildingColumns, FaBars, FaFeatherPointed } from "react-icons/fa6";
import { Link } from "react-router-dom";

const UserCard = () => {
    return (
        <div className="card">
            <img src={avatar} alt="Avatar" />
            <div className="container">
                <h4 id="cap"><i>OTIM BRIAN</i></h4>
                <p><FaEnvelope /> <strong>name@email.com</strong> <br />
                    Email</p>
            </div>
        </div>
    )
}

const DepartmentList = () => {
    return (
        <ul id="a">
            <li>department one</li>
            <li>department two</li>
        </ul>
    )
}

export const UserCardFullDisplay = () => {
    return (
        <div className="user-card">
            <img src={avatar} alt="Avatar" />
            <div className="container">
                <h4 id="cap"><i>OTIM BRIAN</i></h4>
                <p><FaEnvelope /> <strong>name@email.com</strong> <br />
                    Email</p>

                <p><FaBuildingColumns /> <strong>Departments</strong><br /></p>
                <DepartmentList />

                <div className="links">
                    <Link to="/user"><FaBars /> View</Link>
                    <Link to="/employee/edit"><FaFeatherPointed /> Edit</Link>
                </div>
            </div>

        </div>
    )
}

export default UserCard
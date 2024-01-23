import { Link } from "react-router-dom"
import { FaEnvelope, FaBuildingColumns } from "react-icons/fa6";
import UserCard from "../User/Card";

const employeeList = () => {
    return (
        <div className="column">
            <h4 id="list-heading">Employee List</h4>
            <Link to='/user'>
                <UserCard />
            </Link>
            <Link to='/user'>
                <UserCard />
            </Link>
            <Link to='/user'>
                <UserCard />
            </Link>
            <Link to='/user'>
                <div className="employee-list-display">
                    <h4 id="cap"><i>OTIM BRIAN</i></h4>
                    <FaEnvelope /> <strong>name@email.com</strong> <br />
                    Email
                    <br />
                    <br />
                    <FaBuildingColumns /> <strong>Department one.</strong><br />
                    Department
                </div>
            </Link>
        </div>
    )
}

export default employeeList
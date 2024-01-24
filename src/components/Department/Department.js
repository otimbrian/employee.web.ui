import { FaBuildingColumns, FaUserGroup, FaFeatherPointed, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DepartmentCard = () => {
    return (
        <div className="department-card">
            <article><FaBuildingColumns /></article>
            <div className="department-container">
                <h4 id="cap"><i>DEPARTMENT ONE</i></h4>
                <p><FaUserGroup /> <strong>3</strong> <br />
                    Employees</p>
            </div>
        </div>
    )
}

const EmployeeList = () => {
    return (
        <ul id="depart-ul">
            <li>department one</li>
            <li>department two</li>
        </ul>
    )
}

const SelectedDepartment = () => {
    return (
        <div className="selected-department">
            <article><FaBuildingColumns /></article>
            <div className="depart-container">
                <h4><i>DEPARTMENT ONE</i></h4>
                <p><FaUserGroup /> <strong>3</strong> <br />
                    Employees</p>

                <p><strong>EMPLOYEES</strong></p>
                <EmployeeList />
            </div>
            <div className="links">
                <Link to="/user"><FaBars /> View</Link>
                <Link to="/department/edit"><FaFeatherPointed /> Edit</Link>
            </div>

        </div>
    )
}
const Department = () => {
    return (
        <>
            <div className="employee-content">
                <Link to="/department/create">Create New Department</Link>
            </div>
            <div className="employee-content">
                <h4 id="depart-head">Department</h4>
                <div className="depart">
                    <div className="department-list">
                        <ul id="department-card-list">
                            <li><DepartmentCard /></li>
                            <li><DepartmentCard /></li>
                            <li><DepartmentCard /></li>
                        </ul>
                    </div>
                    <div className="second-column">
                        <SelectedDepartment />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Department
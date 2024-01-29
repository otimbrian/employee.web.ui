import { FaListUl, FaUserPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import EmployeeList from './EmployeeList.js'
import SelectForm from "./SelectForm.js";
import { UserCardFullDisplay } from "../User/Card.js";

// FaMagnifyingGlass, FaPrescriptionBottle

const Employee = () => {
    return (
        <>
            <div className="employee-content">
                <SelectForm />
            </div>
            <div className="content">
                <div className="employee-content" >
                    <div className="column1">
                        <ul className="nav">
                            <li>
                                <Link to="show">
                                    <span>
                                        <FaListUl /><br />
                                        Show
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="create">
                                    <span>
                                        <FaUserPlus /><br />
                                        Create
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <EmployeeList />
                    <div className="column2">
                        <h4>Selected</h4>
                        <UserCardFullDisplay />
                        {/* <div id="employee-list-display">
                            <h4 id="cap"><i>OTIM BRIAN</i></h4>
                            <FaEnvelope /> <strong>name@email.com</strong> <br />
                            Email
                            <br />
                            <br />
                            <FaBuildingColumns /> <strong>Department one.</strong><br />
                            Department
                            <div>
                            <Link to="/user"><FaBars /> View</Link>
                            <Link to="edit"><FaFeatherPointed /> Edit</Link>
                            
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Employee
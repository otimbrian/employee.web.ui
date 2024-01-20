import { FaListUl, FaUserPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import EmployeeList from './EmployeeList.js'
import EmployeeForm from './EmployeeForm.js'

// FaMagnifyingGlass, FaPrescriptionBottle
const employeeDemon = {
    name: "Otim",
    surname: "Brian",
    email: "testemil@gmail.com",
    departments: [
        {
            name: "department 1",
            employes: [
                {
                    name: "otim"
                }
            ]
        }
    ]
}

const Employee = () => {
    return (
        <div className="content">
            <div className="employee-content" >
                <div className="column1">
                    <ul class="nav">
                        <li>
                            <Link to="">
                                <span>
                                    <FaListUl />
                                    Show
                                </span>
                            </Link>
                        </li>
                        <li>
                            <span>
                                <FaUserPlus />
                                Create
                            </span>
                        </li>

                    </ul>
                </div>
                <EmployeeList />
                <div className="column1">
                    <h4>column1</h4>
                </div>
            </div> <br />
        </div>
    )
}


export default Employee
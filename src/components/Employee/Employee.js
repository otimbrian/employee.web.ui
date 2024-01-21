import { FaListUl, FaUserPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import EmployeeList from './EmployeeList.js'
import SelectForm from "./SelectForm.js";
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
        <>
            <div className="employee-content">
                <SelectForm />
            </div>
            <div className="content">
                <div className="employee-content" >
                    <div className="column1">
                        <ul class="nav">
                            <li>
                                <Link to="show">
                                    <span>
                                        <FaListUl />
                                        Show
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="create">
                                    <span>
                                        <FaUserPlus />
                                        Create
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <EmployeeList />
                    <div className="column1">
                        <h4>column1</h4>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Employee
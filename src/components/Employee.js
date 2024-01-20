import { FaListUl, FaUserPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

// FaMagnifyingGlass, FaPrescriptionBottle

const Employee = () => {
    return (
        <div className="Employee">
            <div className="employee-content">
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
            <div className="employee-content">
                <h4>Employee Content</h4>
            </div>
        </div>
    )
}


export default Employee
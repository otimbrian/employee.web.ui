import { Link } from "react-router-dom"

const employeeList = () => {
    return (
        <div className="column">
            <h4 id="list-heading">Employee List</h4>
            <Link to="/employee">
                <div className="employee-list-display">
                    <h3>Otim Brian</h3>
                    <h4>Department</h4>
                </div>
            </Link>
            <div className="employee-list-display">
                <h3>Otim Brian</h3>
                <h4>Department</h4>
            </div>
            <div className="employee-list-display">
                <h3>Otim Brian</h3>
                <h4>Department</h4>
            </div>
            <div className="employee-list-display">
                <h3>Otim Brian</h3>
                <h4>Department</h4>
            </div>
        </div>
    )
}

export default employeeList
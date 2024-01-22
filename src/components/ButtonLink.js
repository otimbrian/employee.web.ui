import { Link } from "react-router-dom"

const ButtonLink = () => {
    return(
        <div className="employee-content">
            {/* <input type="button" value="Edit User" /> */}
            <Link to="/employee/edit" id="submit">Edit User</Link>
        </div>
    )
}

export default ButtonLink
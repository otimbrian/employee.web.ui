import { Link } from "react-router-dom"

const ButtonLink = ({value, link}) => {
    return(
        <div className="employee-content">
            {/* <input type="button" value="Edit User" /> */}
            <Link to={link} id="submit">{value}</Link>
        </div>
    )
}

export default ButtonLink

import ButtonLink from "../ButtonLink"
import UserDisplay from "./UserDisplay"
import { useSelector } from 'react-redux'
import { FaUser } from "react-icons/fa6";

const User = () => {
    const user = useSelector(state => state.user.userObject)
    console.log("user in user display ---->", user);

    const logout = () => {
        console.log("loggin out.");
    }
    return (
        <>
            <div className="employee-content" id="logout">
                <button id="user-logout" onClick={logout}><FaUser/>Logout</button>
            </div>
            <br />
            <div className="employee-content">
                <UserDisplay user={user} />
            </div>
            <ButtonLink link={"/employee/edit"} value={"Edit User"} />
        </>
    )
}

export default User
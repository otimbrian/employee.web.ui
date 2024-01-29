import avatar from "../../static/images/avatar/avatar.jpeg"
import { FaEnvelope, FaBuildingColumns } from "react-icons/fa6";


const Department = ({ department }) => {
    return (
        <li>
            {department.name}
        </li>
    )
}


const UserDisplay = ({ user }) => {
    return (
        <div className="user-display">
            <img src={avatar} alt="Avatar" />

            <div className="user-display-container">
                <div id="personal">
                    <article><strong>Name:</strong>{user.name}</article>
                    <article><strong>Username:</strong>{user.surname}</article>
                    <article><FaEnvelope /> <strong>Email:</strong> {user.email}</article>
                </div>
                <div id="technical">
                    <article><strong><FaBuildingColumns /> Departments:</strong></article>
                    {/* <br /> */}

                    <ul id="department">
                        {user.department.map(department => <Department department={department}/>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserDisplay
import avatar from "../../static/images/avatar/avatar.jpeg"
import { FaEnvelope, FaBuildingColumns } from "react-icons/fa6";

const UserDisplay = () => {
    return (
        <div className="user-display">
            <img src={avatar} alt="Avatar" />

            <div className="user-display-container">
                <div id="personal">
                    <article><strong>Name:</strong> Otim Brian</article>
                    <article><strong>Username:</strong> Otim</article>
                    <article><FaEnvelope /> <strong>Email:</strong> test-email@gmail.com</article>
                </div>
                <div id="technical">
                    <article><strong><FaBuildingColumns /> Departments:</strong></article>
                    {/* <br /> */}

                    <ul id="department">
                        <li>Department</li>
                        <li>Department</li>
                        <li>Department</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserDisplay
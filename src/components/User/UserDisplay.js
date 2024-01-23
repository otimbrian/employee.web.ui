import avatar from "../../static/images/avatar/avatar.jpeg"

const UserDisplay = () => {
    return (
        <div className="user-detail">
            <img src={avatar} alt="Avatar" />

            <div className="user-detail-container">
                <p><strong>Name:</strong> Otim Brian</p>
                <p><strong>Username:</strong> Otim</p>

                {/* <br /> */}

                <p><strong>Email:</strong> test-email@gmail.com</p>
                
                    <strong>Departments:</strong>
                    <ul>
                        <li>Department</li>
                        <li>Department</li>
                        <li>Department</li>
                    </ul>
               
            </div>
        </div>
    )
}

export default UserDisplay
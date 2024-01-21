
const User = () => {
    return (
        <div className="employee-content">
            <h4>User</h4>
            <div className="user-detail">
                <h4>Personal Details</h4>
                <span>Name: Otim Brian</span>
                <span>Username: Otim</span>
                <br/>
                <span>Email: test-email@gmail.com</span>
                <span>
                    Departments:
                    <ul>
                        <li id="user-department-list">Department</li>
                        <li id="user-department-list">Department</li>
                        <li id="user-department-list">Department</li>
                    </ul>
                </span>
            </div>
        </div>
    )
}

export default User
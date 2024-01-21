
const User = () => {
    return (
        <>
            <div className="employee-content">
            <h4>User</h4>
            <div className="user-detail">
                <h4>Personal Details</h4>
                <span><strong>Name:</strong> Otim Brian</span>
                <span><strong>Username:</strong> Otim</span>
                <br/>
                <span><strong>Email:</strong> test-email@gmail.com</span>
                <span>
                    <strong>Departments:</strong>
                    <ul>
                        <li id="user-department-list">Department</li>
                        <li id="user-department-list">Department</li>
                        <li id="user-department-list">Department</li>
                    </ul>
                </span>
            </div>
        </div>
        <div className="employee-content">
            <input type="button" value="Edit User" />
        </div>
        </>
    )
}

export default User
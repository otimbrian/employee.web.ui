

const ChangePassword = () => {
    return (
        <div className="employee-content">

            <label>
                <strong>New Password:</strong><br />
                <input type="password" name="password" placeholder="Password" required="required" />
            </label>
            <br />
            <br />
            <label>
                <strong>Confirm New Password:</strong><br />
                <input type="password" name="password" placeholder="Password" required="required" />
            </label><br />
        </div>
    )
}


export default ChangePassword
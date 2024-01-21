

const PasswordConfirmation = () => {
    return (
        <form >
            <label>
                Password:
                <input type="password" name="password" placeholder="Password" />
            </label>
            <label>
                Confirm Password:
                <input type="password" name="password" placeholder="Password" />
            </label>
            <input type="submit" value="Enter" />
        </form>
    )
}

export default PasswordConfirmation
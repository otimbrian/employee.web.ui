

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
            {/* {// todo -------> Make sure this is exported as a component } */}
            <input type="submit" value="Enter" />
        </form>
    )
}

export default PasswordConfirmation

const Recover = () => {

    const recoverPassword = (event) => {
        event.preventDefault()

        console.log("Recover Password........")
    }
    return (
        <div className="content-manager">
            <h3>Enter Recovery Email</h3>
            <form onSubmit={recoverPassword}>
                <h4>Email</h4>
                <input type="email" placeholder="Enter email" required name="email" />
                <br />
                <br />
                <input type="submit" value="Enter" />
            </form>
        </div>
    )
}

export default Recover
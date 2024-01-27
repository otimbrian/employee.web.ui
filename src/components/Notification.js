


const Notification = (status, message) => {
    return (
        <div className={status}>
            <p>{message}</p>
        </div>
    )
}

export default Notification
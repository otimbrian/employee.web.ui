import { useSelector } from 'react-redux'


const Notification = () => {
    const notification = useSelector(state => state.notification)
    return notification.message === undefined
        ? null
        : (
            <div className={notification.status}>
                <p>{notification.message}</p>
            </div>
        )
}

export default Notification
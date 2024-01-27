import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import loginService from "../services/loginService"
import Notification from './Notification.js'
// import { unwrapResult } from "@reduxjs/toolkit"
import { useDispatch } from 'react-redux'
import { disableNotification, postNotification } from "../reducers/notificationReducer.js"
import { userLogin } from "../reducers/userReducer.js"
import setUserToken, { employeeLocalStorage } from "../services/shared.js"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Function to handle Notifiction assignment.
    const post = (message, status) => {

        dispatch(postNotification({
            message: message,
            status: "error"
        }))
        setTimeout(
            () => {
                dispatch(disableNotification())
            }, 5000)

    }

    // Login Handler.
    const handleLogin = async (event) => {
        event.preventDefault()
        console.log("Loging in ------->", { email, password })

        try {
            // User login with email and password.
            const result = await dispatch(userLogin({ email, password })).unwrap()
            console.log("login result ----->", result);

            // Add the token to the local storage.
            employeeLocalStorage.addToLocalStorage(employeeLocalStorage.TOKEN, result)

            // Set the token value for future requests.
            // in the shared folder.
            setUserToken(result.token)

            // Navigate to the home page
            navigate("/")

        // If any error occurs in the login
            // Or the credentials are rejected?
            // 
            // Notify the client.
        } catch (exception) {
            
            console.log("Error in logging in: --->", exception)

            // When the email or password or both are invalid.
            if(exception.name === "TypeError") {
                post("network error", "error")
            }else{
                post(exception.message, "error")
            }
        }

    }
    return (
        <div>
            <h3>Login</h3>

            <div className="login">
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">
                        <h3>Email</h3>
                        <input type="email" onChange={(event) => setEmail(event.target.value)}
                            placeholder="Enter Email" required name="email" value={email} id="email" />
                    </label>

                    <label htmlFor="password">
                        <h4>Password</h4>
                        <input type="password" onChange={(event) => setPassword(event.target.value)}
                            value={password} placeholder="Enter Password"
                            required name="password" id="password" />
                    </label>

                    <br />
                    <br />
                    <input type="submit" value="Login" id="login-submit" />
                </form>
                <div>
                    <Notification />
                </div>
                {/* {
                        userStatus === 'User'
                            ? ( */}
                <div id="login">
                    <Link to='/recover'>Forgot your password?</Link><br />
                    <>Don't have an Account? Contact Admin.</>

                </div>
            </div>
        </div>
    )
}

export default Login
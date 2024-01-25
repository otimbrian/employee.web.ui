import { useState } from "react"
import { Link } from "react-router-dom"
import loginService from "../services/loginService"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log("Loging in .....", { email, password })

        try {
            const respone = await loginService.genericUserLogin({ email, password })
            console.log(respone);
        } catch (exception) {
            console.log("Error in logging in: --->",exception.message)
        }

    }
    return (
        <div>
            <h3>Login</h3>

            <div>
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">
                        <h3>Email</h3>
                        <input type="email" onChange={(event) => setEmail(event.target.value)}
                            placeholder="Enter Email" required name="email" value={email} />
                    </label>

                    <label htmlFor="password">
                        <h4>Password</h4>
                        <input type="password" onChange={(event) => setPassword(event.target.value)}
                            value={password} placeholder="Enter Password"
                            required name="password" id="password" />
                    </label>

                    <br />
                    <input type="submit" value="Login" />
                </form>
                <div>
                    {/* <Notification /> */}
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
import axios from "axios"
import { baseUrl } from "./shared"

// Define the base url for login operations.
const loginUrl = '/login'

// Calling the user login API
const genericUserLogin = async (userCredentials) => {

    const dataForHeader = {
        "Content-Type": "application/json"
    }

    const response = await axios.post(`${baseUrl}${loginUrl}`, userCredentials, dataForHeader)
    return response.data
}

const loginService = {genericUserLogin}
export default loginService
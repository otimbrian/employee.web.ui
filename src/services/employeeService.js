import axios from "axios"
import { baseUrl, userToken } from "./shared"


// Define the base url for users.
const baseEmployeeUrl = '/employees'


// Getting all employees.
const getAllEmployees = async() => {
    console.log("Token", userToken)
    const header = {
        Authorization: userToken
    }

    const response = await axios.get(`${baseUrl}${baseEmployeeUrl}`, header)
    return response.data
}

// Get an employee with employee id
const getEmployeeWithId = async (employeeId) => {
    console.log("User Token ----->",userToken)
    const data = {
        headers: {Authorization: userToken}
      }

    const response = await axios.get(`${baseUrl}${baseEmployeeUrl}/${employeeId}`, data)
    return response.data
}

const employeeService = {getAllEmployees, getEmployeeWithId}
export default employeeService
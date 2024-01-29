import axios from 'axios'
import { baseUrl, getHeader, userToken } from './shared'

// Define the base url for users.
const baseEmployeeUrl = `${baseUrl}/employees`

// Getting all employees.
const getAllEmployees = async () => {
    // Get the token from the shared folder.
    // Create an authorization header.
    const data = getHeader(userToken)

    // NOTE that the data is returned from here. <-------
    const response = await axios.get(baseEmployeeUrl, data)
    return response.data
}

// Get an employee with employee id
const getEmployeeWithId = async employeeId => {
    const data = getHeader(userToken)

    const response = await axios.get(`${baseEmployeeUrl}/${employeeId}`, data)
    return response.data
}

// Create an employee.
const createEmployee = async employeeObject => {
    const data = getHeader(userToken)

    const response = await axios.post(baseEmployeeUrl, employeeObject, data)
    return response.data
}

// Update an employee using id.
const updateEmployeeUsingId = async (employeeId, employeeObject) => {
    const data = getHeader(userToken)

    const response = await axios.put(
        `${baseEmployeeUrl}/${employeeId}`,
        employeeObject,
        data
    )
    return response.data
}

const employeeService = {
    getAllEmployees,
    getEmployeeWithId,
    createEmployee,
    updateEmployeeUsingId
}
export default employeeService

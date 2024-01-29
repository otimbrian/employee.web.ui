import axios from 'axios'
import { baseUrl, getHeader, userToken } from './shared'

// Define the base url for users.
const baseDepartmentUrl = `${baseUrl}/departments`

const getAllDepartments = async () => {
    // Get the token from the shared folder.
    // Create an authorization header.
    const data = getHeader(userToken)

    // NOTE that the data is returned from here. <-------
    const response = await axios.get(baseDepartmentUrl, data)
    return response.data
}

// Get a department with department id
const getdepartmentWithId = async departmentId => {
    const data = getHeader(userToken)

    const response = await axios.get(`${baseDepartmentUrl}/${departmentId}`, data)
    return response.data
}

// Create a department.
const createdepartment = async departmentObject => {
    const data = getHeader(userToken)

    const response = await axios.post(baseDepartmentUrl, departmentObject, data)
    return response.data
}

// Update a department using id.
const updatedepartmentUsingId = async (departmentId, departmentObject) => {
    const data = getHeader(userToken)

    const response = await axios.put(
        `${baseDepartmentUrl}/${departmentId}`,
        departmentObject,
        data
    )
    return response.data
}

// Delete n department using id.
const deletedepartmentUsingId = async departmentId => {
    const data = getHeader(userToken)

    const response = await axios.delete(
        `${baseDepartmentUrl}/${departmentId}`,
        data
    )
    return response.data
}

const departmentService = {
    getAllDepartments,
    getdepartmentWithId,
    createdepartment,
    updatedepartmentUsingId,
    deletedepartmentUsingId
}
export default departmentService

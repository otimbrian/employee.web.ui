import { useState } from "react"
import NavigateBack from "../NavigateBack"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createDepartment } from "../../reducers/departmentReducer"


const DepartmentForm = () => {
    const [employee, setEmployees] = useState([])
    const [name, setName] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const employees = useSelector(state => state.employees.employees)


    const handleEmployee = e => {
        e.preventDefault()
        console.log("Department value ---> ", e.target.value)
        const selected = JSON.parse(e.target.value)
        const found = employee.find(dep => dep.id === selected.id)

        if (!found) {
            setEmployees([...employee, selected])
        }
    }

    const create = async (e) => {
        e.preventDefault()

        const newDeprtment = {
            name: name,
            employees: employee
        }

        console.log("New Department ---------->", newDeprtment)

        try {
            const createdEmployee = await dispatch(createDepartment(newDeprtment)).unwrap()
            console.log(createdEmployee)

            //todo <-----------Make sure you add to local storage inorder to manage refresh actions.

            navigate("/department")
        }catch(error){
            console.log(error)
        }
    }
    return (
        <>
            <div  className="employee-content">
                <NavigateBack />
            </div>
            <br />
            <div className="employee-content">
               
                <form>
                    <fieldset id="dep-field">
                        <legend>Department Form</legend>
                        <label>
                            <strong>Department Name:</strong>
                            <input type="text" name="name" placeholder="Department Name" required="required" value={name} onChange={e => setName(e.target.value)} />
                        </label>
                        <label>
                        <strong>Employees:</strong>
                        <select
                                        name='employees'
                                        onChange={handleEmployee}
                                        multiple='multiple'
                                    >
                                        {employees.map(employee => (
                                            <option
                                                key={employee.id}
                                                value={JSON.stringify(employee)}
                                            >
                                                {employee.name}
                                            </option>
                                        ))}
                                    </select>
                        </label>
                    </fieldset>
                    <fieldset id="dep-field">
                        {/* {// todo -------> Make sure this is exported as a component } */}
                        <input type="submit" value="Create Department" onClick={create}/>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default DepartmentForm
import NavigateBack from "../NavigateBack"

const DepartmentForm = () => {
    return (
        <>
            <div>
                <NavigateBack />
            </div>
            <div className="employee-content">
               
                <form>
                    <fieldset>
                        <legend>Department Form</legend>
                        <label>
                            <strong>Department Name:</strong>
                            <input type="text" name="name" placeholder="Department Name" required="required" />
                        </label>
                        <label>
                        <strong>Employees:</strong>
                            <select name="employees">
                                <option value="name">Employee Name</option>
                                <option value="name">Employee Name</option>
                                <option value="name">Employee Name</option>
                            </select>
                        </label>
                    </fieldset>
                    <fieldset>
                        {/* {// todo -------> Make sure this is exported as a component } */}
                        <input type="submit" value="Create Department" />
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default DepartmentForm
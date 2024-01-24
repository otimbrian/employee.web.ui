import ListCard from "../ListCard"
import NavigateBack from "../NavigateBack"

const DepartmentEdit = () => {
    return (
        <>
            <div className="employee-content">
                <NavigateBack />
            </div>
            <br />
            <div className="employee-content">
                <h4>Department Editor</h4>
                <div className="department-column-one">
                    <form>
                        <fieldset id="dep-field">
                            <legend>Department Form</legend>
                            <div>
                                <label id="user-detail"><strong>Department One</strong></label>
                                <br />
                                <label>
                                    <strong>Name:</strong>
                                    <input type="text" name="name" placeholder="Department Name" required="required" />
                                </label>
                                <br />
                                <br />
                                <label id="user-detail"><strong>Employees</strong></label>
                                <br />
                                <label>
                                    <strong>Employees:</strong>
                                    <select name="employees">
                                        <option value="name">Employee Name</option>
                                        <option value="name">Employee Name</option>
                                        <option value="name">Employee Name</option>
                                    </select>
                                </label>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="column-two">
                    <h4>Employees</h4>
                    <ListCard />
                </div>
            </div>
            <div className="employee-content">
                <input type="submit" value="Update Department" />
            </div>
        </>
    )
}


export default DepartmentEdit
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavigateBack from "../NavigateBack";

const EmployeeForm = () => {
    return (
        <>
            <div className="employee-content">
                <NavigateBack />
                {/* <Link to="/employees">
                    <FaArrowLeft />Back
                </Link> */}
            </div>
            <br />
            <div className="employee-content">
                <h4>Employee Form</h4>

                <form>
                    <fieldset>
                        <legend>Personal Details:</legend>
                        <label>
                            <strong>Name:</strong> 
                            <input type="text" name="name" placeholder="Full Name" required="required" />
                        </label>
                        <label>
                            <strong>Username:</strong>
                            <input type="text" name="username" placeholder="Username" required="required" />
                        </label>
                        <br />
                        <br />
                        <br />
                        <label>
                            <strong>Email:</strong>
                            <input type="email" name="email" placeholder="Email" required="required"/>
                        </label>
                        <label>
                            <strong>Password:</strong>
                            <input type="password" name="password" placeholder="Password"  required="required"/>
                        </label>

                    </fieldset>
                    <fieldset>
                        <legend>Technical:</legend>
                        <label>
                            <strong>Department:</strong>
                            <select name="department">
                                <option value="ipod">iPod</option>
                                <option value="radio">Radio</option>
                                <option value="computer">Computer</option>
                            </select>
                        </label>
                        <label>
                            <strong>Admin:</strong>
                            <select name="adminStatus" required="required">
                                <option value="True">Admin</option>
                                <option value="False">Not Admin</option>
                            </select>
                        </label>
                    </fieldset>
                    <fieldset>
                        {/* {// todo -------> Make sure this is exported as a component } */}
                        <input type="submit" value="Create Employee" />
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default EmployeeForm
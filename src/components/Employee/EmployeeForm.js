import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmployeeForm = () => {
    return (
        <>
            <div className="employee-content">
                <Link to="/employees">
                    <FaArrowLeft />Back
                </Link>
            </div>
            <div className="employee-content">
                <h4>Employee Form</h4>

                <form>
                    <fieldset>
                        <legend>Personal Details:</legend>
                        <label>
                            Name:
                            <input type="text" name="name" placeholder="Full Name" required="required" />
                        </label>
                        <label>
                            Username:
                            <input type="text" name="username" placeholder="Username" required="required" />
                        </label>
                        <br />
                        <br />
                        <br />
                        <label>
                            Email:
                            <input type="email" name="email" placeholder="Email" required="required"/>
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" placeholder="Password"  required="required"/>
                        </label>

                    </fieldset>
                    <fieldset>
                        <legend>Technical:</legend>
                        <label>
                            Department:
                            <select name="department">
                                <option value="ipod">iPod</option>
                                <option value="radio">Radio</option>
                                <option value="computer">Computer</option>
                            </select>
                        </label>
                        <label>
                            Admin:
                            <select name="adminStatus" required="required">
                                <option value="True">Admin</option>
                                <option value="False">Not Admin</option>
                            </select>
                        </label>
                    </fieldset>
                    <fieldset>
                        <input type="submit" value="Create Employee" />
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default EmployeeForm
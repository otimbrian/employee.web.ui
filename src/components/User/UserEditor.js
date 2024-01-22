import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserEditor = () => {
    return (
        <>
            <div className="employee-content">
                <Link to="/user">
                    <FaArrowLeft />Back
                </Link>
            </div>
            <div className="employee-content">
                <h4>Employee Form</h4>

                <form>
                    <fieldset>
                        <legend>Personal Details:</legend>
                        <div>
                            <label>
                                <strong>Name:</strong> Otim Brian
                                <br />
                                <input type="text" name="name" placeholder="Full Name" required="required" />
                            </label>
                            <label>
                                <strong>Username:</strong> Otim
                                <br />
                                <input type="text" name="username" placeholder="Username" required="required" />
                            </label>
                        </div>
                        <br />
                        <br />
                        {/* <br /> */}
                        {/* <label>
                            <strong>Email:</strong> otim.brian@gmail.com
                            <br />
                            <input type="email" name="email" placeholder="Email" required="required" />
                        </label>
                        <label>
                            <strong>Password:</strong>
                            <input type="password" name="password" placeholder="Password" required="required" />
                        </label> */}

                    </fieldset>
                    {/* <fieldset>
                        <legend>Technical:</legend>
                        <label>
                            <strong>Department:</strong>
                            <select name="department">
                                <option value="ipod">iPod</option>
                                <option value="radio">Radio</option>
                                <option value="computer">Computer</option>
                            </select>
                        </label>
                    </fieldset> */}
                    
                    {/* {// todo -------> Make sure this is exported as a component } */}
                    <fieldset>
                        <input type="submit" value="Update User" />
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default UserEditor
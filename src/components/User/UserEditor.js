import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavigateBack from "../NavigateBack";

const UserEditor = () => {
    return (
        <>
            <div className="employee-content">
                <NavigateBack />
                {/* <Link to="/user">
                    <FaArrowLeft />Back
                </Link> */}
            </div>
            <div className="employee-content">
                <div className="content">
                    <div className="column-one">
                        <h4>Employee Form</h4>

                        <form>
                            <fieldset>
                                <legend>Personal Details:</legend>
                                <div>
                                    <label id="user-detail"><strong>Otim Brian</strong></label>
                                    <label id="user-detail"><strong>Otim</strong></label>
                                    <br />
                                    <br />
                                    <label>
                                        <strong>Name:</strong>
                                        <input type="text" name="name" placeholder="Full Name" required="required" id="input-text" />
                                    </label>
                                    <label>
                                        <strong>Username:</strong>
                                        <input type="text" name="username" placeholder="Username" required="required" id="input-text" />
                                    </label>
                                </div>
                                <br />
                                <br />
                                <br />
                                <label><strong>otim.brian@gmail.com</strong></label>
                                <br />
                                <br />
                                <label>
                                    <strong>Email:</strong>
                                    <input type="email" name="email" placeholder="Email" required="required" />
                                </label>
                                {/* <label>
            <strong>Password:</strong>
            <input type="password" name="password" placeholder="Password" required="required" />
        </label> */}

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
                            </fieldset>

                            {/* {// todo -------> Make sure this is exported as a component } */}
                        </form>
                    </div>
                    <div className="column-two">
                        <h4>Departments</h4>
                        <div>
                            <ul>
                                <Link><li>Department one</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="employee-content">
                <input type="submit" value="Update User" />
            </div>
        </>
    )
}

export default UserEditor
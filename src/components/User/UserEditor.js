import { useState } from 'react'
import NavigateBack from "../NavigateBack"
import { useDispatch, useSelector } from 'react-redux'


const DepartmentList = ({ department }) => {
    return <li>{department.name}</li>
}


const UserEditor = ({user}) => {
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [username, setUserName] = useState(user.surname)

    const handleUpdate = (e) => {
        e.preventDefult()
    }

    // const loggedInUser = useSelector(state => state.user.userObject)
    return (
        <>
            <div className="employee-content">
                <NavigateBack />
            </div>
            <br />
            <form id='editor-form'>
                <div className="employee-content">
                    <div className="content">
                        <div className="column-one">
                            <fieldset>
                                <legend>Personal Details:</legend>
                                <div>
                                    <label id="user-detail"><strong>{user.name}</strong></label>
                                    <label id="user-detail"><strong>{user.surname}</strong></label>
                                    <br />
                                    <br />
                                    <label>
                                        <strong>Name:</strong>
                                        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" required="required" id="input-text" />
                                    </label>
                                    <label>
                                        <strong>Username:</strong>
                                        <input type="text" name="username" value={username} onChange={e => setUserName(e.target.value)} placeholder="Username" required="required" id="input-text" />
                                    </label>
                                </div>
                                <br />
                                <br />
                                <br />
                                <label><strong>{user.email}</strong></label>
                                <br />
                                <br />
                                <label>
                                    <strong>Email:</strong>
                                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required="required" />
                                </label>
                                <br /><br />
                            </fieldset>

                            {/* {// todo -------> Make sure this is exported as a component } */}

                        </div>
                        <div className="column-two">
                            <h4>Departments</h4>
                            <div>
                                <ul id='a'>
                                    {
                                        user.department.map(depart => <DepartmentList department={depart} key={depart.id} />)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="employee-content">
                    
                                 <label>
                                    <strong>New Password:</strong><br/>
                                    <input type="password" name="password" placeholder="Password" required="required" />
                                </label> 
                                <br />
                                <br />
                                <label>
                                    <strong>Confirm New Password:</strong><br />
                                    <input type="password" name="password" placeholder="Password" required="required" />
                                </label><br /> 
                </div>
                <div className="employee-content">
                    <input type="submit" value="Update User" onClick={handleUpdate} />
                </div>
            </form>
        </>
    )
}

export default UserEditor
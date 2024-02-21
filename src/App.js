import './App.css'
import './static/css/card.css'
import './static/css/user.css'
import './static/css/employee.css'
import './static/css/department.css'
import './static/css/navigation.css'
import './static/css/user-details.css'
import './static/css/notification.css'
import { useEffect } from 'react'
import Menu from './components/Menu'
import Home from './components/Home'
import Login from './components/Login'
import Footer from './components/Footer'
import User from './components/User/User'
import UserCard from './components/User/Card'
import Recover from './components/User/Recover'
import { getUser, removeUser } from './reducers/userReducer'
import UserEditor from './components/User/UserEditor'
import Employee from './components/Employee/Employee'
import { useDispatch, useSelector } from 'react-redux'
import { setUserToken } from './reducers/userTokenReducer'
import Department from './components/Department/Department'
import EmployeeView from './components/Employee/EmployeeView'
import ChangePassword from './components/User/ChangePassword'
import EmployeeForm from './components/Employee/EmployeeForm'
// import UserEditor from './components/Employee/EmployeeEditor'
import { initializeEmployees } from './reducers/employeeReducer'
import EmployeeEditor from './components/Employee/EmployeeEditor'
import DepartmentEdit from './components/Department/DepartmentEdit'
import DepartmentForm from './components/Department/DepartmentForm'
import { initializeDepartment } from './reducers/departmentReducer'
import { Route, Routes, useNavigate, useMatch } from 'react-router-dom'
import setUserTokenString, { employeeLocalStorage } from './services/shared'
import DepartmentView from './components/Department/DepartmentView'

function App() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Check if the user token exists
    // In the local storage.
    useEffect(() => {
        async function callBackFunction() {
            const storedUser = employeeLocalStorage.getFromLocalStorge(
                employeeLocalStorage.NAME
            )

            if (storedUser) {
                // Set the token value for future requests.
                // in the shared folder.
                setUserTokenString(storedUser.token)
                dispatch(setUserToken(storedUser))

                console.log('Stored User ----->', storedUser)
                console.log('User id ---->', storedUser.userId)

                try {
                    const result = await dispatch(getUser(storedUser.userId)).unwrap()
                    console.log('Received Result From User Call---->', result)

                    //todo <---- add to local storage.
                } catch (res) {
                    console.log('Erorr or result ----->', res)
                    if (res.error === 'token expired') {
                        dispatch(removeUser())
                        employeeLocalStorage.removeFromLocalStorage(
                            employeeLocalStorage.NAME
                        )
                        navigate('/login')
                    }
                }
            } else {
                if (window.location.href === window.location.origin + '/') {
                    navigate('/login')
                }
            }
        }
        callBackFunction()
    }, [navigate, dispatch])

    const loggedInUser = useSelector(state => state.user.userObject)
    console.log('User state ---->', loggedInUser)

    useEffect(() => {
        // If the user is an admin,
        // Get all the departments.
        async function callBackFunction() {
            if (loggedInUser && loggedInUser.isAdmin) {
                try {
                    const departments = await dispatch(initializeDepartment()).unwrap()
                    console.log('Departments ------>', departments)

                    //todo <---- add to local storage
                } catch (res) {
                    console.log('Erorr or result ----->', res)
                    if (res.error === 'token expired') {
                        dispatch(removeUser())
                        employeeLocalStorage.removeFromLocalStorage(
                            employeeLocalStorage.NAME
                        )
                        navigate('/login')
                    }
                }
            }
        }

        callBackFunction()
    }, [dispatch, loggedInUser, navigate])

    // Check if the user is an admin.
    // Get all employees.
    useEffect(() => {
        async function callBackFunction() {
            if (loggedInUser && loggedInUser.isAdmin) {
                async function callbackFunction() {
                    try {
                        const employees = await dispatch(initializeEmployees()).unwrap()
                        console.log('Employees received ----->', employees)
                    } catch (res) {
                        console.log('Erorr or result ----->', res)

                        //todo <---- add to local storge
                        if (res.error === 'token expired') {
                            dispatch(removeUser())
                            employeeLocalStorage.removeFromLocalStorage(
                                employeeLocalStorage.NAME
                            )
                            navigate('/login')
                        }
                    }
                }
                callbackFunction()
            }
        }
        callBackFunction()
    }, [dispatch, loggedInUser, navigate])

    const employees = useSelector(state => state.employees.employees)
    const match = useMatch('/:employee/edit')
    const employee = match
        ? employees.find(employee => employee.id === match.params.employee)
        : undefined

    const departments = useSelector(state => state.departments.department)
    const departmentEditorMatch = useMatch('/department/edit/:departmentId')
    const departmentToEdit = departmentEditorMatch
        ? departments.find(
            department =>
                department.id === departmentEditorMatch.params.departmentId
        )
        : undefined

    const employeeToDisplayMatch = useMatch('user/:userId')
    const employeeToDisplay = employeeToDisplayMatch
        ? employees.find(
            employee => employee.id === employeeToDisplayMatch.params.userId
        )
        : undefined

    const departmentToDisplayMatch = useMatch('/department/:departmentId')
    const departmentToDisplay = departmentToDisplayMatch
        ? departments.find(
            department =>
                department.id === departmentToDisplayMatch.params.departmentId
        )
        : undefined

    return (
        <div className='App'>
            <div id='logo'>
                Welcome
                <br />
                Employee Manager
            </div>

            {loggedInUser ? <Menu user={loggedInUser} /> : <hr></hr>}

            <Routes>
                <Route path='/user' element={<User />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/recover' element={<Recover />} />
                <Route path='/employees' element={<Employee />} />
                <Route path='/employees/create' element={<EmployeeForm />} />
                <Route
                    path='/user/edit/:user/'
                    element={<UserEditor user={loggedInUser} />}
                />
                <Route
                    path='/:employee/edit'
                    element={<EmployeeEditor user={employee} />}
                />
                <Route path='/department' element={<Department />} />
                <Route path='/card' element={<UserCard />}></Route>
                <Route
                    path='/user/:userId'
                    element={<EmployeeView user={employeeToDisplay} />}
                />
                <Route
                    path='/department/:departmentId'
                    element={<DepartmentView department={departmentToDisplay} />}
                />
                <Route
                    path='/department/edit/:departmentId'
                    element={<DepartmentEdit department={departmentToEdit} />}
                />
                <Route path='/department/create' element={<DepartmentForm />} />
                <Route
                    path='/user/:user/change-password'
                    element={<ChangePassword />}
                />
            </Routes>

            <Footer />
        </div>
    )
}

export default App

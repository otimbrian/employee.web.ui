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
import { getUser } from './reducers/userReducer'
import Employee from './components/Employee/Employee'
import UserEditor from './components/User/UserEditor'
import { useDispatch, useSelector } from 'react-redux'
import { setUserToken } from './reducers/userTokenReducer'
import Department from './components/Department/Department'
import EmployeeForm from './components/Employee/EmployeeForm'
import { Route, Routes, useNavigate } from 'react-router-dom'
import DepartmentEdit from './components/Department/DepartmentEdit'
import DepartmentForm from './components/Department/DepartmentForm'
import setUserTokenString, { employeeLocalStorage } from './services/shared'

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
                } catch (res) {
                    console.log('Erorr or result ----->', res)
                    if (res.error === 'token expired') {
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
                <Route path='employees/create' element={<EmployeeForm />} />
                <Route path='/employee/edit' element={<UserEditor />} />
                <Route path='department' element={<Department />} />
                <Route path='/card' element={<UserCard />}></Route>
                <Route path='/department/edit' element={<DepartmentEdit />} />
                <Route path='/department/create' element={<DepartmentForm />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App

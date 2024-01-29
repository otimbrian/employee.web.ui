import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import './static/css/user.css'
import './static/css/employee.css'
import './static/css/navigation.css'
import './static/css/user-details.css'
import './static/css/department.css'
import './static/css/card.css'
import './static/css/notification.css'
import Menu from './components/Menu';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import User from './components/User/User';
import UserCard from './components/User/Card';
import Recover from './components/User/Recover';
import Employee from './components/Employee/Employee';
import EmployeeForm from './components/Employee/EmployeeForm';
import UserEditor from './components/User/UserEditor';
import Department from './components/Department/Department';
import DepartmentEdit from './components/Department/DepartmentEdit';
import DepartmentForm from './components/Department/DepartmentForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { employeeLocalStorage } from './services/shared';
import { getUser, setUserToken } from './reducers/userReducer';


function App() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Check if the user token exists
    // In the local storage.
    useEffect(() => {
        async function callBackFunction() {
            const storedUser = employeeLocalStorage.getFromLocalStorge(employeeLocalStorage.NAME)
            if (storedUser) {
                dispatch(setUserToken(storedUser))
                console.log("Stored User ----->", storedUser)
                console.log("User id ---->", storedUser.userId);

                try {
                    await dispatch(getUser(storedUser.userId)).unwrap()
                } catch (res) {
                    console.log('Erorr or result ----->', res)
                }


            } else {
                if (window.location.href === window.location.origin + "/") {
                    navigate("/login")
                }
            }
        }
        callBackFunction()

    }, [dispatch, navigate])

    const user = useSelector(state => state.user)
    console.log('User state ---->', user)

    return (
        <div className="App">
            <div id='logo'>
                Welcome<br />
                Employee Manager
            </div>
            <Menu />

            <Routes>
                <Route path='/user' element={<User />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/recover' element={<Recover />} />
                <Route path='/employees' element={<Employee />} />
                <Route path='employees/create' element={<EmployeeForm />} />
                <Route path='/employee/edit' element={<UserEditor />} />
                <Route path='department' element={<Department />} />
                <Route path='/card' element={<UserCard />} ></Route>
                <Route path='/department/edit' element={<DepartmentEdit />} />
                <Route path='/department/create' element={<DepartmentForm />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;

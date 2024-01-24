import { Route, Routes } from 'react-router-dom';
import './App.css';
import './static/css/user.css'
import './static/css/employee.css'
import './static/css/navigation.css'
import './static/css/user-details.css'
import './static/css/department.css'
import './static/css/card.css'
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


function App() {
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
                <Route path='/' element = {<Home />} />
                <Route path='/recover' element={<Recover />} />
                <Route path='/employees' element={<Employee />} />
                <Route path='employees/create' element={<EmployeeForm />} />
                <Route path='/employee/edit' element={<UserEditor />} />
                <Route path='department' element= {<Department />} />
                <Route path='/card' element= {<UserCard /> } ></Route>
                <Route path='/department/edit' element={<DepartmentEdit />} />
                <Route path='/department/create' element= {<DepartmentForm />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;

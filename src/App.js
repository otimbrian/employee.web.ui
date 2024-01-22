import { Route, Routes } from 'react-router-dom';
import './App.css';
import './static/css/user.css'
import './static/css/employee.css'
import './static/css/navigation.css'
import Menu from './components/Menu';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import User from './components/User/User';
import Recover from './components/User/Recover';
import Employee from './components/Employee/Employee';
import EmployeeForm from './components/Employee/EmployeeForm';
import UserEditor from './components/User/UserEditor';
import Department from './components/Department/Department';

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
            </Routes>

            <Footer />
        </div>
    );
}

export default App;

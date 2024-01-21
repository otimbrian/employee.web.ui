import { Route, Routes } from 'react-router-dom';
import './App.css';
import './static/css/user.css'
import './static/css/employee.css'
import './static/css/navigation.css'
import User from './components/User/User';
import Menu from './components/Menu';
import Login from './components/Login';
import Footer from './components/Footer';
import Recover from './components/User/Recover';
import Employee from './components/Employee/Employee';
import EmployeeForm from './components/Employee/EmployeeForm';

function App() {
    return (
        <div className="App">
            <div id='logo'>
                Welcome Employee Manager
            </div>
            <Menu />

            <Routes>
                <Route path='/user' element={<User />} />
                <Route path='/login' element={<Login />} />
                <Route path='/recover' element={<Recover />} />
                <Route path='/employees' element={<Employee />} />
                <Route path='employees/create' element={<EmployeeForm />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;

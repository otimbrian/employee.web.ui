import { Route, Routes } from 'react-router-dom';
import './App.css';
import './static/css/style.css'
import User from './components/User';
import Menu from './components/Menu';
import Login from './components/Login';
import Recover from './components/Recover';
import Employee from './components/Employee';

function App() {
    return (
        <div className="App">
            <Menu />
            <Routes>
                <Route path='/user' element={<User />} />
                <Route path='/login' element={<Login />} />
                <Route path='/recover' element={<Recover />} />
                <Route path='/employee' element={<Employee />} />
            </Routes>
        </div>
    );
}

export default App;

 
import Login from './Login/Login';
import Signup from './Login/Signup';
import Home from './Dashboard/Home';
import Student from './Dashboard/Student';
import Add_Student from './Dashboard/Add_Student';
import Edit_Student from './Dashboard/Edit_Student';
import NavPage from './NavPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<NavPage />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/home' element={<Home />} />
    <Route path='/student' element={<Student />} />
    <Route path='/add-student' element={<Add_Student />} />
    <Route path='/edit_student' element={<Edit_Student />} />

   </Routes>
   </BrowserRouter>
  );
}

export default App;

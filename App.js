import './App.css';
import NavBar from './components/NavBar';
import {Route,Routes} from 'react-router-dom'
import Home from './components/HomePage';
import Students from './components/StudentsPage'
import Campus from './components/CampusPage';
import StudentForm from './components/StudentForm';
import CampusForm from './components/CampusForm';
import AddCampusForm from './components/AddCampusForm';
import AddStudentForm from './components/AddStudentForm';


function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studentspage" element={<Students />} />
          <Route path="/campuspage" element={<Campus />} />
          <Route path="/studentformpage" element={<StudentForm/>} />
          <Route path="/campusformpage" element={<CampusForm/>} />
          <Route path="/addcampusform" element={<AddCampusForm/>} />
          <Route path="/addstudentform" element={<AddStudentForm/>} />
        </Routes>
    </div>
  );
}

export default App;

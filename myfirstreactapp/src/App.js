import './index.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Welcome from './components/Welcome';
import GetAllPlacements from './components/GetAllPlacements';
import NoPage from './components/NoPage';
import StudentList from './components/StudentList';
import AddPlacement from './components/AddPlacement';
function App() {
  return (
    <div className="c1">
      <Router>
        <ul>
          <li>
            <Link to="/">Welcome</Link>
            </li>
            <li><Link to="/addplacements">Add Placement</Link></li>
           <li> <Link to="/viewplacements">View Placements</Link></li>
          <li>  <Link to="/studentlist">Student List</Link></li>
          
        </ul>
        <Routes>
          <Route path="/" element={<Welcome/>}></Route>
          <Route path="/addplacements" element={<AddPlacement/>}></Route>
          <Route path="/viewplacements" element={<GetAllPlacements/>}></Route>
          <Route path="/studentlist" element={<StudentList/>}></Route>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </Router>

      </div>
      
  );
}

export default App;

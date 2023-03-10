import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Attendence from './pages/Attendence';
import Staff from './pages/Staff'
import AllReports from './pages/AllReports';
import Setting from './pages/Setting';


function App() {
  return (
    <>
      {/* Sidebar Menu  */}
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/attendence" element={<Attendence/>} />
          <Route path="/staff" element={<Staff/>} />
          <Route path="/all-reports" element={<AllReports/>} />
          <Route path="/settings" element={<Setting/>} />
        </Routes>

    </>
  );
}

export default App;

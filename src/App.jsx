import {Routes, Route, Navigate} from 'react-router'

import Dashboard from './pages/Dashboard';
import ResumeTool from './pages/ResumeTool';
import MyCourses from './pages/MyCourses';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to ="/dashboard"/>} />
      <Route path="/dashboard" element={<Dashboard />} />"
      <Route path="/resume-tool" element={<ResumeTool />} />
      <Route path="/my-courses" element={<MyCourses />} />
    </Routes>
  )
}

export default App;

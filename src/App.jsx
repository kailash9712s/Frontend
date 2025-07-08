import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './Pages/Home/home';
import AboutPage from './Pages/About/about';
import BrochurePage from './Pages/Brochure/brochure';
import ProjectPage from './Pages/Projects/project';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Projects' element={<ProjectPage />} />
        <Route path='/Brochure' element={<BrochurePage />} />
        <Route path='/About' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App;

import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from "./pages/ProjectsPage";
import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import { projects } from './data'


function App() {

  const [projectList, setProjectList] = useState(projects)
  
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage projects={projectList}/>} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes> 
    </ThemeProvider>
  );
}

export default App;

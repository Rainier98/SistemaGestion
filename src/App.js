import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UserManagement from './pages/UserManagement';
import ProjectManagement from './pages/ProjectManagement';
import DefectManagement from './pages/DefectManagement';
import AnalyzeCodePage from './pages/AnalyzeCodePage'; // Importa la nueva página
import PlanManagement from './pages/PlanManagement';
import CasoManagement from './pages/CasoManagement';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>React JS - Sistema de Gestión de Pruebas</p>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/usuarios">Gestión de Usuarios</Link></li>
              <li><Link to="/proyectos">Gestión de Proyectos</Link></li>
              <li><Link to="/caso-pruebas">Gestión Casos de Pruebas</Link></li>
              <li><Link to="/planes-pruebas">Gestión Plan de Pruebas</Link></li>
              <li><Link to="/defectos">Gestión de Defectos</Link></li>
              <li><Link to="/analyze">Analizar Código</Link></li> {/* Añadir enlace a la nueva herramienta */}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            {/* Ruta para la página de inicio */}
            <Route path="/" element={<Home />} />
             {/* Ruta para la gestión de usuarios */}
             <Route path="/usuarios" element={<UserManagement />} />
            {/* Ruta para la gestión de proyectos */}
            <Route path="/proyectos" element={<ProjectManagement />} />
            {/* Ruta para la gestión de casos de prueba */}
            <Route path="/caso-pruebas" element={<CasoManagement />} />
            {/* Ruta para la gestión de Plan de pruebas */}
            <Route path="/planes-pruebas" element={<PlanManagement />} />
            {/* Ruta para la gestión de defectos */}
            <Route path="/defectos" element={<DefectManagement />} />
            {/* Ruta para la nueva herramienta de análisis de código */}
            <Route path="/analyze" element={<AnalyzeCodePage />} /> {/* Añadir ruta a la nueva herramienta */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

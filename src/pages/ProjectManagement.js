import React, { useState, useEffect } from 'react';
import { fetchProjects, createProject, updateProject, deleteProject } from '../services/apiService'; // Importar las funciones del API
import ProjectList from '../components/ProjectList';  // Asegúrate de que la ruta es correcta
import ProjectForm from '../components/ProjectForm';  // Importar el formulario

function ProjectManagement() {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);  // Estado para manejar el proyecto actual

  useEffect(() => {
    fetchProjects().then(data => {
      console.log('Projects fetched:', data); // Log para verificar los datos obtenidos
      setProjects(data);
    });
  }, []);

  // Guardar proyecto (crear o actualizar)
  const handleSaveProject = async (project) => {
    if (project.id) {
      // Actualizar proyecto existente
      const updatedProject = await updateProject(project.id, project);
      setProjects(projects.map(p => p.id === project.id ? updatedProject : p));
    } else {
      // Crear nuevo proyecto
      const newProject = await createProject(project);
      setProjects([...projects, newProject]);
    }
    setCurrentProject(null);  // Resetear el formulario después de guardar
  };

  // Editar proyecto
  const handleEditProject = (project) => {
    setCurrentProject(project);
  };

  // Eliminar proyecto
  const handleDeleteProject = async (projectId) => {
    await deleteProject(projectId);
    setProjects(projects.filter(p => p.id !== projectId));
  };

  // Cancelar edición de proyecto
  const handleCancelEdit = () => {
    setCurrentProject(null);
  };

  return (
    <div className="project-management-container">
      <h1>Gestión de Proyectos</h1>
      <div className="project-list">
        <ProjectList projects={projects} onEdit={handleEditProject} onDelete={handleDeleteProject} />
      </div>
      <div className="project-form">
        <ProjectForm project={currentProject} onSave={handleSaveProject} onCancel={handleCancelEdit} />
      </div>
    </div>
  );
}

export default ProjectManagement;

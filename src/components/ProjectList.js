import React from 'react';

function ProjectList({ projects, onEdit, onDelete }) {
  return (
    <div>
      <h2>Lista de Proyectos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Finalización</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.nombre}</td>
              <td>{project.descripcion}</td>
              <td>{new Date(project.fecha_inicio).toLocaleDateString()}</td>
              <td>{new Date(project.fecha_fin).toLocaleDateString()}</td>
              <td>{project.estado}</td>
              <td>
                <button onClick={() => onEdit(project)}>Editar</button>
                <button onClick={() => onDelete(project.id)}>Eliminar</button> {/* Botón de eliminar */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectList;

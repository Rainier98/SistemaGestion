import React, { useState, useEffect } from 'react';
import UserSelect from './UserSelect';
import { assignUserToProject } from '../services/apiService';

function ProjectForm({ project, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    descripcion: '',
    fechaInicio: '',
    fechaFin: '',
    estado: ''
  });
  const [usuarioId, setUsuarioId] = useState('');

  useEffect(() => {
    if (project) {
      setFormData({
        ...project,
        fechaInicio: project.fechaInicio || '',
        fechaFin: project.fechaFin || ''
      });
    } else {
      setFormData({
        id: '',
        nombre: '',
        descripcion: '',
        fechaInicio: '',
        fechaFin: '',
        estado: ''
      });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave(formData);

    if (usuarioId) {
      await assignUserToProject(formData.id, usuarioId);
    }

    setFormData({
      id: '',
      nombre: '',
      descripcion: '',
      fechaInicio: '',
      fechaFin: '',
      estado: ''
    });
    setUsuarioId('');
  };

  const handleUserSelect = (userId) => {
    setUsuarioId(userId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre del Proyecto:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} />
      </div>
      <div>
        <label>Fecha de Inicio:</label>
        <input type="text" name="fechaInicio" value={formData.fechaInicio} onChange={handleChange} placeholder="dd-mm-yyyy" />
      </div>
      <div>
        <label>Fecha de Fin:</label>
        <input type="text" name="fechaFin" value={formData.fechaFin} onChange={handleChange} placeholder="dd-mm-yyyy" />
      </div>
      <div>
        <label>Estado:</label>
        <select name="estado" value={formData.estado} onChange={handleChange}>
          <option value="">Selecciona un estado</option>
          <option value="activo">Activo</option>
          <option value="finalizado">Finalizado</option>
          <option value="en espera">En espera</option>
        </select>
      </div>
      <div>
        <label>Asignar Usuario:</label>
        <UserSelect onSelect={handleUserSelect} />
      </div>
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
}

export default ProjectForm;


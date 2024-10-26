import React, { useState, useEffect } from 'react';

function PlanForm({ plan, onSave, onCancel }) {
  const [formData, setFormData] = useState({ nombre: '', fecha_creacion: '', proyecto_id: '' });

  useEffect(() => {
    if (plan) {
      setFormData(plan);
    }
  }, [plan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre: <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required /></label>
      <label>Fecha de Creación: <input type="date" name="fecha_creacion" value={formData.fecha_creacion} onChange={handleChange} required /></label>
      <label>ID de Proyecto: <input type="number" name="proyecto_id" value={formData.proyecto_id} onChange={handleChange} required /></label>
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
}

export default PlanForm;

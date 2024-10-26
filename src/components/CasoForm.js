import React, { useState, useEffect } from 'react';

function CasoForm({ casoPrueba, onSave, onCancel }) {
  const [formData, setFormData] = useState({ nombre: '', descripcion: '', estado: 'no iniciado', resultado: '' });

  useEffect(() => {
    if (casoPrueba) {
      setFormData(casoPrueba);
    } else {
      setFormData({ nombre: '', descripcion: '', estado: 'no iniciado', resultado: '' });
    }
  }, [casoPrueba]);

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
      <div>
        <label>Nombre</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </div>
      <div>
        <label>Descripción</label>
        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} required></textarea>
      </div>
      <div>
        <label>Estado</label>
        <select name="estado" value={formData.estado} onChange={handleChange} required>
          <option value="no iniciado">No Iniciado</option>
          <option value="en progreso">En Progreso</option>
          <option value="completado">Completado</option>
        </select>
      </div>
      <div>
        <label>Resultado</label>
        <select name="resultado" value={formData.resultado} onChange={handleChange} required>
          <option value="">Seleccione un resultado</option>
          <option value="éxito">Éxito</option>
          <option value="fallo">Fallo</option>
        </select>
      </div>
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
}

export default CasoForm;

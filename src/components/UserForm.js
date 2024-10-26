import React, { useState, useEffect } from 'react';

function UserForm({ user, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    rol: ''
  });

  useEffect(() => {
    if (user) {
      setFormData(user); // Cargar los datos del usuario a editar
    } else {
      setFormData({ nombre: '', email: '', rol: '' }); // Resetear el formulario para crear un nuevo usuario
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Guardar los datos del usuario
  };

  return (
    <div>
      <h2>{user ? 'Editar Usuario' : 'Crear Usuario'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Rol:</label>
          <input
            type="text"
            name="rol"
            value={formData.rol}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">{user ? 'Actualizar' : 'Crear'}</button>
          <button type="button" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;

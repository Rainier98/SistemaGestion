import React from 'react';

function CasoList({ casos, onEdit, onDelete }) {
  return (
    <div>
      <h2>Lista de Casos de Prueba</h2>
      <ul>
        {casos.map(caso => (
          <li key={caso.id}>
            <h3>{caso.nombre}</h3>
            <p>{caso.descripcion}</p>
            <p>Estado: {caso.estado}</p>
            <p>Resultado: {caso.resultado}</p>
            <button onClick={() => onEdit(caso)}>Editar</button>
            <button onClick={() => onDelete(caso.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CasoList;

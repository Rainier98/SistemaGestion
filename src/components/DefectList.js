import React from 'react';

function DefectList({ defects, onUpdate }) {
  return (
    <ul>
      {defects.map(defect => (
        <li key={defect.id}>
          <h2>{defect.descripcion}</h2>
          <p>Estado: {defect.estado}</p>
          <p>Severidad: {defect.severidad}</p>
          <p>Prioridad: {defect.prioridad}</p>
          <button onClick={() => onUpdate(defect.id, { ...defect, estado: 'resuelto' })}>
            Resolver
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DefectList;

import React from 'react';

function PlanList({ plans, onSelect, onEdit, onDelete }) {
  return (
    <div>
      <h2>Lista de Planes de Prueba</h2>
      <ul>
        {plans.map(plan => (
          <li key={plan.id}>
            <h3>{plan.nombre}</h3>
            <button onClick={() => onSelect(plan.id)}>Ver Casos de Prueba</button>
            <button onClick={() => onEdit(plan)}>Editar</button>
            <button onClick={() => onDelete(plan.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanList;

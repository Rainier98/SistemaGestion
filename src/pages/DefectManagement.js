import React, { useState, useEffect } from 'react';
import { fetchDefects, updateDefect } from '../services/apiService';
import DefectList from '../components/DefectList';  // Asegúrate de que la ruta es correcta

function DefectManagement() {
  const [defects, setDefects] = useState([]);

  useEffect(() => {
    fetchDefects().then(data => {
      console.log('Defects fetched:', data); // Log para verificar los datos obtenidos
      setDefects(data);
    });
  }, []);

  const handleUpdateDefect = async (defectId, updatedDefect) => {
    await updateDefect(defectId, updatedDefect);
    // Actualizar la lista de defectos
    setDefects(defects.map(def => def.id === defectId ? updatedDefect : def));
  };

  return (
    <div>
      <h1>Gestión de Defectos</h1>
      <DefectList defects={defects} onUpdate={handleUpdateDefect} />
    </div>
  );
}

export default DefectManagement;

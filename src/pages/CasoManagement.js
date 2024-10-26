import React, { useState, useEffect } from 'react';
import { fetchCasos, createCaso, updateCaso, deleteCaso } from '../services/apiService';
import CasoList from '../components/CasoList';
import CasoForm from '../components/CasoForm';

function CasoManagement() {
  const [casos, setCasos] = useState([]);
  const [currentCaso, setCurrentCaso] = useState(null);

  useEffect(() => {
    fetchCasos().then(data => {
      console.log('Casos fetched:', data);
      setCasos(data);
    });
  }, []);

  const handleSaveCaso = async (caso) => {
    if (caso.id) {
      const updatedCaso = await updateCaso(caso.id, caso);
      setCasos(casos.map(c => c.id === caso.id ? updatedCaso : c));
    } else {
      const newCaso = await createCaso(caso);
      setCasos([...casos, newCaso]);
    }
    setCurrentCaso(null);
  };

  const handleEditCaso = (caso) => {
    setCurrentCaso(caso);
  };

  const handleDeleteCaso = async (casoId) => {
    await deleteCaso(casoId);
    setCasos(casos.filter(c => c.id !== casoId));
  };

  const handleCancelEdit = () => {
    setCurrentCaso(null);
  };

  return (
    <div>
      <h1>Gestión de Casos de Prueba</h1>
      <CasoList casos={casos} onEdit={handleEditCaso} onDelete={handleDeleteCaso} />
      <CasoForm casoPrueba={currentCaso} onSave={handleSaveCaso} onCancel={handleCancelEdit} />
    </div>
  );
}

export default CasoManagement;

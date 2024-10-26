import React, { useState, useEffect } from 'react';
import { fetchPlans, createPlan, updatePlan, deletePlan } from '../services/apiService';
import PlanList from '../components/PlanList';
import PlanForm from '../components/PlanForm';

function PlanManagement() {
  const [plans, setPlans] = useState([]);
  const [currentPlan, setCurrentPlan] = useState(null);

  useEffect(() => {
    fetchPlans().then(data => {
      console.log('Plans fetched:', data); // Log para verificar los datos obtenidos
      setPlans(data);
    });
  }, []);

  const handleSavePlan = async (plan) => {
    if (plan.id) {
      // Actualizar plan
      const updatedPlan = await updatePlan(plan.id, plan);
      setPlans(plans.map(p => p.id === plan.id ? updatedPlan : p));
    } else {
      // Crear nuevo plan
      const newPlan = await createPlan(plan);
      setPlans([...plans, newPlan]);
    }
    setCurrentPlan(null); // Resetear el formulario
  };

  const handleEditPlan = (plan) => {
    setCurrentPlan(plan);
  };

  const handleDeletePlan = async (planId) => {
    try {
      await deletePlan(planId);
      setPlans(plans.filter(p => p.id !== planId));
    } catch (error) {
      console.error('Error al eliminar plan:', error); // Añade un log para verificar errores
    }
  };

  const handleCancelEdit = () => {
    setCurrentPlan(null);
  };

  return (
    <div>
      <h1>Gestión de Planes de Prueba</h1>
      <PlanList plans={plans} onEdit={handleEditPlan} onDelete={handleDeletePlan} />
      <PlanForm plan={currentPlan} onSave={handleSavePlan} onCancel={handleCancelEdit} />
    </div>
  );
}

export default PlanManagement;

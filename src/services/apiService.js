

const API_URL = 'http://localhost:3001/api';

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/proyectos`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    throw error;
  }
};

export const createProject = async (project) => {
  try {
    const response = await fetch(`${API_URL}/proyectos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to create project:', error);
    throw error;
  }
};

// Actualizar un proyecto existente
export const updateProject = async (projectId, updatedData) => {
    try {
      const response = await fetch(`${API_URL}/proyectos/${projectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('Failed to update project:', error);
      throw error;
    }
  };
  // Eliminar un proyecto
  export const deleteProject = async (id) => {
    const response = await fetch(`/projects/${id}`, {
      method: 'DELETE',
    });
    
    // Si no tienes un cuerpo en la respuesta (por ejemplo, solo un código 204 No Content), no intentes convertirla a JSON
    if (!response.ok) {
      throw new Error('Error al eliminar el proyecto');
    }
    
    return response.text(); // Si no hay JSON, puedes usar .text() o simplemente omitir el retorno
  };
  

 /* export const fetchProjectsWithUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/proyectos/con-usuarios`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch projects with users:', error);
      throw error;
    }
  }; */

  // Añadir usuario a proyecto o asignar
export const assignUserToProject = async (proyectoId, usuarioId) => {
  try {
    const response = await fetch(`${API_URL}/usuario-proyecto/asociar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ usuario_id: usuarioId, proyecto_id: proyectoId })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to assign user to project:', error);
    throw error;
  }
};

  
  

export const fetchDefects = async () => {
    try {
      const response = await fetch(`${API_URL}/defectos`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Defects fetched:', data); // Log para verificar los datos obtenidos
      return data;
    } catch (error) {
      console.error('Failed to fetch defects:', error);
      throw error;
    }
  };
  

export const updateDefect = async (defectId, defect) => {
  try {
    const response = await fetch(`${API_URL}/defectos/${defectId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(defect)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to update defect:', error);
    throw error;
  }
};

export const analyzeCode = async (data) => {
  try {
    const response = await fetch(`${API_URL}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Aquí simplemente serializamos el objeto 'data' sin modificarlo
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to analyze code:', error);
    throw error;
  }
};



export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/usuarios`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const response = await fetch(`${API_URL}/usuarios`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to create user:', error);
    throw error;
  }
};

export const updateUser = async (userId, user) => {
  try {
    const response = await fetch(`${API_URL}/usuarios/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to update user:', error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
    try {
      const response = await fetch(`${API_URL}/usuarios/${userId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('Failed to delete user:', error);
      throw error;
    }
  };

export const fetchCasos = async () => {
  try {
    const response = await fetch(`${API_URL}/caso-pruebas`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch casos:', error);
    throw error;
  }
};

export const createCaso = async (caso) => {
  try {
    const response = await fetch(`${API_URL}/caso-pruebas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(caso)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to create caso:', error);
    throw error;
  }
};

export const updateCaso = async (casoId, caso) => {
  try {
    const response = await fetch(`${API_URL}/caso-pruebas/${casoId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(caso)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to update caso:', error);
    throw error;
  }
};

export const deleteCaso = async (casoId) => {
  try {
    const response = await fetch(`${API_URL}/caso-pruebas/${casoId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to delete caso:', error);
    throw error;
  }
};

export const fetchPlans = async () => {
  try {
    const response = await fetch(`${API_URL}/planes-pruebas`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch plans:', error);
    throw error;
  }
};

export const createPlan = async (plan) => {
  try {
    const response = await fetch(`${API_URL}/planes-pruebas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(plan)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to create plan:', error);
    throw error;
  }
};

export const updatePlan = async (planId, plan) => {
  try {
    const response = await fetch(`${API_URL}/planes-pruebas/${planId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(plan)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to update plan:', error);
    throw error;
  }
};

export const deletePlan = async (planId) => {
  try {
    const response = await fetch(`${API_URL}/planes-pruebas/${planId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to delete plan:', error);
    throw error;
  }
};

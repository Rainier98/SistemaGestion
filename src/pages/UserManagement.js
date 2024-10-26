import React, { useState, useEffect } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../services/apiService';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers().then(data => {
      console.log('Users fetched:', data);
      setUsers(data);
    });
  }, []);

  const handleSaveUser = async (user) => {
    if (user.id) {
      const updatedUser = await updateUser(user.id, user);
      setUsers(users.map(u => u.id === user.id ? updatedUser : u));
    } else {
      const newUser = await createUser(user);
      setUsers([...users, newUser]);
    }
    setCurrentUser(null);
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(u => u.id !== userId));
    } catch (error) {
      console.error('Error al eliminar usuario:', error); // Añade un log para verificar errores
    }
  };

  const handleCancelEdit = () => {
    setCurrentUser(null);
  };

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
      <UserForm user={currentUser} onSave={handleSaveUser} onCancel={handleCancelEdit} />
    </div>
  );
}

export default UserManagement;

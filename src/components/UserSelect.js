import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../services/apiService';

const UserSelect = ({ onSelect }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
    });
  }, []);

  const handleChange = (e) => {
    setSelectedUser(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <select value={selectedUser} onChange={handleChange}>
      <option value="">Selecciona un usuario</option>
      {users.map(user => (
        <option key={user.id} value={user.id}>
          {user.nombre}
        </option>
      ))}
    </select>
  );
};

export default UserSelect;
